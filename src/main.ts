// string number boolean null undefined

import axios from "axios";
import type { GetMoviesResponse, Movie } from "./types/movies";

// const x = "Hello";
// const y = 25;

// function foo(x: number) {
//   if (x > 0) {
//     return x;
//   }
// }

//!=========================================

// const items: string[] = ["Hello", "World", 25, true, "Hello"];
// const numbers: number[] = [212, 12, 3, 4, 1, 2, 5, 1, "Hello"];
// numbers.push(123)
// numbers.push('awdawd')

//!=========================================

// function showItems(arr: number[]){
//     for(const item of arr){
//         item.
//     }
// }

//!=========================================

// interface User {
//   name: string;
//   age?: number | string;
//   isAdmin?: boolean;
//   phoneNumber?: string | null | number;
// }

// const user: User = {
//   name: "Vasya",
//   age: 25,
//   isAdmin: true,
//   phoneNumber: null,
// };

// const users: User[] = [];

// users.push({
//   name: "Vasya",
//   age: 25,
//   isAdmin: true,
//   phoneNumber: null,
// });

// users.push({
//   name: "Vasya",
//   phoneNumber: null,
// });

//!=========================================

// const res = await axios.get<string[]>("/awdawdw");
// const items = res.data;
// items.filter()

//!=========================================

// async function getMovies() {
//   const res = await axios.get<GetMoviesResponse>("/public/movies");
//   return res.data;
// }

// async function getMovieById(id: string) {
//   const res = await axios.get<Movie>("/public/movies");
//   return res.data;
// }
