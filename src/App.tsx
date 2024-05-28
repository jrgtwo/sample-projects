import { useState, useCallback } from 'react'
import { Tabs } from './projects/tabs'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const removeHash = (str) => str.replace('#', '')

function App() {
  const [page, setPage] = useState(removeHash(window.location.hash))

  const handleClick = useCallback((event, hash) => {
    event.preventDefault()
    setPage(removeHash(hash))
  }, [])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Projects</h1>
      <menu>
        <li><a href="#tabs" onClick={(event) => handleClick(event, '#tabs')}>Tabs</a></li>
      </menu>
      <div className="card">
        {page}
        {page === 'tabs' && <Tabs />}
      </div>
    </>
  )
}

export default App
