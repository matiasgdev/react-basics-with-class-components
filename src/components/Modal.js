import React from 'react'
import { createPortal } from 'react-dom'
import ModalItem from './ModalItem'

export default function Modal({isOpen, onClose, children}) {
  if (!isOpen) return null
  return createPortal(
    <ModalItem onClose={onClose}> {children} </ModalItem>,
    document.getElementById('modal')
  )
}
