import React from "react"
import './Card.css'
import { IFilm } from "../../../models/Film";

type CardProps = {dataFilm : IFilm}

export const Card = ({ dataFilm }: CardProps ) => {
  return (
    <figure>
        <img src={dataFilm.img}/>
        <figcaption>
            <div>{dataFilm.title}</div>
        </figcaption>
    </figure>

  );
};