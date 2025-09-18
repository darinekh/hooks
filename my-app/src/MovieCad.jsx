import React from 'react'
// Functional component MovieCard that receives a "movie" prop as input

function MovieCad({movie}) {
  return (
    <div className="w-full sm:max-w-xl">
      <div className="bg-white shadow-lg border-gray-100 max-h-80 border rounded-3xl p-6 flex space-x-6">
        <div className="h-48 overflow-visible w-1/2">
            <img className="rounded-3xl shadow-lg h-full w-full object-cover" src={movie.poster} alt={movie.title} />
        </div>
        <div className="flex flex-col w-1/2 space-y-3">
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-bold">{movie.title}</h2>
            <div className="bg-yellow-400 font-bold rounded-xl p-2">{movie.rating}</div>
          </div>
          <div>
            <div className="text-lg text-gray-800">{movie.year}</div>
          </div>
            <p className="text-gray-400 max-h-40 overflow-y-hidden">{movie.description}</p>
          <div className="flex text-2xl font-bold text-a">${movie.price}</div>
        </div>
      </div>
    </div>
  )
}

export default MovieCad
