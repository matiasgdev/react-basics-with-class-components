import React from 'react'
import Gravatar from '../components/Gravatar'
import { Link } from 'react-router-dom'
import DeleteBadgeModal from '../components/DeleteBadgeModal'

export default function BadgeDetails({badge, handleDeleteBadge, handleOpenModal, isOpen}) {

  const { firstName, lastName, job, twitter, email, id } = badge
  return (
    <div className="badgeDetails">
      <h2 className="badgeDetails__title"> <span>Detalles de</span> {`${firstName} ${lastName}`} </h2>
      <div className="badgeDetails__container">
        <Gravatar email={email} className="badgeDetails__gravatar"/>
        <div className="badgeDetails__content">
          <p className="badgeDetails__content--item name"> {firstName} {lastName}</p>
          <p className="badgeDetails__content--item job"> Job:   {job} </p>
          <div className="badgeDetails__content--contact">
            <p className="badgeDetails__content--item contact"> Contact </p>
            <p className="badgeDetails__content--item email"> {email} </p>
            <p className="badgeDetails__content--item twitter link"> @{twitter} </p>
          </div>
          <span className="actions">
            <Link to={`/badges/${id}/edit`} className="actions--edit"> Editar </Link>
            <span className="actions--delete" onClick={handleOpenModal}> Borrar </span>
            <DeleteBadgeModal deleteBadge={handleDeleteBadge} isOpen={isOpen} onClose={handleOpenModal} />
          </span>
        </div>
      </div>
    </div>
  )
}
