import { useState } from 'react'
import './styles.css'
import { handleEditorMouseDown } from './handlers/handlerEditorMouseDown'
import { handleEditorMouseUp } from './handlers/handleEditorMouseUp'
import { isCursorSelected, isSingleCursor } from './helpers/cursorSelect'
import { useKeyHandler } from './useEffects/useKeyHandler'
const demoText = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi rerum dolor necessitatibus numquam aliquam, inventore repellat rem aliquid commodi sunt obcaecati, quod porro esse asperiores? Mollitia obcaecati blanditiis accusantium ipsum?'


const TextEditor = () => {
  const [pages, setPages] = useState(demoText)
  const [cursorStart, setCursorStart] = useState([0, 0])
  const [cursorEnd, setCursorEnd] = useState([0, 0])

  useKeyHandler(cursorEnd, cursorStart, pages, setPages, setCursorStart, setCursorEnd)

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