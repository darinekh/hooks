import './App.css'
import { useState } from 'react'
import MovieList from './MovieList'
import AddMovieForm from './AddMovieForm'

function App() {
  const [movies, setMovies] = useState([])
  const [title, setTitle] = useState('')
  const [rating, setRating] = useState(0)
  const [show, setShow] = useState(false)

  function handelAdd(movie){
    setMovies([...movies, {id:crypto.randomUUID(), ...movie}])
  }

  const filteredMovies = movies.filter(m => {
    return (
      m.title.toLowerCase().includes(title.toLowerCase()) &&
      m.rating >= rating
    )
  })

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      <header className="bg-blue-600 text-white py-6 mb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center">Movie Collection</h1>
        </div>
      </header>
      
      <div className="container mx-auto px-4">
        <button onClick={() => setShow(!show)} className="bg-blue-500 text-white px-4 py-2 rounded-md">Add Movie</button>
        {show?<AddMovieForm onAdd={handelAdd} /> : null}

        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Filter Movies</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="title-filter" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input 
                id="title-filter"
                type="text" 
                placeholder="Filter by title..." 
                value={title} 
                onChange={e => setTitle(e.target.value)} 
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="sm:w-1/3">
              <label htmlFor="rating-filter" className="block text-sm font-medium text-gray-700 mb-1">Minimum Rating</label>
              <input 
                id="rating-filter"
                type="number" 
                min="0" 
                max="10" 
                step="0.1"
                placeholder="Minimum rating..." 
                value={rating} 
                onChange={e => setRating(Number(e.target.value))} 
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
        
        <MovieList movies={filteredMovies} />
      </div>
    </div>
  )
}

export default App