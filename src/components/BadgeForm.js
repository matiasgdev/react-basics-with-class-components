import React, { Component } from 'react'
import '../style/badgeForm.scss'

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop * 2) 

export default class BadgeForm extends Component {

  textInput = React.createRef()

  componentDidMount() {
    scrollToRef(this.textInput)
    this.textInput.current.focus()
  }


  render() {
    const { onChange, formData, onSubmit, error, title } = this.props

    return (
      <div className="badgeForm">
        
        { error && <p className="error"> { error.message } </p> }
      
        <h2 className="badgeForm__title"> { title } </h2>
        
        <form className="form" onSubmit={ onSubmit }>
          
          <label htmlFor="">First name:</label>
          <input 
            onChange={onChange}
            type="text" 
            name="firstName"
            value={formData.firstName}
            ref={this.textInput}
          />
          <label htmlFor="">Last name:</label>
          <input 
            onChange={onChange}
            type="text" 
            name="lastName"
            value={formData.lastName}
          />
          <label htmlFor="">Email:</label>
          <input 
            onChange={onChange}
            type="email" 
            name="email"
            value={formData.email}
          />
          <label htmlFor="">Twitter:</label>
          <input 
            onChange={onChange}
            type="text" 
            name="twitter"
            value={formData.twitter}
          />
          <label htmlFor="">Job:</label>
          <input 
            onChange={onChange}
            type="text" 
            name="job"
            value={formData.job}
          />
  
          <button 
            type="submit"
          >
            Save
          </button>
          
        </form>
      </div>
    )
  }
}
