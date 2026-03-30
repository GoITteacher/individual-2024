export interface CreateNewsBody {
  title: string;
  summary: string;
  source: string;
  category: string;
  publishedAt: string;
  url: string;
  tags: string[];
}

export interface NewsItem {
  title: string;
  summary: string;
  source: string;
  category: string;
  publishedAt: string;
  url: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}
/* 
{
  "title": "string",
  "summary": "string",
  "source": "string",
  "category": "technology",
  "publishedAt": "2026-03-30T18:14:38.305Z",
  "url": "string",
  "tags": [
    "string"
  ]

  {
  "_id": "string",
  "title": "string",
  "summary": "string",
  "source": "string",
  "category": "technology",
  "publishedAt": "2026-03-30T18:14:38.333Z",
  "url": "string",
  "tags": [
    "string"
  ],
  "createdAt": "2026-03-30T18:14:38.334Z",
  "updatedAt": "2026-03-30T18:14:38.334Z"
}
}
*/
