import React from 'react'
import md5 from 'md5'

export default function Gravatar({ email, className }) {
  let hash = ''
  hash = md5(email)

  return (  
    <>
      <img 
        className={ className } 
        src={`https://www.gravatar.com/avatar/${hash}?d=identicon`}
        alt="Gravatar"
      />
    </>
  )
}
