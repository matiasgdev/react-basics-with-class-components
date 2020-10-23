import React from 'react'
import Gravatar from './Gravatar'

export default function BadgeListItem({ badge }) {
  return (
    <>
      <Gravatar email={badge.email} />
      <p className="badgeList__list--item--name">
        {`${badge.firstName} ${badge.lastName}`}
      </p>
      <span className="badgeList__list--item--job">
        {badge.job}
      </span>
      <a href={`https://twitter.com/${badge.twitter}`} className="badgeList__item--twitter link">
        @{badge.twitter}
      </a>
    </>
  )
}
