import React from 'react';

export default function Card(props) {


  return (
    <div className="card">
      <img src={props.img} className='card--image' alt="palmiers picture" />
      <div className="card--stats">
        <img src="../images/star.png" className='star--image' alt="star picture" />
        <span>{props.rating}</span>
        <span className='gray'>({props.reviewCount}) • </span>
        <span className='gray'>{props.country}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price"><strong>From ${props.price}</strong> / person</p>
    </div>
  )
}
