import Navbar from '../components/Navbar'
import Content from '../components/Content'
import Card from '../components/Card'
import './App.css'

export default function App() {

  return (
    <div className="App">
      <Navbar />
      <Content />
      <Card
        img="palmiers.jpg"
        // img="https://picsum.photos/200/300"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Summer vibes"
        price={136}
      />
    </div>
  )
}
