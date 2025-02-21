import { useEffect, useState } from 'react'
import Homepage from './Components/Homepage'
import './style/output.css'
import Footer from './Components/Footer'

function Header({ light, setLight }) {
  return (
    <header className='h-fit flex justify-end'>
      <button className='w-12 h-12 text-2xl hover:bg-main-light rounded-full' onClick={() => {
        setLight(!light)
      }}>
        {light ? <i className='fa-solid fa-sun'></i> : <i className='fa-solid fa-moon'></i>}
      </button>
    </header>
  )
}

function App() {
  const [light, setLight] = useState(false)

  useEffect(() => {
    if (light) {
      document.body.classList.add('light')
    } else if (!light) {
      document.body.classList.remove('light')
    }
  }, [light])

  useEffect(() => {
    const app = document.querySelector('.app')

    setTimeout(() => {
      app.classList.add('fade')
    }, 200)
  }, []);

  return (
    <div className="app opacity-0">
      <Header light={light} setLight={setLight}/>
      <Homepage /> 
      <Footer />
    </div>
  )
}

export default App
