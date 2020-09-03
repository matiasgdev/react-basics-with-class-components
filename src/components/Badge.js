import React from 'react'
import badgeLogo from '../images/badge-logo.png'
import '../style/badge.scss'


class Badge extends React.Component {
  render() {
    const { name, lastName, job, twitter} = this.props

    return (
      <div className="badge">
        <figure className="badge_header">
          <img src={badgeLogo} alt="Badge Logo"/>
        </figure>
        <div className="badge_content">
          <p> {name} {lastName}</p>
          <span> {job} </span>
        </div>
        <div className="badge_socials">
          <img src="" alt=""/>
          <a href="/" className="badge__socials--twitter link">
            @{twitter}
          </a>
        </div>
      </div>
    )
  }
}


export default Badge