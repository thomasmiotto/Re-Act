import React from "react"
import axios from "axios"
import { IMovie } from "../models/IMovie"

export const getMovieList = async (listName:string = "top_rated") => {
    const urlCall = `${process.env.REACT_APP_API_URL}/movie/${listName}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${1}`
    
    return axios
      .get <{ results: IMovie[] }> (urlCall)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
}

export const getMovieListByGenre = async (genreList:string = "") => {
  const urlCall = `${process.env.REACT_APP_API_URL}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreList}`

  return axios
    .get <{ results: IMovie[] }> (urlCall)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

export const getAMovie = async (movieId: string | undefined) => {
  if (movieId == null) return;

  const urlCall = `${process.env.REACT_APP_API_URL}/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`

  return axios
  .get <IMovie> (urlCall)
  .then((response) => {
    return response.data;
  })
  .catch((error)=> {
    console.log(error);
  });
  
}