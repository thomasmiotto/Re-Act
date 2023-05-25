import { ICategory } from "./Categories";

export interface IFilm {
    id: number;
    title : string;
    catgory : ICategory[];
    img : string
    overview:string
}