import React from 'react';
import { IFilm } from '../../../models/Film'
import { Card } from './Card';

type CardListProps = {
    movies: IFilm[];
}

export const CardsList = ({movies}: CardListProps) => {
    return (
        <section id='list-film'>
            { movies.map( movie => <Card dataMovie={movie} key={movie.id} />) }
        </section>
    )
}