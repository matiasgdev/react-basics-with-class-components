import React, { Component } from 'react'

import BadgesList from '../components/BadgesList'
import AddBadgeBtn from '../components/AddBadgeBtn'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import MiniLoader from '../components/MiniLoader'

import api from '../api'
import '../style/badges.scss'

export default class Badges extends Component {

  constructor() {
    super()
    this.state = {
      intervalId: undefined,
      loading: true,
      error: null,
      data: []
    } 
  }

  fetchData =  async  () => {
    this.setState({ loading: true, error: null })
    try {
      const data = await api.badges.list()
      this.setState({ loading: false, data: data.reverse() })
    } catch(err) {
      this.setState({ loading: false, error: err, })
    }
  }


  componentDidMount() {
    this.fetchData()
    let id = setInterval(this.fetchData, 5000)
    this.setState({intervalId: id})
  }

  componentWillMount() {
    clearInterval(this.state.intervalId)
  }


  render() {
    const { error, loading, data } = this.state

    if (error) return <PageError> Error: {error.message} </PageError>

    return (

      <div className="badges">
        <div className="badges__content container">
          <h2 className="badges__title  title v-spacing"> Guest List </h2>
          <div className="badges__add">
            <AddBadgeBtn>+ Add badge </AddBadgeBtn>
          </div>
          <section className="badges__container">
          { loading && !data ? <PageLoading /> : <BadgesList loading={loading} badges={ data } /> }
          { loading &&  <MiniLoader />  }
          </section>

        </div>
      </div>
    )
  }
}
