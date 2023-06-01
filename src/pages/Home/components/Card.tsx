import React from "react"
import './Card.css'
import { Link } from "react-router-dom";

import { IMovie } from "../../../models/IMovie";

type CardProps = {dataMovie : IMovie}

export const Card = ({ dataMovie }: CardProps) => {
  const imgUrl = "https://image.tmdb.org/t/p/original";

  return (
    <div className="center">
      <div className="article-card">
        <div className="content">
          {/* <p className="title">{dataMovie.title}</p> */}
         <p className="title">{dataMovie.title}</p>
        </div>
        <Link to={`movie/${dataMovie.id}`}><img src={`${imgUrl}${dataMovie.poster_path}`} alt="article-cover" /></Link>
      </div>
    </div>
  );
};

