import React from "react"
import './Card.css'
import { IFilm } from "../../../models/Film";

const imgUrl = "https://image.tmdb.org/t/p/original";

type CardProps = {dataMovie : IFilm}

export const Card = ({ dataMovie }: CardProps ) => {
  return (
    <figure>
        {dataMovie.genre_ids.map(id => `${id},`)}
        {/* <img src={`${imgUrl}${dataMovie.poster_path}`}/> */}
        <figcaption>
            {/* {dataMovie.title} */}

        </figcaption>
    </figure>

  );
};