import { useState, useEffect } from 'react'
import './styles.css'
import { handleEditorMouseDown } from './handlers/handlerEditorMouseDown'
import { handleEditorMouseUp } from './handlers/handleEditorMouseUp'
import { isCursorSelected, isSingleCursor, getCursorPage, getCursorIndex } from './helpers/cursorSelect'

const demoText = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi rerum dolor necessitatibus numquam aliquam, inventore repellat rem aliquid commodi sunt obcaecati, quod porro esse asperiores? Mollitia obcaecati blanditiis accusantium ipsum?'


const TextEditor = () => {

  const [pages, setPages] = useState(demoText)
  const [cursorStart, setCursorStart] = useState([0, 0])
  const [cursorEnd, setCursorEnd] = useState([0, 0])

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      event.preventDefault()

      if (isSingleCursor(cursorStart, cursorEnd)) {
        const cursorIndex = getCursorIndex(cursorStart)
        let newPages = pages
        const newPageLeft = newPages.slice(0, cursorIndex)
        const newPageRight = newPages.slice(cursorIndex)
        newPages = `${newPageLeft}${event.key}${newPageRight}`

        setPages(() => newPages)
        setCursorStart((lastStart) => [0, lastStart[1] + 1])
        setCursorEnd((lastEnd) => [0, lastEnd[1] + 1])
      }
    }
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [cursorEnd, cursorStart, pages])

  return (
    <div className="text-editor">
      <section className="text-options">
        <button name="bold">B</button>
        <button name="bold">I</button>
      </section>
      <section
        className="document"
        onMouseUp={(event) => handleEditorMouseUp(event, setCursorEnd)}
        onMouseDown={(event) => handleEditorMouseDown(event, setCursorStart, setCursorEnd)}>
        <p>Current Cursor Position [{cursorStart}, {cursorEnd}]</p>
        {
          <div className="page" data-id={0}>
            <p>{
              pages.split('').map((item, index) => (
                <span
                  data-idx={[0, index]}
                  className={`${!isCursorSelected(0, index, cursorStart, cursorEnd)
                      ? ''
                      : isSingleCursor(cursorStart, cursorEnd)
                        ? 'single selected'
                        : 'selected '
                    }`}>
                  {item}
                </span>)
              )
            }</p>
          </div>
        }

      </section >
    </div >
  )
}

export { TextEditor }