import React from "react";

export interface IMovie {
    id: number;
    title : string;
    genre_ids : number[];
    backdrop_path : string;
    poster_path: string;
    overview:string
}