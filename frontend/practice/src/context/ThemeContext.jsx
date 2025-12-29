// // frontend/practice/src/context/ThemeContext.jsx
// // import { createContext, useState } from "react";



// // export const ThemeContext = createContext();

// // function ThemeProvider({ children }) {
// //   const [theme, setTheme] = useState("light");

// //   const toggleTheme = () => {
// //     setTheme((prev) => (prev === "light" ? "dark" : "light"));
// //   };

// //   return (
// //     <ThemeContext.Provider value={{ theme, toggleTheme }}>
// //       {children}
// //     </ThemeContext.Provider>
// //   );
// // }

// // export default ThemeProvider;



// // export const ThemeContext=createContext();
// // function ThemeProvider ({children}){
// //     const [theme,setTheme]=useState('light')

// //     const toggleTheme=()=>{
// //         setTheme((prev)=>(prev==='light'?'dark':'light'))
// //     }

// //     return(
// //         <ThemeContext.Provider value={{theme,toggleTheme}}>
// //             {children}
// //         </ThemeContext.Provider>
// //     )
// // }
// // export default ThemeProvider


// import React, { createContext, useState } from 'react';

// // Create Context
// export const ThemeContext = createContext();

// /**
//  * ThemeProvider component
//  * Wraps the app and provides theme data
//  */
// function ThemeProvider({ children }) {
//   const [theme, setTheme] = useState('light');

//   // Toggle between light and dark theme
//   const toggleTheme = () => {
//     setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// export default ThemeProvider;

// frontend/practice/src/context/ThemeContext.jsx
// 

import { createContext, useState } from "react";
export const  ThemeContext = createContext()
function ThemeProvider({children}) {
  const[theme,setTheme]=useState('light')
    const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }
  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}
export default ThemeProvider
