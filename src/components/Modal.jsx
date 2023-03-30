import React from 'react'
import './css/Modal.css'

const Modal = (props) => {

    const {modalIsVisible, setModalVisibility} = props
  return (
    <div id="modal" className={ modalIsVisible ?'display-modal':'' }>
        <div onClick={()=>{setModalVisibility(false)}}>Game Over!</div>
    </div>
  )
}

export default Modal
