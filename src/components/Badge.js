import React from 'react'
import '../style/badge.scss'
import Gravatar from './Gravatar'

 
class Badge extends React.Component {
  render() {
    const { name, lastName, job, twitter, email } = this.props

    return (
      <div className="badge">
        <figure className="badge_header">
          <Gravatar email={ email } className="badge_gravatar"/>
        </figure>
        <div className="badge_content">
          <p> { name } { lastName } </p>
          <span> { job } </span>
        </div>
        <div className="badge_socials">
          <a href="/" className="badge__socials--twitter link">
            @{ twitter }
          </a>
        </div>
      </div>
    )
  }
}


export default Badge