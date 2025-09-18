import React, { useState } from 'react'
// Functional component to add a new movie
// Receives a prop "onAdd" which is a function to handle adding the new movie
function AddMovieForm({ onAdd }) {
  const [title, setTitle] = useState('')
  const [year, setYear] = useState('')
  const [description, setDescription] = useState('')
  const [poster, setPoster] = useState('')
  const [price, setPrice] = useState('')
  const [rating, setRating] = useState('')

  
  // Function to handle form submission
  function submit(e) {
    e.preventDefault()
    
    // Prevent adding movie if title is empty
    if (!title.trim()) return;

    
    // Create a new movie object from input fields
    const newMovie = { title, year, description, poster, price, rating }

    if (onAdd) onAdd(newMovie)
    else console.log('New movie:', newMovie)

    // Clear form
    setTitle('')
    setYear('')
    setDescription('')
    setPoster('')
    setPrice('')
    setRating('')
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 p-6">
      <div className="w-full max-w-2xl bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-blue-200 p-8 flex flex-col animate-fade-in">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-blue-900 drop-shadow-lg">
          Add New Movie
        </h2>
        <form onSubmit={submit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="px-5 py-3 rounded-xl border border-blue-200 bg-white/70 backdrop-blur-sm text-blue-900 placeholder:text-blue-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 ease-in-out"
            />
            <input
              type="text"
              placeholder="Year"
              value={year}
              onChange={e => setYear(e.target.value)}
              className="px-5 py-3 rounded-xl border border-blue-200 bg-white/70 backdrop-blur-sm text-blue-900 placeholder:text-blue-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 ease-in-out"
            />
          </div>
          <textarea
            placeholder="Description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            className="w-full px-5 py-3 rounded-xl border border-blue-200 bg-white/70 backdrop-blur-sm text-blue-900 placeholder:text-blue-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 h-28 resize-none transition-all duration-200 ease-in-out"
          ></textarea>
          <input
            type="text"
            placeholder="Poster URL"
            value={poster}
            onChange={e => setPoster(e.target.value)}
            className="w-full px-5 py-3 rounded-xl border border-blue-200 bg-white/70 backdrop-blur-sm text-blue-900 placeholder:text-blue-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 ease-in-out"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Price"
              value={price}
              onChange={e => setPrice(e.target.value)}
              className="px-5 py-3 rounded-xl border border-blue-200 bg-white/70 backdrop-blur-sm text-blue-900 placeholder:text-blue-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 ease-in-out"
            />
            <input
              type="text"
              placeholder="Rating (1-10)"
              value={rating}
              onChange={e => setRating(e.target.value)}
              className="px-5 py-3 rounded-xl border border-blue-200 bg-white/70 backdrop-blur-sm text-blue-900 placeholder:text-blue-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-extrabold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Add Movie
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddMovieForm
