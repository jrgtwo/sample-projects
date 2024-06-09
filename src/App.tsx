import { useState, useCallback } from 'react'
import { Tabs } from './projects/tabs'
import { TicTacToe } from './projects/tic-tac-toe'
import { Wordle } from './projects/wordle'
import { Menu } from './base/Menu'
import { Header } from './base/Header'

import './App.css'

const removeHash = (str: string) => str.replace('#', '')

function App() {
  const [page, setPage] = useState(removeHash(window.location.hash))

  const handleClick = useCallback((event: React.MouseEvent<HTMLElement>, hash: string) => {
    event.preventDefault()
    setPage(removeHash(hash))
  }, [])

  return (
    <>
      <Header />
      <Menu
        handleClick={handleClick}
      />
      <div id="card-container">
        {page === 'tabs' && <Tabs />}
        {page === 'tic-tac-toe' && <TicTacToe />}
        {page === 'wordle' && <Wordle />}
      </div>
    </>
  )
}

export default App
