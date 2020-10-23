import React from 'react'
import '../style/modalItem.scss'

export default function ModalItem({children, onClose}) {
  return (
    <div className="modal">
      <div className="modal__container">
        <span onClick={onClose} className="modal__close-btn">X</span>
        <div className="modal__content">
          {children}
        </div>
      </div>
    </div>
  )
}
