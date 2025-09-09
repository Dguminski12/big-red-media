import { useState } from 'react'
import Header from './components/header'
import Footer from './components/footer'
import './styles.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header logoSrc="/brm-logo2.png" />
      <main>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
        
      </main>
      <Footer />
    </div>
  )
}

export default App
