import React, { useState, useEffect } from "react";
import axios from "../axios"; //rename it to be axios(it was called instance)
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results); //it assign the requested value to the 'movies'.
      return request;
    }
    fetchData();
  }, [fetchUrl]); //'[]' means it will only run once every time the row renders
  //We include fetchUrl in the '[]' because fetchUrl is a variable that exists
  //outside useEffect method block and basically useEffect depends on fetchUrl and will update
  //every time fetchUrl changes.

  return (
    <div className="row">
      <h2>{title}</h2>
      {/* we put the row in the div so we can scroll through the movies. */}
      <div className="row__posters">
        {/* we will have row posters here */}
        {/* go through every movie in the array, then make the image and return the image */}
        {movies.map((movie) => {
          return (
            <img
              key={movie.id} /* each poster is associated with an id*/
              className={`row__poster ${isLargeRow && "row__posterLarge"
                }`} /* if it is the large row then add another classname*/
              src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
              alt={movie.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Row;
