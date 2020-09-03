import React, { Component } from 'react'

import BadgesList from '../components/BadgesList'
import AddBadgeBtn from '../components/AddBadgeBtn'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'

import api from '../api'

import '../style/badges.scss'

export default class Badges extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      loading: true,
      error: null,
      data: []
    } 
  }

  fetchData =  async  () => {
    this.setState({ loading: true, error: null })

    try {
      const data = await api.badges.list()
      this.setState({ loading: false, data })

    } catch(err) {
      
      this.setState({ loading: false, error: err, })
    }
  }


  componentDidMount() {
    this.fetchData()
  }

  render() {

    const { error, loading, data } = this.state

    if (error) return <PageError> Error: {error.message} </PageError>

    return (

      <div className="badges">
        <div className="badges__content container">
          <h2 className="badges__title  title v-spacing"> Guest List </h2>
          <div className="badges__add">
            <AddBadgeBtn>+ Add badge</AddBadgeBtn>
          </div>
          <section className="badges__container">
            { loading 
              ? <PageLoading />
              : <BadgesList data={ data } /> 
            }
          </section>
        </div>
      </div>
    )
  }
}
