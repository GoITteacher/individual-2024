export interface Student {
  _id: string;
  firstName: string;
  lastName: string;
  major: string;
  cohortYear: number;
  gpa: number;
  enrolled: true;
  createdAt: string;
  updatedAt: string;
}

export interface GetStudentsResponse {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: true;
  hasPreviousPage: true;
  items: Student[];
}

export interface CreateStudentBody {
  firstName: string;
  lastName: string;
  major: string;
  cohortYear: number;
  gpa: number;
  enrolled: boolean;
}
