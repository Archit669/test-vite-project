import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 8)}>
          count is {count}
        </button>
         <p>testing again,.............</p>
      </div>
    </>
  )
}

export default App
