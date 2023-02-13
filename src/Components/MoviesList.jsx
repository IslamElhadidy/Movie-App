import React from 'react'
import MovieCard from './MovieCard';
import Pagigation from './Pagigation';

function MoviesList({movies , getPage}) {

  return (
    <>
    
<section id="movies-list" className="py-5">
  <div className="container">
    <div className="row">
      {
        movies && movies.map((movie) => {
          return (
            <MovieCard movie={movie} key={movie.id}/>
          )
        })
      }
        
      </div>
      <Pagigation getPage={getPage}/>
  </div>
</section>



    </>
  )
}

export default MoviesList