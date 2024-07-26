import { useState } from 'react'
import './styles.css'
import { handleEditorMouseDown } from './handlers/handlerEditorMouseDown'
import { handleEditorMouseUp } from './handlers/handleEditorMouseUp'
const demoText = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi rerum dolor necessitatibus numquam aliquam, inventore repellat rem aliquid commodi sunt obcaecati, quod porro esse asperiores? Mollitia obcaecati blanditiis accusantium ipsum?'

const TextEditor = () => {

  const [pages] = useState([demoText])
  const [cursorStart, setCursorStart] = useState([0, 0])
  const [cursorEnd, setCursorEnd] = useState([0, 0])

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
          pages.map((page: string, pageIdx) => (
            <div className="page" data-id={pageIdx}>
              <p>{
                page.split('').map((item, index) => (
                  <span
                    data-idx={[pageIdx, index]}
                    className={
                      (
                        (pageIdx >= Math.min(cursorStart[0], cursorEnd[0])) && (pageIdx <= Math.max(cursorStart[0], cursorEnd[0]))
                        && (index >= Math.min(cursorStart[1], cursorEnd[1])) && (index <= Math.max(cursorStart[1], cursorEnd[1]))
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