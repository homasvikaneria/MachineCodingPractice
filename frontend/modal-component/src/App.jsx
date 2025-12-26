// modal-component/src/App.jsx
import React , {useState} from 'react'
import Modal from './components/Modal'

function App() {
const [showModal , setShowModal] =useState(true);


  return (
    <div>
      <Modal isOpen={showModal} closeModal={()=>setShowModal(false)}/>
    </div>
  )
}

export default App
