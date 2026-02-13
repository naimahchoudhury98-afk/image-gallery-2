import { useState, useEffect } from 'react'
import './App.css'
import Gallery from './Gallery'

export default function App() {
  const [images, setImages] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredImages = images.filter((image) => 
    image.alt.toLowerCase().includes(searchTerm.toLowerCase())
  )

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://week-6-api.vercel.app/api/images')
      const data = await res.json()
      setImages(data)
    }
    
    fetchData()
  }, [])

  useEffect(() => {
    function handleKeyPress(e) {
      if (filteredImages.length === 0) return
      
      if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => 
          prev === 0 ? filteredImages.length - 1 : prev - 1
        )
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => 
          prev === filteredImages.length - 1 ? 0 : prev + 1
        )
      }
    }

    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [filteredImages])

  function handleThumbnailClick(index) {
    setCurrentIndex(index)
  }

  return (
    <div className="app">
      <h1>Frog-tography Collection</h1>
      <p className="subtitle">Discover the world of frogs through lenses.</p>
      <p className="instructions">Click on a thumbnail or use ← → arrow keys to navigate</p>      
      <div className="search-container">
        <input 
          type="text"
          placeholder="Search images..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value)
            setCurrentIndex(0)
          }}
        />
      </div>
      
      <Gallery 
        images={filteredImages}
        currentIndex={currentIndex}
        onThumbnailClick={handleThumbnailClick}
      />

      {filteredImages.length > 0 && (
        <div className="large-image">
          <h2>Selected Image:</h2>
          <img 
            src={filteredImages[currentIndex].url} 
            alt={filteredImages[currentIndex].alt}
          />
        </div>
      )}
    </div>
  )
}