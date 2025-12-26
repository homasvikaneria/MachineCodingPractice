// dark-light-theme/src/App.jsx
import React from 'react'
import DarkMode from './components/DarkMode'

const App = () => {
  const [theme, toggleTheme] = DarkMode()

  return (
    <div>
      <button onClick={toggleTheme}>
        switch to {theme === 'dark' ? 'light' : 'dark'}
      </button>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  )
}

export default App
