// modal-component/src/components/Modal.jsx
import React from 'react'

function Modal({isOpen,closeModal}) {
if(!isOpen){
    return null;
}

    return (
        <div className='modal-container'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt atque natus eveniet porro quod, omnis nihil cum asperiores quis corrupti, quia amet aspernatur minima vel voluptatum fugiat ex, quam ipsa.</p>
            <button onClick={closeModal} className='close-button'>Close</button>
        </div>
    )
}

export default Modal
