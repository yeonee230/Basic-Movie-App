import { useEffect, useState } from "react";
import Movie from "../components/Movie";

const fetchUrl = `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.0&sort_by=year`;

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
      const response = await fetch(fetchUrl);
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
              <Movie
                id={movie.id}
                key={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </div>
    );
}

export default Home;
