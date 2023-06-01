import React, { useEffect, useState } from "react";
import './DetailsCard.css';
import { IMovie } from "../../../models/IMovie";
import { useParams } from "react-router-dom";
import { getAMovie } from "../../../api/AMovie";


export const DetailsCard = () => {
    const {movieId} = useParams();

    const [movie, setMovie] = useState<IMovie | null>(null);

    useEffect(() => {
        const getMovie = async () => {
            const result = await getAMovie(movieId);
            setMovie(result ?? null);
        }
        getMovie();
        
    }, [movieId]);

    if (movie == null) return <p>Loading...</p>;

    console.log("movie", movie);

    return (
    <>
    <div className='detailsMovie'>
        <h2>{movie.title}</h2> 
        <div className='description'>
            <img src={"https://image.tmdb.org/t/p/original" + movie.poster_path} alt="affiche du film" />
            <p className='overview'>
                {movie.overview}
            </p>
        </div>
    </div>
    </>   
    )
    
}