import { useState, useEffect } from 'react'
import './styles.css'

const demoText = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi rerum dolor necessitatibus numquam aliquam, inventore repellat rem aliquid commodi sunt obcaecati, quod porro esse asperiores? Mollitia obcaecati blanditiis accusantium ipsum?'


const TextEditor = () => {

  const [pages, setPages] = useState([demoText])
  const [cursorStart, setCursorStart] = useState([0, 0])
  const [cursorEnd, setCursorEnd] = useState([0, 0])

  function handleMouseDown(event) {
    event.preventDefault()

    const curPos = event.target.dataset.idx.split(',')
    const newCursorStart = [parseInt(curPos[0]), parseInt(curPos[1])]
    setCursorStart(newCursorStart)
    setCursorEnd(newCursorStart)
  }
  function handleMouseUp(event) {
    event.preventDefault()

    const curPos = event.target.dataset.idx.split(',')
    const newCursorEnd = [parseInt(curPos[0]), parseInt(curPos[1])]
    setCursorEnd(newCursorEnd)
  }

  return (
    <div className="text-editor">
      <section className="text-options">
        <button name="bold">B</button>
        <button name="bold">I</button>
      </section>
      <section className="document" onMouseUp={handleMouseUp} onMouseDown={handleMouseDown}>
        {cursorStart} {cursorEnd}
        {
          pages.map((page: string, pageIdx) => (
            <div className="page" data-id={pageIdx}>
              <p>{
                page.split('').map((item, index) => (
                  <span
                    data-idx={[pageIdx, index]}
                    className={
                      (
                        (pageIdx >= cursorStart[0] && pageIdx <= cursorEnd[0])
                        && (index >= cursorStart[1] && index <= cursorEnd[1])
                      ) ? 'selected' : ''
                    }
                  >
                    {item}
                  </span>)
                )
              }</p>
            </div>
          ))
        }

      </section >
    </div >
  )
}

export { TextEditor }