import { useEffect, useState } from 'react'
const API_URL = '/wordList.json'

const Wordle = () => {
  const [solution, setSolution] = useState(null)


  useEffect(() => {
    const fetchWordList = async () => {
      const response = await fetch(API_URL)
      const words = await response.json()
      await new Promise((resolve) => setTimeout(() => resolve(true), 2000))

      setSolution(words[(Math.floor(Math.random() * words.length))])
    }
    fetchWordList()
  }, [])

  return (
    <>
      <h3>Wordle</h3>
      {solution || '...loading'}
    </>
  )
}

export { Wordle }