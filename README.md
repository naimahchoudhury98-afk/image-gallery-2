# Frog-tography Collection 🐸

A React-based image gallery showcasing amphibian photography with search functionality and keyboard navigation.

## Live Demo
[Deployment URL will go here after deploying to Render]

## Features
- Browse through a collection of frog images
- Search images by description
- Keyboard navigation (Tab + Enter/Space, Arrow keys ←→)
- Accessible for screen readers and keyboard users

## Technologies Used
- React (useState, useEffect)
- JavaScript ES6+
- CSS3 (Grid, Animations)
- Vite 

---

## Assignment Reflection

### What requirements did you achieve?

- **useState hook**: Used to manage images array, currentIndex for selected image, and searchTerm for filtering
- **useEffect hook**: Implemented for fetching data from the API on component mount, resetting index when search changes, and handling arrow key navigation
- **Component structure**: Created separate component files (App.jsx, Gallery.jsx, ImageItem.jsx) instead of putting everything in App.jsx
- **Dynamic rendering**: Used .map() to render the image array dynamically
- **Click functionality**: Clicking thumbnails displays the larger version of the image
- **Accessibility**: All images have descriptive alt text from the API, and keyboard navigation works with Tab, Enter, and Space keys
- **Keyboard focus**: Thumbnails are focusable with tabIndex={0} and have role="button" for screen readers
- **Search functionality**: Added a search bar that filters images as you type, using useEffect with a dependency array
- **Arrow key navigation**: Added left/right arrow keys to cycle through images
- **Professional styling**: Created a dark, modern design with CSS Grid, smooth animations, and responsive layout

### Were there any requirements or goals that you were unable to achieve?

Initially, I had some bugs with:
- Express accidentally being imported (caused errors)
- filteredImages being accessed before initialization (needed to move it before useEffect)
- Tab + Enter not working initially (needed to remove inline styles conflicting with CSS)

But I debugged and fixed all of these issues.

### What was difficult about these tasks?

The most challenging parts were:
1. **Understanding component data flow**: Learning how props pass down (App → Gallery → ImageItem) and events bubble up took some practice
2. **useEffect dependencies**: Understanding when to use dependency arrays and avoiding cascading renders was tricky
3. **Keyboard event handling**: Setting up the arrow key navigation with useEffect and making sure to clean up event listeners properly

### Additional Reflections

**What went really well:**
- The search functionality works smoothly and resets the selected image properly
- The keyboard navigation is intuitive with multiple input methods (mouse, Tab+Enter, arrows)
- Component organization made the code much cleaner and easier to understand

**External resources that helped:**
- React documentation for useEffect and event handling
- MDN Web Docs for keyboard event codes
- CSS-Tricks for Grid layout tips

**Future improvements I'd like to make:**
- Add image loading states (spinner while fetching)
- Show "No results found" message when search returns nothing
- Add image counter showing "Image 3 of 10"
- Integrate with Unsplash API for more images
- Add animation transitions when changing images

---

## How to Run Locally

git clone [your-github-url]

# Navigate to project
cd image-gallery

# Install dependencies
npm install

# Run development server
npm run dev

