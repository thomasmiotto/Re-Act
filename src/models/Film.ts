import { ICategory } from "./Categories";

export interface IFilm {
    id: number;
    title : string;
    genre_ids : number[];
    backdrop_path : string;
    poster_path: string;
    overview:string
}