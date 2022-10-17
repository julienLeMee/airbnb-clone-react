import React from 'react';

export default function Card(props) {

  let badgeText
  if (props.openSpots === 0) {
    badgeText = 'SOLD OUT'
  } else if (props.location == 'Online') {
    badgeText = 'ONLINE'
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={props.coverImg} className='card--image' alt="palmiers picture" />
      <div className="card--stats">
        <img src="../images/star.png" className='star--image' alt="star picture" />
        <span>{props.stats.rating}</span>
        <span className='gray'>({props.stats.reviewCount}) • </span>
        <span className='gray'>{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price"><strong>From ${props.price}</strong> / person</p>
    </div>
  )
}
