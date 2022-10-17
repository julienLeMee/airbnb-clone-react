import React from 'react';

export default function Content() {
  return (
    <section className="content">
      {/* <img src="../images/grid-picture.png" className='content--picture' alt="palmiers picture" /> */}

      <div className="grid--image">
        <div className="col--0">
          <img src="https://picsum.photos/200/300/?random/8" alt="random image" />
        </div>
        <div className="col--1">
          <img src="https://picsum.photos/200/300/?random/9" alt="random image" />
          <img src="https://picsum.photos/200/300/?random/10" alt="random image" />
        </div>
        <div className="col--2">
          <img src="https://picsum.photos/200/300/?random/11" alt="random image" />
          <img src="https://picsum.photos/200/300/?random/12" alt="random image" />
        </div>
        <div className="col--3">
          <img src="https://picsum.photos/200/300/?random/13" alt="random image" />
          <img src="https://picsum.photos/200/300/?random/14" alt="random image" />
        </div>
        <div className="col--4">
          <img src="https://picsum.photos/200/300/?random/15" alt="random image" />
          <img src="https://picsum.photos/200/300/?random/16" alt="random image" />
        </div>
      </div>

      <h1 className='content--title'>Online Experiences</h1>
      <p className='content--description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi architecto veritatis dolores incidunt. Consequatur dolorem laudantium natus suscipit ipsum earum asperiores porro adipisci sunt, animi repellat magnam nulla distinctio vel!</p>
    </section>
  )
}
