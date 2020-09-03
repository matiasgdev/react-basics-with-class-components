import React, { Component } from 'react'
import '../style/badgeList.scss'
import AddBadgeBtn from './AddBadgeBtn'

export default class BadgesList extends Component {
  render() {
    const { data } = this.props

    { if (data.length === 0) {
      return (
        <div className="spacing"> 
          <p> No encontramos ningun badge </p> 
          <AddBadgeBtn>
            Agregar Badge
          </AddBadgeBtn>
        </div>
        )
      }
    }

    return (
      <>
        <ul className="badgeList">
          { data.map(item => {
            return (
              <li className="badgeList__item" key={item.id}>
                <img src={item.avatarUrl} alt={ item.firstName }/>
                <p className="badgeList__item--name">{`${item.firstName} ${item.lastName}`}</p>
                <span className="badgeList--item--job">{item.jobTitle}</span>
                <span className="badgeList__item--twitter link">@{item.twitter}</span>
              </li>
            )
          })}
        </ul>
      </>
    )
  }
}
