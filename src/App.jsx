import Navbar from '../components/Navbar'
import Content from '../components/Content'
import Card from '../components/Card'
import data from './data'
import './App.css'

export default function App() {

  const cards = data.map((card) => {
    return (
      <Card
        key={card.id}
        {...card} // spread operator (to pass all the props)
        // img={card.coverImg}
        // rating={card.stats.rating}
        // reviewCount={card.stats.reviewCount}
        // country={card.location}
        // title={card.title}
        // price={card.price}
        // openSpots={card.openSpots}
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <Content />
      <section className="cards">
        {cards}
      </section>
    </div>
  )
}
