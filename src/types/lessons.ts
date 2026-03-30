interface Lesson {
  _id: string;
  title: string;
  subject: string;
  level: string;
  teacher: string;
  durationMinutes: number;
  publishedAt: string;
  summary: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetLessonsResponse {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPreviousPage: true;
  items: Lesson[];
}
/* 
{
  "page": 0,
  "perPage": 0,
  "totalPages": 0,
  "totalItems": 0,
  "hasNextPage": true,
  "hasPreviousPage": true,
  "items": [
    {
      "_id": "string",
      "title": "string",
      "subject": "string",
      "level": "beginner",
      "teacher": "string",
      "durationMinutes": 0,
      "publishedAt": "2026-03-30T17:41:46.595Z",
      "summary": "string",
      "createdAt": "2026-03-30T17:41:46.595Z",
      "updatedAt": "2026-03-30T17:41:46.595Z"
    }
  ]
}
*/
