import ImageItem from './ImageItem'

export default function Gallery({ images, currentIndex, onThumbnailClick }) {
  return (
    <div className="thumbnails">
      {images.map((image, index) => (
        <ImageItem 
          key={index}
          image={image}
          index={index}
          isSelected={currentIndex === index}
          onClick={onThumbnailClick}
        />
      ))}
    </div>
  )
}