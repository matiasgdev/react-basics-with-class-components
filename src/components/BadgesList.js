import React from 'react'
import '../style/badgeList.scss'
import AddBadgeBtn from './AddBadgeBtn'
import BadgeListItem from './BadgeListItem'
import { Link } from 'react-router-dom'
import useSearchBadges from '../hooks/useSearchBadges'




export default function BadgesList({ badges, loading }) {

  const { query, setQuery, filteredBadges } = useSearchBadges(badges)
  
  if (!filteredBadges) {
    return (
      <div className="spacing"> 
        <p> No encontramos ningun badge </p> 
        <AddBadgeBtn>
          Agregar Badge
        </AddBadgeBtn>
      </div>
    )
  }

  return (
    <div className="badgeList">
      <div className="badgeList__search spacing">
        <input
          placeholder="Filtrar invitados..."
          type="text"
          value={query}
          onChange={e => { setQuery(e.target.value)} }
        />
        {(filteredBadges.length === 0 && !loading) ? <p>No encontramos ningun badge que coincida con la búsqueda</p> : ''} 
      </div>
      <ul className="badgeList__list">
        {filteredBadges.map( badge => {
            return (
              <li className="badgeList__list--item" key={badge.id}>
                <Link className="badgeList__list--item--link reset-link" to={`/badge/${badge.id}`}>
                  <BadgeListItem badge={badge} />
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
