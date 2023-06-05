import React, {useEffect, useState} from 'react';
import './Home.css'

import { IMovie } from "../../models/IMovie";
import { CardsList } from './components/CardList';
import { Card } from './components/Card';
import { Header } from '../../componentsShared/Header';
//API
import { getMovieList, getMovieListByGenre } from '../../api/AMovie';
import { Filters } from './components/Filters';
import {SearchBar} from './components/Search';

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
        const clone = [...genreList];

        if (clone.includes(genreId)){
            const bouh = clone.filter((genre) => genre != genreId);
            setGenreList(bouh);
        }
        else {
            clone.push(genreId);
            setGenreList(clone);
        }
    }

    const getGenre = async (genreList: string) => {
        if (genreList.length > 0) {
            const result = await getMovieListByGenre(genreList);
            if (result != null)
                setMovieList(result.results);
            else 
                console.log('Error get genre');
        }
        else {
            getList()
        }
    }

    useEffect(() => {
        getGenre(genreList.toString());
    }, [genreList])

    return (
        <section>
            <Filters getClickedCategory={getClickedCategory} getClickedGenre={getClickedGenre}/>
            {genreList.join(',')}
            <hr />
            <CardsList movies={movieList} />             
        </section>
    )
}