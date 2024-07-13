import { Routes } from './constants/routes'
import { Header } from './base/Header'

import './App.css'
import { Router } from './Router'

function App() {

  return (
    <>
      <Header />
      <Router routes={Routes} />
    </>
  )
}

export default App
