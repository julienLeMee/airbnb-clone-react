import React from 'react';

export default function Card(props) {
  return (
    <div className="card">
      <img src="../images/palmiers.jpg" className='card--image' alt="palmiers picture" />
      <div className="card--stats">
        <img src="../images/star.png" className='star--image' alt="star picture" />
        <span>5.0</span>
        <span className='gray'>(6) • </span>
        <span className='gray'>USA</span>
      </div>
      <p>Summer vibes</p>
      <p><strong>From $136</strong> / person</p>
    </div>
  )
}
