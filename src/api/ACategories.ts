import axios from "axios"
import React from "react"
import { ICategory } from "../models/Categories"

export const getGenreList = async () => {
    const urlCall = `${process.env.REACT_APP_API_URL}/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`
    console.log("acate")
    return axios
      .get <{ genres: ICategory[] }> (urlCall)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
