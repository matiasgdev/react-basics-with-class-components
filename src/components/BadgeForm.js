import React, { Component } from 'react'
import '../style/badgeForm.scss'

export default class BadgeForm extends Component {

  render() {
    const { onChange, formData } = this.props

    return (
      <div className="badgeForm">
        <h2 className="badgeForm__title">New attendant</h2>

        <form className="form">
          <label htmlFor="">First name:</label>
          <input 
            onChange={onChange}
            type="text" 
            name="firstName"
            value={formData.fistName}
          />
          <label htmlFor="">Last name:</label>
          <input 
            onChange={onChange}
            type="text" 
            name="lastName"
            value={formData.lastName}
          />
          <label htmlFor="">Twitter</label>
          <input 
            onChange={onChange}
            type="text" 
            name="twitter"
            value={formData.twitter}
          />
          <label htmlFor="">Job</label>
          <input 
            onChange={onChange}
            type="text" 
            name="job"
            value={formData.job}
          />
  
          <button 
            type="submit"
            onClick={this.handleSubmit}
          >
            Save
          </button>
          
        </form>
      </div>
    )
  }
}
