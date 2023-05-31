import React, {useEffect, useState} from 'react';
import './Home.css'

import { IMovie } from "../../models/IMovie";
import { CardsList } from './components/CardsList';
import { Button } from './components/Button';

//API
import { getMovieList, getMovieListByGenre } from '../../api/AMovie';
import { Filters } from './components/Filters';

// type homeProps = {}

export const Home = () => {
    const [movieList, setMovieList] = useState<IMovie[]>([]);
    const [category, setCategory] = useState<string | undefined>(undefined);
    const [genreList, setGenreList] = useState<string[] | undefined>(undefined);

    const getList = async (listName: string = "now_playing") => {
        const result = await getMovieList(listName);
        if (result != null) {
            setMovieList(result.results);
        } else {
            console.log('Error get all');
        }
    }
    
    useEffect(() => {
        getList(category);
    }, [category]);
    
    const getClickedCategory = (category: string) => {
        setCategory(category);
    }
    
    const getGenre = async (genreList: string = "now_playing") => {
        if (genreList) {
            const result = await getMovieListByGenre(genreList);
            if (result != null) {
                setMovieList(result.results);
            } else {
                console.log('Error get genre');
            }
        }
    }

    const getClickedGenre = (genreId: string) => {
        if (genreList) {
            if (genreList.includes(genreId))
                setGenreList(genreList.filter((genre) => genre != genreId));
            else
                genreList.push(genreId);

        }
        else 
            setGenreList([genreId]);
        console.log(genreList);
    }


    // useEffect(() => {
    //     getGenre(genreList?.toString());
    // }, [genreList])

    return (
        <section>
            <Filters getClickedCategory={getClickedCategory} getClickedGenre={getClickedGenre}/>
            <hr />
            <CardsList movies={movieList} />
        </section>
    )
}