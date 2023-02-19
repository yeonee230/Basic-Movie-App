import { useEffect, useState } from "react";

function App() {
  /* 1. showing loading 2.using movie api 3. showing movie info
   */
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.0&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []); //api 실행

  return (
    <div>
      <h1>My Movie app</h1>
      {loading ? (
        <h1>Loading ... </h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <img alt="movie-poster" src={movie.medium_cover_image} />
              <h2>{movie.title}</h2>
              <h3>{movie.summary}</h3>
              {movie.hasOwnProperty("genres") ? (
                <ul>
                  {movie.genres.map( (item) => <li key={item}>{item}</li>)}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
