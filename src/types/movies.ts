export interface GetMoviesParams {
  page: number;
  perPage: number;
  sortOrder: string;
}

export interface Movie {
  _id: string;
  title: string;
  director: string;
  genre: string;
  releaseYear: number;
  rating: number;
  durationMinutes: number;
  language: string;
  summary: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetMoviesResponse {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  items: Movie[];
}

export interface CreateMovieBody {
  firstName: string;
  lastName: string;
  major: string;
  cohortYear: number;
  gpa: number;
  enrolled: boolean;
}
