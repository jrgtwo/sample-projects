type CURSOR_SETTER = (cursor: number[]) => void

const handleEditorMouseDown = (
  event: React.MouseEvent<HTMLElement>,
  setCursorStart: CURSOR_SETTER,
  setCursorEnd: CURSOR_SETTER,

) => {
  event.preventDefault()

  if (!(event.target instanceof HTMLSpanElement)) return

  const elemCursorPos = event.target?.dataset?.idx
  let curPos = elemCursorPos?.split(',').map((pos) => parseInt(pos))

  if (!curPos) curPos = [-1, -1]

  const newCursorStart = [curPos[0], curPos[1]]

  setCursorStart(newCursorStart)
  setCursorEnd(newCursorStart)
}

export { handleEditorMouseDown }