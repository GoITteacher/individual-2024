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
