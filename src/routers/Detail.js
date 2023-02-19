import { useEffect, useState, useCallback} from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [moviedata, setMoviedata] = useState({});
  const [loading, setLoading] = useState(true);

  const getMovies = useCallback(async () => {
    const json = await (
      await fetch(
        `https://yts.torrentbay.to/api/v2/movie_details.json?movie_id=${id}`
      )
    ).json();
    // const response = await fetch(
    //   `https://yts.torrentbay.to/api/v2/movie_details.json?movie_id=${id}`
    // );
    // const json = await response.json();

    setMoviedata(json.data.movie);
    setLoading(false);
  },[id]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <div>
      {loading ? (
        <h1>Loading ... </h1>
      ) : (
        <div>
          <img src={moviedata.large_cover_image} alt={moviedata.title} />
          <h1>{moviedata.title}</h1>
          <p>{moviedata.description_full}</p>
        </div>
      )}
    </div>
  );
}

export default Detail;
