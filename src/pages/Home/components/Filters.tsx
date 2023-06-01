import React, {useState, useEffect} from 'react';
import { Button, Button2 } from './Button';

import { getGenreList } from '../../../api/ACategories';
import { IGenre } from '../../../models/IGenre';

import './Button.css'

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
            <div className="container1">
            <Button value="Now Playing" action={() => getClickedCategory(nowPlayingUrl)} />
            <Button value="Upcoming" action={() => getClickedCategory(upComingUrl)} />
            <Button value="Top Rated" action={() => getClickedCategory(topRated)} />
        </div>
        </div>
        <div className = "container2" id="genre-list">
        {genres.map( genre => (<Button2 key={genre.id}value={genre.name}action={() => getClickedGenre(genre.id.toString())}/>))}
      </div>


    </section>)
}