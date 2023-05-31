import React, {useState, useEffect} from 'react';
import { Button } from './Button';

import { getGenreList } from '../../../api/ACategories';
import { IGenre } from '../../../models/IGenre';

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
            <Button value="Now Playing" action={() => getClickedCategory(nowPlayingUrl)} />
            <Button value="Upcoming" action={() => getClickedCategory(upComingUrl)} />
            <Button value="Top Rated" action={() => getClickedCategory(topRated)} />
        </div>
        <div id="genre-list">
            { genres.map( genre => <button onClick={()=> getClickedGenre(genre.id.toString())} key={genre.id}>{genre.name}</button>) }
        </div>
    </section>)
}