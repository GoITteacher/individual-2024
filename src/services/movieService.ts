import axios from "axios";
import type {
  CreateMovieBody,
  GetMoviesParams,
  GetMoviesResponse,
  Movie,
} from "../types/movies";

export const getMovies = async (params: GetMoviesParams) => {
  const res = await axios.get<GetMoviesResponse>("/public/movies");
  return res.data;
};

export const createMovie = async (body: CreateMovieBody) => {
  const res = await axios.post<Movie>("/public/movies", body);
  return res.data;
};
