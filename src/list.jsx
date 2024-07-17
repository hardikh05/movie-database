import  { useEffect, useState } from 'react';
import axios from 'axios';

export function Movie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://dummyapi.online/api/movies');
        setMovies(response.data);
      } catch (error) {
        console.error('error');
      }
    };

    fetchMovies();
  }, []);

 
  return (
    <div>
      <h1>Movie List</h1>
      <div>
        {movies.map(movie => (
          <div key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <p>Date of release: {movie.releaseDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

