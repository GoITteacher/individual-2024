// type SongId = string;
// type Location = "Lviv" | "Kyiv" | "Dnipro";

// interface UserInfo {
//   userName: string;
//   userId: string;
// }

// interface Product {
//   productName: string;
//   price: number;
// }

// type Order = UserInfo & Product;

// const obj: Order = {
//   userName: "test",
//   userId: "test",
//   productName: "test",
//   price: 3000,
// };

export interface Student {
  _id: SongId;
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

//!=========================================
