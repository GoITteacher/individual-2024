import axios from "axios";
import type { GetLessonsResponse } from "../types/lessons";

async function getLessons() {
  const baseUrl = "";
  const endPoint = "";
  const url = baseUrl + endPoint;

  const res = await axios.get<GetLessonsResponse>(url);
  return res.data.items;
}
