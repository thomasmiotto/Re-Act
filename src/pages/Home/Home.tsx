import React, {useEffect, useState} from 'react';
import './Home.css'

import { IMovie } from "../../models/IMovie";
import { CardsList } from './components/CardList';
import { Button } from './components/Button';

//API
import { getMovieList, getMovieListByGenre } from '../../api/AMovie';
import { Filters } from './components/Filters';

// type homeProps = {}

export const Home = () => {
    const [movieList, setMovieList] = useState<IMovie[]>([]);
    const [category, setCategory] = useState<string | undefined>(undefined);
    const [genreList, setGenreList] = useState<string[]>([]);

    const getList = async (listName: string = "now_playing") => {
        const result = await getMovieList(listName);
        if (result != null) {
            setMovieList(result.results);
        } else {
            console.log('Error get all');
        }
    }
    
    const getClickedCategory = (category: string) => {
        setCategory(category);
    }

    useEffect(() => {
        getList(category);
    }, [category]);

    const getClickedGenre = (genreId: string) => {
        console.log("--------------enter btn-----------")
        console.log(`Value of id: ${genreId}`);
        console.log(genreList);

        if (genreList) {
            console.log("if")
            if (genreList.includes(genreId)){console.log("if if")
                const bouh = genreList.filter((genre) => genre != genreId);
                console.log("bouh = ", bouh);
                setGenreList(bouh);
            }
            else {
                console.log("if elfe")
                genreList.push(genreId);
                setGenreList(genreList);
                console.log("genre list", genreList);
            }
        }
        else {console.log("else")
            setGenreList([genreId]);}
        console.log("--------------click-----------")

        console.log(genreList);
        console.log("--------------exit btn-----------")
    }

    const getGenre = async (genreList: string) => {
        console.log(`getgenre : ${genreList} >`)
    
        if (genreList) {
            console.log("getgenrr if")
            const result = await getMovieListByGenre(genreList);
            if (result != null) {
                setMovieList(result.results);
            } else {
                console.log('Error get genre');
            }
        }
    }

    useEffect(() => {
        getGenre(genreList.toString());
    }, [genreList])

    return (
        <section>
            <Filters getClickedCategory={getClickedCategory} getClickedGenre={getClickedGenre}/>
            <hr />
            <CardsList movies={movieList} />
        </section>
    )
}