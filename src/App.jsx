import { useState } from 'react'
import Header from './components/header'
import Footer from './components/footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header logo="" />
      <main>

      </main>
      <Footer />
    </div>
  )
}

export default App
