import React from 'react'
import '../style/loader.scss'

export default function Loader() {
  return (
    <div className="miniLoader">
      <div className="lds-grid loaderCenter">
        <div />
        <div />
        <div />
      </div>
    </div>
    
  )
}
