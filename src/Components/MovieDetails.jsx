import React from 'react'
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import { useState , useEffect } from 'react';
function MovieDetails() {
    const prams = useParams()

    const [movie , setMovie] = useState([])

    const getMoviesDetails = async () => {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${prams.id}?api_key=52ef927bbeb21980cd91386a29403c78&language=ar`);
        setMovie(response.data)
    }

    useEffect(() => {
        getMoviesDetails()
      })
    

  return (
    <>

<section>
  <div className="container py-5">
    <div className="row">
      <div className="col-md-3">
        <div className="card text-center p-3">
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
        </div>
      </div>
      <div className="col-md-9">
        <div className="card p-3 text-start">
          <h3 className="py-1">  الاسم : {movie.title} </h3>
          <h3 className="py-1"> التقييم : {movie.vote_average}</h3>
          <h3 className="py-1"> سنة الانتاج :  {movie.release_date} </h3>
          <h3> تفاصيل الفيلم : <br /> {movie.overview} </h3>
          <Link className='h3' to={'/'}>رؤية الفيلم</Link>
        </div>
      </div>
    </div>
  </div>
</section>


    </>
  )
}

export default MovieDetails