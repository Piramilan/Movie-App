import { API_KEY, BASE_URL } from "../constants/AppConstants";

export async function getTrendingMovies() {
  const request = await fetch(
    `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&language=en-US`
  ).then((res) => res.json());

  return request.results;
}

export async function getUpComingMovies() {
  const request = await fetch(
    `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
  ).then((res) => res.json());

  return request.results;
}

export async function getMoviesGenre() {
  const request = await fetch(
    `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
  ).then((res) => res.json());

  return request;
}
