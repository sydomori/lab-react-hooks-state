import React from 'react'
import { useState } from 'react'

const DarkModeToggle = () => {
  // TODO: Implement dark mode toggle logic
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const buttonText = darkMode ? 'Light Mode' : 'Dark Mode'
  
  return (
    <button onClick={toggleDarkMode}>{buttonText}</button>
  )
}

export default DarkModeToggle
