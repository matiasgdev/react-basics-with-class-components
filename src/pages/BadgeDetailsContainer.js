import React, { useState, useEffect }  from 'react'

import BadgeDetails from './BadgeDetails'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'

import '../style/badgeDetails.scss'
import api from '../api'

export default function BadgeDetailsContainer(props) {

  const [data, setData] = useState({
    loading: true,
    error: null,
    badge: undefined
  })

  const [isOpen, setIsOpen] = useState(false)

  const id = props.match.params.id

  const fetchData = async () => {
    try {
      const badgeData = await api.badges.read(id)
      setData({loading: false, badge: badgeData})
    } catch (err) {
      setData({loading: false, error: err})
    }
  }

  const handleModal = () => {
    setIsOpen(!isOpen)
  }

  const handleDeleteBadge = async () => {
    setData({loading: true})
    try {
      await api.badges.remove(id)
      props.history.push('/badges')
    } catch (err) {
      setData({loading: false, error: err})
    }
  }

  useEffect(()=> {
    fetchData()
  }, [])

  const { loading, error } = data

  if (loading) return <PageLoading />
  if (error) return <PageError> { error.message} </PageError>

  return (
    <BadgeDetails
      isOpen={isOpen}
      badge={data.badge}
      handleOpenModal={handleModal}
      handleDeleteBadge={handleDeleteBadge}
    />
  )
}
