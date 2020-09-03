import React, { Component } from 'react'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'

import '../style/badge-new.scss'
import heroImage from '../images/hero-image.jpg'

class BadgeNew extends Component {

  state = { 
    form: { 
      firstName: '',
      lastName: '',
      job: '',
      twitter: ''
    } 
  }


  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form, 
        [e.target.name]: e.target.value
      }
    })
  }

  render() {

    const { firstName, lastName, job, twitter } = this.state.form
    return (
      <div className="badgeNew">
        <div className="hero">
          <img 
            className="hero_image"src={heroImage}
            alt="People Conference"
          />
          <div className="hero_description">
            <h1>Badge's Conf.</h1>
            <span>
              lets you create a template of the people who assist to your event
            </span>
          </div>
        </div>
        <div className="badgeNew__container grid-2 container">
          <Badge 
            name={firstName}
            lastName={lastName}
            job={job}
            twitter={twitter}
          />
          <BadgeForm onChange={this.handleChange} formData={this.state.form} />
        </div>
      </div>

    )
  }
}

export default BadgeNew