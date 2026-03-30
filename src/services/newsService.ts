import axios from "axios";
import type { CreateNewsBody, NewsItem } from "../types/news";

async function createNewsList(body: CreateNewsBody) {
  const baseUrl = "";
  const endPoint = "";
  const url = baseUrl + endPoint;

  const res = await axios.post<NewsItem>(url, body);
  return res.data;
}
