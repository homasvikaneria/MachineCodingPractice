// dark-light-theme/src/components/DarkMode.jsx
import { useEffect, useState } from 'react'

const DarkMode = () => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved ? saved : 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  return [theme, toggleTheme]
}

export default DarkMode
