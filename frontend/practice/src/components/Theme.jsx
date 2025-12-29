// frontend/practice/src/components/Theme.jsx

// normal theme toggle without context
import React,{useEffect, useState} from 'react'

function Theme() {
    const [theme,setTheme]=useState('light',()=>{
      const saved =localStorage.getItem("theme")
      return saved? "theme":null
    });

    useEffect(()=>{
      localStorage.setItem("theme",theme)
    },[theme])

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

  return (
    <div  style={{
        height: "100vh",
        backgroundColor: theme === "light" ? "#ffffff" : "#222222",
        color: theme === "light" ? "#000000" : "#ffffff",
        padding: "20px",
    }}>

       <h1>{theme} Theme</h1> 
       <button onClick={toggleTheme}>change to {theme==='light' ? 'dark':'light'}</button>
       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur architecto ducimus voluptatum voluptas explicabo, eos, praesentium, facilis consequatur eveniet dicta quae dolorem distinctio beatae. Provident quos labore id ipsam rerum.</p>  
    </div>
  )
}

export default Theme;



// use context and contect api and the other part of the code is in the context folder and that is also important
import React, { useContext, useEffect, useReducer, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'
function Theme() {
  const {theme, toggleTheme} = useContext(ThemeContext)
  useEffect(()=>{
    localStorage.setItem("theme",theme)
  },[theme])
return (
    <div>
      <div style={{
        background: theme==='light'? '#ffffff':"#000000",
        color:theme==='light'? '#000000':"#ffffff",
        height:"100vh",
        padding: "10px",
      }}>
        <button onClick={toggleTheme}>Theme</button>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, nemo. In natus, aliquam corporis laborum odio voluptates maxime voluptatem commodi porro veritatis animi alias hic esse excepturi dolorem fugit ea.</p> 
      </div>
    </div>
  )
}
export default Theme
