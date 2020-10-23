import React from 'react'
import Modal from './Modal'
import '../style/deleteBadgeContent.scss'

export default function DeleteBadgeModal(props) {
  return <Modal {...props}> 
    <div className="deleteBadgeContent">
      <span className="deleteBadgeContent__title">¿Estás seguro que quieres borrarlo?</span>
      <span className="deleteBadgeContent__details">Eliminaras el badge por completo.</span>
      <div className="deleteBadgeContent__buttons">
        <button onClick={props.deleteBadge} className="deleteBadgeContent__buttons--delete">Delete</button>
        <button onClick={props.onClose} className="deleteBadgeContent__buttons--cancel">Cancel</button>
      </div>
    </div>
   </Modal>
}
