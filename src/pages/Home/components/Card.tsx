import React from "react"
import './Card.css'

import { IMovie } from "../../../models/IMovie";

type CardProps = {dataMovie : IMovie}

export const Card = ({ dataMovie }: CardProps) => {
  const imgUrl = "https://image.tmdb.org/t/p/original";

  return (
    <div className="center">
      <div className="article-card">
        <div className="content">
          <p className="title">{dataMovie.title}</p>
        </div>
        <img src={`${imgUrl}${dataMovie.backdrop_path}`} alt="article-cover" />
      </div>
    </div>
  );
};

//{dataMovie.genre_ids.map(id => `${id},`)}
