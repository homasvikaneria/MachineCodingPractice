// frontend/practice/src/components/Modals.jsx
import React, { useEffect, useState } from 'react'

const Modals = () => {
  const [open, setOpen] = useState(false);

useEffect(()=>{
  const handleEsc=(e)=>{
    if(e.key==="Escape"){
      setOpen(false);
    }
  }
  document.addEventListener("keydown",handleEsc)
  return()=>document.removeEventListener("keydown",handleEsc)
},[])
  return (
    <div>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      {open && (
        <div onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }} >
          <div onClick={(e) => e.stopPropagation}
            style={{
              background: "#fff",
              padding: "5px"
            }}>
            <p>Modal</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In officia exercitationem tempore iste fuga. Doloremque ducimus, eligendi sapiente tempora sit repudiandae quas eaque voluptates dicta suscipit? Dicta corrupti porro magni.</p>
            <button onClick={() => setOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Modals
