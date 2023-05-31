import React from 'react';
import { IMovie } from '../../../models/IMovie';
import { Card } from './Card';

type CardListProps = {
    movies: IMovie[];
}

export const CardsList = ({movies}: CardListProps) => {
    return (
        <section id='list-film'>
            { movies.map( movie => <Card dataMovie={movie} key={movie.id} />) }
        </section>
    )
}