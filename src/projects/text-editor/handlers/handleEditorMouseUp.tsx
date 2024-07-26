import { CURSOR_SETTER } from './../types'

const handleEditorMouseUp = (
  event: React.MouseEvent<HTMLElement>,
  setCursorEnd: CURSOR_SETTER) => {
  event.preventDefault()

  //if (cursorStart[0] === -1 || cursorStart[1] === -1) return
  if (!(event.target instanceof HTMLSpanElement)) return

  const elemCursorPos = event.target?.dataset?.idx

  let curPos = elemCursorPos?.split(',').map((pos) => parseInt(pos))
  if (!curPos) curPos = [-1, -1]

  const newCursorEnd = [curPos[0], curPos[1]]
  setCursorEnd(newCursorEnd)
}

export { handleEditorMouseUp }