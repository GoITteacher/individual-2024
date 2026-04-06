export interface Book {
  _id: string;
  title: string;
  author: string;
  desc: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetBooksParams {
  title: string;
  author: string;
  desc: string;
}

export interface GetBooksResponse {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  items: Book[];
}

export interface CreateBookBody {
  title: string;
  author: string;
  desc: string;
}

export interface UpdateBookBody {
  _id: string;
  title?: string;
  author?: string;
  desc?: string;
}
