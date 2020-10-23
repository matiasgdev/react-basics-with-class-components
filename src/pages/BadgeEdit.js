import React, { Component } from 'react'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import PageLoading from '../components/PageLoading'
import Hero from '../components/Hero'

import '../style/badgeEdit.scss'
import api from '../api'

class BadgeEdit extends Component {

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

  componentDidMount() {
    this.fetchData()  

  }

  fetchData = async () => {
    this.setState({ loading: true, error: null })
    let id = this.props.match.params.id

    try {
      const data = await api.badges.read(id)
      this.setState({ loading: false, form: data })

    } catch (err) {
      this.setState({ loading: false, error: err})
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
    this.setState({ loading: true, error: null })

    const { form } = this.state
    const id = this.props.match.params.id

    try { 
      await api.badges.update(id, form)
      this.setState({ loading: false })

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
            title="Edit Badge"
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

export default BadgeEdit