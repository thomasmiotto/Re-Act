import { ICategory } from "./Categories";

export interface IMovie {
    id: number;
    title : string;
    category : ICategory[];
    img : string
    overview:string
}