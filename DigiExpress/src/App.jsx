import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
      { <Route path="/" element={<Hero/>} /> }
          {/* Add more routes later */}
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App
