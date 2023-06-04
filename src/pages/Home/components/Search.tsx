import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Search.css';
import { IMovie } from '../../../models/IMovie';

// type SearchBarProps =  {
//   onSearch: (results: any[]) => void;
// }

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  
  const handleSearch = async () => {
    // try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchTerm}`);
      
      const results = response.data.results;

      console.log(results); 
      const searchResult = results.map((result: IMovie) => (result.title));
      // console.log(searchResult);

    // } catch (error) {
    //   console.error('Une erreur s\'est produite lors de la recherche :', error);
    // }
    console.log(searchResult);
    if(results.title)
    return searchResult;
  };


  return (
      <div>
        <input
          type="text"
          placeholder='what movie?'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Rechercher</button>
        <div>
          {/* <p>{searchResult.map}</p> */}
        </div>
      </div>
    
  );
};



/////////////////////////////////////////////////////////////