import React, {useState, useEffect} from 'react';
import { ButtonCateg, ButtonGenre } from './Button';

import { getGenreList } from '../../../api/ACategories';
import { IGenre } from '../../../models/IGenre';

import './Filters.css'

const topRated = "top_rated";
const nowPlayingUrl = "now_playing";
const upComingUrl = "upcoming";


type filtersProps = {
    getClickedCategory: (category: string) => void;
    getClickedGenre: (category: string) => void;
}

export const Filters = ({ getClickedCategory, getClickedGenre }: filtersProps) => {
    const [genres, setGenres] = useState<IGenre[]>([]);

    const getList = async () => {
        const result = await getGenreList();
        if (result != null) {
            setGenres(result.genres);
        } else {
            console.log('Error get all');
        }
    }

    useEffect(() => {
        getList();
    }, [])

    return (<section id="filter">
        <div id='categories-list'>
            <div className="containerCateg">
            <ButtonCateg value="Now Playing" action={() => getClickedCategory(nowPlayingUrl)} />
            <ButtonCateg value="Upcoming" action={() => getClickedCategory(upComingUrl)} />
            <ButtonCateg value="Top Rated" action={() => getClickedCategory(topRated)} />
        </div>
        </div>
        <div className = "containerGenre" id="genre-list">
        {genres.map( genre => (<ButtonGenre key={genre.id}value={genre.name}action={() => getClickedGenre(genre.id.toString())}/>))}
      </div>


    </section>)
}