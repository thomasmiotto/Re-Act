import React from "react"
import './Card.css'

import { IMovie } from "../../../models/Movie";

type CardProps = {dataMovie : IMovie}

export const Card = ({ dataMovie }: CardProps) => {
  return (
    <div className="center">
      <div className="article-card">
        <div className="content">
          <p className="title">{dataMovie.title}</p>
        </div>
        <img src={dataMovie.img} alt="article-cover" />
      </div>
    </div>
  );
};


