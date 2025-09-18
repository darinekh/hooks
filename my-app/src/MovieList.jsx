import React from 'react'
import MovieCad from './MovieCad'

// Functional component MovieList that receives an array of movies as a prop
function MovieList({movies}) {
    if(movies.length === 0){
        return <div className="text-center p-8 text-gray-500 text-lg">
            <p>No movies found</p>
        </div>
    }

  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
        {movies.map(m =>(
            <MovieCad key={m.id} movie={m}/>
        ))}
    </div>
  )
}

export default MovieList
