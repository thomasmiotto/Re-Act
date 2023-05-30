import React from "react"
import './Card.css'
import { IFilm } from "../models/Film";

type CardProps = {dataFilm : IFilm}

export const Card = ({ dataFilm }: CardProps) => {
  return (
    <div className="center">
      <div className="article-card">
        <div className="content">
          <p className="title">{dataFilm.title}</p>
        </div>
        <img src={dataFilm.img} alt="article-cover" />
      </div>
    </div>
  );
};

