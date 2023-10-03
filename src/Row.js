import React, { useEffect, useState } from 'react'
import instance from './baseurl'
import './row.css'
import YouTube from 'react-youtube'
import movieTrailer from 'c:/Users/amalkp/Desktop/mearnNov/reactworks/netflix/netflix/node_modules/movie-trailer/index'

function Row({title,fetchurl,isposter}) {
    const [movies,setmovies]=useState([])
    const base_url="https://image.tmdb.org/t/p/original/"
    const[trailerurl,settrailerurl]=useState("")

    //api call
    const fetchmovie=async ()=>{
        const {data}=await instance.get(fetchurl)
        setmovies(data.results)
    }

    console.log(movies);
    useEffect(()=>{
        fetchmovie()
    },[])


   


const handleClick = (movie)=> {
  if (trailerurl) {
    settrailerurl("")
  } else {
    movieTrailer(movie?.name || "")
    .then(url =>{
      const urlparams = new URLSearchParams(new URL(url).search)
      settrailerurl(urlparams.get('v'))
    }).catch(error => console.log('temporarly unavailable'))
  }
}
const opts ={
  height: "390",
  width:"100",
  playervars:{
    autoplay:1,
  }
}



  return (
    <div className='row'>
      <h1>{title}</h1>

    <div className='movierow'>
        {
            movies.map(movie=>(
                <img
                key={movie.id}
                onClick={()=> handleClick(movie)}
                 className={`movie ${isposter && 'postermovies'}`}
                 src={`${base_url}${ isposter?movie.backdrop_path:movie.poster_path}`}alt="" />

            ))
        }
    </div>
  {trailerurl && <YouTube
    videoId={trailerurl}
    opts={opts}/>}
    </div>
  )
}

export default Row
