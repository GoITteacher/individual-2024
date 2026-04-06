export interface PostSongsBody {
  title: string;
  artist: string;
  album: string;
  genre: string;
  releaseYear: number;
  durationSeconds: number;
  label: string;
  language: string;
}
export interface UpdateSongsBody {
  title?: string;
  artist?: string;
  album?: string;
  genre?: string;
  releaseYear?: number;
  durationSeconds?: number;
  label?: string;
  language?: string;
}
/* 
{
  "title": "string",
  "artist": "string",
  "album": "string",
  "genre": "string",
  "releaseYear": 0,
  "durationSeconds": 0,
  "label": "string",
  "language": "string"
}


{
  "_id": "string",
  "title": "string",
  "artist": "string",
  "album": "string",
  "genre": "string",
  "releaseYear": 0,
  "durationSeconds": 0,
  "label": "string",
  "language": "string",
  "createdAt": "2026-03-30T18:09:23.306Z",
  "updatedAt": "2026-03-30T18:09:23.306Z"
}
*/
export interface Song {
  _id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
  releaseYear: number;
  durationSeconds: number;
  label: string;
  language: string;
  createdAt: string;
  updatedAt: string;
}
export interface GetListSongResponse {
  page: 0;
  perPage: 0;
  totalPages: 0;
  totalItems: 0;
  hasNextPage: true;
  hasPreviousPage: true;
  items: Song[];
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
      "artist": "string",
      "album": "string",
      "genre": "string",
      "releaseYear": 0,
      "durationSeconds": 0,
      "label": "string",
      "language": "string",
      "createdAt": "2026-04-06T17:56:11.999Z",
      "updatedAt": "2026-04-06T17:56:11.999Z"
    }
  ]
}
*/
