import { useEffect } from 'react'
import Homepage from './Components/Homepage'
import './style/output.css'

function App() {
  useEffect(() => {
    const app = document.querySelector('.app')
    setTimeout(() => {
      app.classList.add('fade')
    }, 200)
  }, []);

  return (
    <div className="app dark opacity-0">
      <Homepage /> 
    </div>
  )
}

export default App
