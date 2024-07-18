import { useEffect, useState } from 'react'
import Homepage from './Components/Homepage'
import './style/output.css'

function Header({ light, setLight }) {
  return (
    <header className='h-fit flex justify-end'>
      <button className='w-10 h-10 bg-white' onClick={() => {
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
    </div>
  )
}

export default App
