import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Search.css';
import './Button.css'
import { IMovie } from '../../../models/IMovie';
import { CardsList } from './CardList';


// type SearchBarProps =  {
//   onSearch: (results: any[]) => void;
// }

// export const SearchBar = () => {
//   const [searchTerm, setSearchTerm] = useState('');

//   // useEffect(()=> {
//   //   console.log("hello")
//   //   if(searchTerm === ""){
//   //     getAMovie(searchTerm)
//   //   } else {
//   //     HandleSearch();
//   //   }
//   // }, [searchTerm ])
  
//   const HandleSearch = async () => {
//     // try {
//       const response = await axios.get(`${process.env.REACT_APP_API_URL}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchTerm}`);
      
//       const results = response.data.results;

//       console.log(results); 
//       const searchResult = results.map((result: IMovie) => (result.title));
//       // console.log(searchResult);

//     // } catch (error) {
//     //   console.error('Une erreur s\'est produite lors de la recherche :', error);
//     // }
   
//     console.log(searchResult);
//     if(results.title)
//     return searchResult;
    
//   };



//   return (
//       <div>
//         <input
//           type="text"
//           placeholder='what movie?'
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}/>
//         <button onClick={HandleSearch}>Rechercher</button>
//         <div>
//           {/* <p>{searchResult.map}</p> */}
//         </div>
//       </div>
    
//   );
// };



////////////////////////////////////////////////////////////

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const HandleSearch = async () => {
    // try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchTerm}`);
      
      const results = response.data.results;

      const searchResult = results.map((result: IMovie) => (result.title));
      console.log(searchResult);
      // console.log(results);

    // } catch (error) {
    //   console.error('Une erreur s\'est produite lors de la recherche :', error);
    // }
   
    return ( 
      <ul>
        {/* {results.title} */}
        <li>{searchResult}</li>
      </ul>
    );
    
  };



  return (
    // console.log(searchTerm);
      <div className='search'>
        <input
          type="search"
          placeholder='What movie are you looking for?'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}/>
        <button onClick={HandleSearch} className='buttonCateg'>Rechercher</button>
        {/* <ul>
          <li>
            {results.map((result: IMovie) => <li>{result.title}</li>)};
          </li>
        </ul> */}
      </div>
  );
};



////////////////////////////////////////////////

// export const SearchBar = () => {
//   const [searchTerm, setSearchTerm] = useState('');

//   // const HandleSearch = async () => {
//   //   // try {
//   //     const response = await axios.get(`${process.env.REACT_APP_API_URL}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchTerm}`);
      
//   //     const results = response.data.results;

//   //     // console.log(results); 
//   //     const searchResult = results.map((result: IMovie) => (result.title));
//   //     console.log(searchResult);

//   //   // } catch (error) {
//   //   //   console.error('Une erreur s\'est produite lors de la recherche :', error);
//   //   // }
   
//   //   return ( 
//   //     <ul>
//   //       {results.map((result: IMovie) => <li>{result.title}</li>)};
//   //     </ul>
//   //   );
    
//   // };

//   const getSearch = async() => {
//     const response = await axios.get(`${process.env.REACT_APP_API_URL}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchTerm}`);
//     const results = response.data.results;
//   } 
//   getSearch();
// }, [searchTerm];

//   if(searchTerm == ) return ( 
//     result.title
//   )
  
//   return (
//       <div className='search'>
//         <input
//           type="text"
//           placeholder='what movie?'
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}/>
//         {/* <button onClick={HandleSearch} className='buttonCateg'>Rechercher</button>}*/}
//         {/* <ul>
//           {results.map((result) => <li>{result.title}</li>)}
//         </ul> */}
//       </div>
//   );
// };