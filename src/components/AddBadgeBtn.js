import React from 'react'
import { Link } from 'react-router-dom'

export default function AddBaggeBtn({ children }) {
  return (
    <Link to="/badges/new" className="btn">
      { children }
    </Link>
  )
}
