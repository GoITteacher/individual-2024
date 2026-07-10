# S3 Bucket Connection

## 1. Install dependencies

```bash
npm install @aws-sdk/client-s3 @aws-sdk/s3-request-presigner
npm install -D typescript @types/node
```

## 2. Configure `serverless.yml`

### Provider

The `provider` section configures the Lambda runtime, environment variables, and IAM permissions.

```yml
provider:
  name: aws
  runtime: nodejs20.x
  region: eu-central-1
  timeout: 30

  environment:
    VAR1: ${env:VAR1, "DEFAULT VAR1"}
    IMAGES_BUCKET_NAME: ${self:service}-${sls:stage}-images

  iamRoleStatements:
    - Effect: Allow
      Action:
        - s3:PutObject
        - s3:GetObject
      Resource:
        - arn:aws:s3:::${self:service}-${sls:stage}-images
        - arn:aws:s3:::${self:service}-${sls:stage}-images/*
```

Explanation:

- `region` – AWS region where resources will be created.
- `IMAGES_BUCKET_NAME` – bucket name available in Lambda through `process.env`.
- `s3:PutObject` – allows uploading files.
- `s3:GetObject` – allows reading files.
- First ARN references the bucket itself.
- Second ARN references every object inside the bucket.

---

### Resources

Creates the S3 bucket and makes uploaded files publicly readable.

```yml
resources:
  Resources:
    ImagesBucket:
      Type: AWS::S3::Bucket
      Properties:
        BucketName: ${self:service}-${sls:stage}-images

        PublicAccessBlockConfiguration:
          BlockPublicAcls: false
          IgnorePublicAcls: false
          BlockPublicPolicy: false
          RestrictPublicBuckets: false

    ImagesBucketPolicy:
      Type: AWS::S3::BucketPolicy
      Properties:
        Bucket:
          Ref: ImagesBucket
        PolicyDocument:
          Version: "2012-10-17"
          Statement:
            - Sid: PublicRead
              Effect: Allow
              Principal: "*"
              Action:
                - s3:GetObject
              Resource:
                - arn:aws:s3:::${self:service}-${sls:stage}-images/*
```

Explanation:

- `ImagesBucket` creates the bucket.
- `PublicAccessBlockConfiguration` allows bucket policies to grant public access.
- `ImagesBucketPolicy` allows everyone to download objects.
- Uploading is still allowed only through the Lambda IAM role.

---

## 3. Generate a Presigned Upload URL

```ts
import crypto from "node:crypto";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3 = new S3Client({
  region: process.env.AWS_REGION,
});

type CreateSignedUploadUrlParams = {
  contentType: string;
};

type CreateSignedUploadUrlResponse = {
  uploadUrl: string;
  key: string;
};

export const createSignedUploadUrl = async ({
  contentType,
}: CreateSignedUploadUrlParams): Promise<CreateSignedUploadUrlResponse> => {
  if (!contentType) {
    const error = new Error("Missing contentType");
    (error as Error & { status: number }).status = 400;
    throw error;
  }

  const bucketName = process.env.IMAGES_BUCKET_NAME;

  if (!bucketName) {
    const error = new Error("Missing IMAGES_BUCKET_NAME");
    (error as Error & { status: number }).status = 500;
    throw error;
  }

  const key = crypto.randomUUID();

  const command = new PutObjectCommand({
    Bucket: bucketName,
    Key: key,
    ContentType: contentType,
  });

  const uploadUrl = await getSignedUrl(s3, command, {
    expiresIn: 300,
  });

  return {
    uploadUrl,
    key,
    previewURL: `https://${bucketName}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`,
  };
};
```

## 4. Upload file from the client

```typescript
await fetch(uploadUrl, {
  method: "PUT",
  headers: {
    "Content-Type": file.type,
  },
  body: file,
});
```

After a successful upload, store the returned `key` (or build a public URL if the bucket is public). Do not store the `uploadUrl`, because it expires after a few minutes.

---

# S3 bucket connection OLD VERSION

### Provider

```yml
provider:
name: aws
runtime: nodejs20.x
timeout: 30
environment:
    VAR1: ${env:VAR1, "DEFAULT VAR1"}
    IMAGES_BUCKET_NAME: ${self:service}-${sls:stage}-images
  iamRoleStatements:
    - Effect: Allow
      Action:
        - s3:PutObject
        - s3:GetObject
      Resource:
        - arn:aws:s3:::${self:service}-${sls:stage}-images - arn:aws:s3:::${self:service}-${sls:stage}-images/\*
```

### Resources

```yml
resources:
  Resources:
    ImagesBucket:
      Type: AWS::S3::Bucket
      Properties:
        BucketName: ${self:service}-${sls:stage}-images

        PublicAccessBlockConfiguration:
          BlockPublicAcls: false
          IgnorePublicAcls: false
          BlockPublicPolicy: false
          RestrictPublicBuckets: false

    ImagesBucketPolicy:
      Type: AWS::S3::BucketPolicy
      Properties:
        Bucket:
          Ref: ImagesBucket
        PolicyDocument:
          Version: "2012-10-17"
          Statement:
            - Sid: PublicRead
              Effect: Allow
              Principal: "*"
              Action:
                - s3:GetObject
              Resource:
                - arn:aws:s3:::${self:service}-${sls:stage}-images/*
```

### Controller

```js
import AWS from "aws-sdk";
const s3 = new AWS.S3({ signatureVersion: "v4" });

export const createSignedUploadUrl = async ({ contentType }) => {
  if (!contentType) {
    const error = new Error("Missing contentType");
    error.status = 400;
    throw error;
  }

  const bucketName = process.env.IMAGES_BUCKET_NAME;
  if (!bucketName) {
    const error = new Error("Missing IMAGES_BUCKET_NAME");
    error.status = 500;
    throw error;
  }

  const key = crypto.randomBytes(8).toString("hex");
  const uploadUrl = await s3.getSignedUrlPromise("putObject", {
    Bucket: bucketName,
    Key: key,
    ContentType: contentType,
    Expires: 60 * 5,
  });

  return {
    uploadUrl,
    key,
  };
};
```
