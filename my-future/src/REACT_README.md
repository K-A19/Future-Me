# Town Game - React/JSX Version

This is the React version of your town game with clickable navigation between locations.

## 📁 Project Structure

```
src/
├── App.jsx              # Main app with React Router setup
├── Index.jsx            # Homepage component with interactive map
├── Index.css            # Styles for homepage
├── Home.jsx             # Home location component
├── Home.css             # Styles for home page
├── Grocery.jsx          # Grocery store component
├── Grocery.css          # Styles for grocery page
├── Office.jsx           # Office component
├── Office.css           # Styles for office page
├── School.jsx           # School component
├── School.css           # Styles for school page
public/
└── images/              # Put all your images here
    ├── town_map.jpeg
    ├── home.jpeg
    ├── grocery_store.jpeg
    ├── Office.jpeg
    └── school.jpeg
```

## 🚀 Getting Started

### 1. Set Up Your React Project

If you already have a React project:
```bash
# Just copy all the JSX and CSS files into your src/ folder
```

If you're starting from scratch:
```bash
# Create a new React app
npx create-react-app town-game
cd town-game

# Copy all the JSX and CSS files into the src/ folder
# Replace the default App.js with App.jsx
```

### 2. Install Dependencies

```bash
npm install react-router-dom
```

### 3. Set Up Your Images

Create a folder structure:
```
public/
└── images/
    ├── town_map.jpeg
    ├── home.jpeg
    ├── grocery_store.jpeg
    ├── Office.jpeg
    └── school.jpeg
```

Copy all your game images into the `public/images/` folder.

### 4. Update Your Entry Point

Make sure your `src/index.js` (or `src/main.jsx` for Vite) imports `App.jsx`:

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### 5. Run the App

```bash
npm start
```

Visit `http://localhost:3000` to see your game!

## 🎮 How It Works

### Navigation
- The app uses **React Router** for navigation between pages
- Click on any location on the homepage to navigate
- Use the "Back to Town" button to return to the homepage

### Component Structure
- **App.jsx**: Sets up routing for all pages
- **Index.jsx**: Main homepage with clickable map
- **Home/Grocery/Office/School.jsx**: Individual location pages

### Styling
- Each component has its own CSS file
- Styles are scoped to each component
- Easy to customize colors and layouts

## 👥 Team Collaboration

Each teammate can work on a different component:

### Teammate 1 - Home Location
Edit: `Home.jsx` and `Home.css`

### Teammate 2 - Grocery Store
Edit: `Grocery.jsx` and `Grocery.css`

### Teammate 3 - Office
Edit: `Office.jsx` and `Office.css`

### Teammate 4 - School
Edit: `School.jsx` and `School.css`

## 🎨 Adding Game Content

Look for the "Game Content Area" in each component:

```jsx
<div className="game-section">
  <h2>🎮 Game Content Area</h2>
  <div className="placeholder">
    {/* Add your game mechanics here! */}
  </div>
</div>
```

Replace the placeholder with your game logic:

```jsx
// Example: Add a button with state
import React, { useState } from 'react';

const Home = () => {
  const [energy, setEnergy] = useState(100);
  
  const rest = () => {
    setEnergy(100);
  };

  return (
    // ... existing code ...
    <div className="game-section">
      <h2>Energy: {energy}/100</h2>
      <button onClick={rest}>Rest</button>
    </div>
  );
};
```

## 💡 Tips for Development

### Hot Reloading
Changes to JSX/CSS files will automatically refresh the browser.

### React Developer Tools
Install the React DevTools browser extension for debugging.

### State Management
For complex game state, consider using:
- React Context API (for sharing state between components)
- Redux or Zustand (for larger applications)

### Adding Features
Common additions:
- `useState` for component state
- `useEffect` for side effects
- `useContext` for global state
- Custom hooks for game logic

## 🔧 Customization

### Adjusting Button Positions
Edit the CSS classes in `Index.css`:

```css
.school-btn {
  top: 20%;      /* Adjust these values */
  left: 15%;
  width: 18%;
  height: 35%;
}
```

### Changing Colors
Each page has its own gradient. Edit the component's CSS:

```css
.home-page {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  /* Change these colors */
}
```

## 📦 Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## 🐛 Troubleshooting

### Images Not Showing
- Verify images are in `public/images/`
- Check image filenames match exactly
- Image paths should start with `/images/`

### Navigation Not Working
- Ensure `react-router-dom` is installed
- Check that all routes are defined in `App.jsx`
- Verify `Link` components use correct paths

### CSS Not Applying
- Make sure each component imports its CSS file
- Check for CSS class name typos
- Verify no conflicting styles

## 🌐 Using with Vite (Alternative)

If you prefer Vite over Create React App:

```bash
npm create vite@latest town-game -- --template react
cd town-game
npm install
npm install react-router-dom
```

Then copy all JSX and CSS files into `src/`.

## 🚀 Next Steps

1. Set up version control (Git)
2. Assign components to teammates
3. Add game mechanics to each location
4. Implement shared state for game data
5. Add more features (inventory, quests, NPCs, etc.)

Happy coding! 🎉
