import React, { useEffect, useState } from "react";
import "./banner.css";
import instance from "./baseurl";
import { requests } from "./requests";

function Banner() {
  //state

  const [movie, setmovie] = useState({});
  const baseurl = "https://image.tmdb.org/t/p/original/";

  const fetchdata = async () => {
    const { data } = await instance.get(requests.fetchTrending);
    setmovie(data.results[Math.floor(Math.random() * data.results.length)]);
  };
  useEffect(() => {
    fetchdata();
  }, []);
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n) + "...." : str;
  };

  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${baseurl}${movie.backdrop_path})` }}
    >
      <div className="content">
        <h1 className="title">{movie.title}</h1>
        <p>{truncate(movie?.overview, 200)}</p>
      </div>
    </div>
  );
}

export default Banner;
