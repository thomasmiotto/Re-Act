import { ICategory } from "./Categories";

export interface IFilm {
    id: number;
    title : string;
    category : ICategory[];
    img : string
    overview:string
}