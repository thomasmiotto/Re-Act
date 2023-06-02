import React, { useState } from 'react';
import axios from 'axios';

type SearchBarProps =  {
  onSearch: (results: any[]) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/keyword?query=&page=1`, {
        params: {
          api_key: 'process.env.REACT_APP_API_KEY',
          query: searchTerm,
        }
      });
      

      const results = response.data.results;
      onSearch(results);

      // Traitement des résultats de recherche
    console.log(results); // Affichage des résultats dans la console

    // Autres actions avec les résultats, par exemple :
    // - Mettre à jour l'état de votre application avec les résultats
    // - Afficher les résultats à l'utilisateur

    } catch (error) {
      console.error('Une erreur s\'est produite lors de la recherche :', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Rechercher</button>
    </div>
  );
};

export default SearchBar;
