import { useState, useEffect } from 'react'
import './App.css'
import Gallery from './Gallery'

export default function App() {
  const [images, setImages] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://week-6-api.vercel.app/api/images')
      const data = await res.json()
      setImages(data)
    }
    
    fetchData()
  }, [])



  function handleThumbnailClick(index) {
    setCurrentIndex(index)
  }

  const filteredImages = images.filter((image) => 
  image.alt.toLowerCase().includes(searchTerm.toLowerCase())
)

  return (
    <div>
      <h1>Image Gallery</h1>

       <div>
      <input 
        type="text"
        placeholder="Search images..."
        value={searchTerm}
        onChange={(e) => {
  setSearchTerm(e.target.value)
  setCurrentIndex(0)
}}

        style={{
          padding: '10px',
          fontSize: '16px',
          width: '300px',
          marginBottom: '20px'
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
            style={{ maxWidth: '600px' }}
          />
        </div>
      )}
    </div>
  )
}