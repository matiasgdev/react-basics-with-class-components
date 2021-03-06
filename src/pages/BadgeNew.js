import React, { Component } from 'react'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import Hero from '../components/Hero'
import PageLoading from '../components/PageLoading'
import '../style/badgeNew.scss'
import api from '../api'

class BadgeNew extends Component {

  state = {
    loading: false,
    error: null,
    form: { 
      firstName: '',
      lastName: '',
      email: '',
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

  handleSubmit = async e => {
    e.preventDefault()
    this.setState({loading: true, error: null })

    try {
      await api.badges.create(this.state.form)
      this.setState({ loading: false })

      // window.location = '/badges'
      this.props.history.push('/badges')

    } catch (err) {
      this.setState({ loading: false, error: err })
    }
    
  }

  render() {

    const { firstName, lastName, job, twitter, email } = this.state.form
    const { loading, error } = this.state 

    if (loading) return <PageLoading />

    return (
      <div className="badgeNew">
        <Hero />
        <div className="badgeNew__container grid-2 container">
          <Badge 
            name={ firstName || 'FIRST NAME'}
            lastName={lastName || 'LAST NAME' }
            job={ job || 'JOB DESCRIPTION' }
            twitter={ twitter || 'TWITTER'}
            email = { email }
          />
          <BadgeForm 
            title="New Attendant"
            onChange={ this.handleChange }
            formData={ this.state.form }
            onSubmit={ this.handleSubmit }
            error={ error }
          />
        </div>
      </div>

    )
  }
}

export default BadgeNew