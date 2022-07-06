import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trendingMovies: [],
  upcomingMovies: [],
  genre: [],
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addTrendingMovies: (state, { payload }) => {
      state.trendingMovies = payload;
    },
    addUpcomingMovies: (state, { payload }) => {
      state.upcomingMovies = payload;
    },
    addMoviesGenre: (state, { payload }) => {
      state.genre = payload;
    },
  },
});

export const { addTrendingMovies, addUpcomingMovies, addMoviesGenre } =
  movieSlice.actions;
export const getAllTrendingMovies = (state) => state.movies.trendingMovies;
export const getAllUpcomingMovies = (state) => state.movies.upcomingMovies;
export const getAllMoviesGenre = (state) => state.movies.genre;
export const movieReducer = movieSlice.reducer;
