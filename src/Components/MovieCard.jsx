import React from 'react'
import { Link} from "react-router-dom";
import './MovieCard.css'

function MovieCard({movie}) {
  return (
    <>
    <div className="col-md-3 col-sm-6 mb-2">
      <div className="card p-3 text-center">
        <img className='film-img' src= {`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
        <h3 className="py-1"> الإسم : <br /><span className='text-warning'>{movie.title}</span> </h3>
        <h3 className="py-1">سنه الإنتاج : <br /><span className='text-warning'>{movie.release_date}</span></h3>
        <h3 className="py-1">التقييم : <br /> <span className='text-warning'>{movie.vote_average}</span></h3>
        <Link to={`/movie/${movie.id}`} className="btn btn-warning">التفاصيل</Link>
      </div>
    </div>

    </>
  )
}

export default MovieCard