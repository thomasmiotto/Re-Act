import React, { useState, useEffect } from 'react';
import { ButtonCateg, ButtonGenre } from './Button';

import { getGenreList } from '../../../api/ACategories';
import { IGenre } from '../../../models/IGenre';

import './Filters.css';
import { SearchBar } from './Search';

const topRated = "top_rated";
const nowPlayingUrl = "now_playing";
const upComingUrl = "upcoming";

type filtersProps = {
  getClickedCategory: (category: string) => void;
  getClickedGenre: (category: string) => void;
};

export const Filters = ({ getClickedCategory, getClickedGenre }: filtersProps) => {
  const [genres, setGenres] = useState<IGenre[]>([]);
  const [activeButtonId, setActiveButtonId] = useState<string | null>(null);

  const getList = async () => {
    const result = await getGenreList();
    if (result != null) {
      setGenres(result.genres);
    } else {
      console.log('Error get all');
    }
  };

  const handleCategoryClick = (category: string) => {
    setActiveButtonId(category);
    getClickedCategory(category);
  };

  const handleGenreClick = (genreId: string) => {
    getClickedGenre(genreId);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <section id="filter">
      <div id="categories-list">
        <div className="containerCateg">
          <ButtonCateg
            value="Now Playing"
            action={() => handleCategoryClick(nowPlayingUrl)}
            isActive={activeButtonId === nowPlayingUrl}
          />
          <ButtonCateg
            value="Upcoming"
            action={() => handleCategoryClick(upComingUrl)}
            isActive={activeButtonId === upComingUrl}
          />
          <ButtonCateg
            value="Top Rated"
            action={() => handleCategoryClick(topRated)}
            isActive={activeButtonId === topRated}
          />
        <SearchBar/>

        </div>

      </div>
      <div className="containerGenre" id="genre-list">
        {genres.map((genre) => (
          <ButtonGenre
                key={genre.id}
                value={genre.name}
                action={() => handleGenreClick(genre.id.toString())} isActive={false}          />
        ))}
      </div>
    </section>
  );
};
