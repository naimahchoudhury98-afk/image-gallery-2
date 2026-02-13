export default function ImageItem({ image, index, isSelected, onClick }) {
  function handleKeyDown(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onClick(index)
    }
  }

  return (
    <img 
      src={image.url}
      alt={image.alt}
      onClick={() => onClick(index)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      className={isSelected? 'selected' : ''}
    />
  )
}