// // // frontend/practice/src/components/Theme.jsx
// // import React,{useState} from 'react'

// // function Theme() {
// //     const [theme,setTheme]=useState('light');

// //     const toggleTheme = () => {
// //         setTheme(theme === 'light' ? 'dark' : 'light');
// //     }

// //   return (
// //     <div  style={{
// //         height: "100vh",
// //         backgroundColor: theme === "light" ? "#ffffff" : "#222222",
// //         color: theme === "light" ? "#000000" : "#ffffff",
// //         padding: "20px",
// //     }}>

// //        <h1>{theme} Theme</h1> 
// //        <button onClick={toggleTheme}>change to {theme==='light' ? 'dark':'light'}</button>
// //        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur architecto ducimus voluptatum voluptas explicabo, eos, praesentium, facilis consequatur eveniet dicta quae dolorem distinctio beatae. Provident quos labore id ipsam rerum.</p>  
// //     </div>
// //   )
// // }

// // export default Theme

// // import React, { useContext } from "react";
// // import { ThemeContext } from "../context/ThemeContext";

// // function Theme() {
// //   const { theme, toggleTheme } = useContext(ThemeContext);

// //   return (
// //     <div
// //       style={{
// //         height: "100vh",
// //         background: theme === "light" ? "#fff" : "#000",
// //         color: theme === "light" ? "#000" : "#fff",
// //         padding: "10px",
// //       }}
// //     >
// //       <h1>{theme} Theme</h1>

// //       <button onClick={toggleTheme}>
// //         Change to {theme === "light" ? "dark" : "light"}
// //       </button>
// //     </div>
// //   );
// // }

// // export default Theme;

// // frontend/practice/src/components/Theme.jsx

// // import React, { useContext } from 'react'
// // import { ThemeContext } from '../context/ThemeContext'

// // function Theme() {
// //     const {theme,toggleTheme}=useContext(ThemeContext)
// //   return (
// //     <div style={{
// //         height:"100vh",
// //         background: theme==='light'?"#ffffff":"#000000",
// //         padding:"20px",
// //         color:theme==='light'?"#000000":"#ffffff"
// //     }}>
// //       <p>Theme:{theme}</p>
// //       <button onClick={toggleTheme}> change</button>
// //       <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis doloremque, sed harum magnam qui natus accusamus nemo ipsam temporibus quos itaque officiis autem? Nesciunt aliquam maxime dicta hic autem? Vitae?</div>
// //     </div>
// //   )
// // }

// // export default Theme


// import React, { useContext } from 'react';
// import { ThemeContext } from '../context/ThemeContext';

// function Theme() {
//   // Consume theme data from context
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   return (
//     <div
//       style={{
//         background: theme === 'light' ? '#ffffff' : '#000000',
//         color: theme === 'light' ? '#000000' : '#ffffff',
//         minHeight: '100vh',
//       }}
//     >
//       <button onClick={toggleTheme}>
//         Change theme to {theme === 'light' ? 'dark' : 'light'}
//       </button>

//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
//         exercitationem eius facilis dolores quaerat veniam recusandae odit
//         officia distinctio quo accusamus aliquid.
//       </p>
//     </div>
//   );
// }

// export default Theme;


import React, { useContext, useEffect, useReducer, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'
function Theme() {
  const {theme, toggleTheme} = useContext(ThemeContext)
  // useEffect(()=>{
  //   localStorage.setItem("theme",theme)
  // },[theme])
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
