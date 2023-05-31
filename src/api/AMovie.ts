import React from "react"
import axios from "axios"
import { IFilm } from "../models/Film"

export const getMovieList = async (listName:string = "top_rated") => {
    const urlCall = `${process.env.REACT_APP_API_URL}/movie/${listName}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${1}`

    console.log("getmovielist")
    
    return axios
      .get <{ results: IFilm[] }> (urlCall)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
}

export const getMovieListByGenre = async (genreList:string = "") => {
  const urlCall = `${process.env.REACT_APP_API_URL}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreList}`
  console.log("getMovieListByGenre")

  console.log(urlCall);

  return axios
    .get <{ results: IFilm[] }> (urlCall)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}
 // https://api.themoviedb.org/3/discover/movie?api_key=b5e8754038ec2501596ead0857180186&include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=id,id,id