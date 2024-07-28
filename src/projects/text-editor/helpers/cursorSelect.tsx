import { CURSOR, CURSOR_SELECT } from "../types"

function isCursorPage(
  pageIdx: CURSOR_SELECT['pageIdx'],
  start: CURSOR_SELECT['cursorIndex'],
  end: CURSOR_SELECT['cursorIndex']
) {
  return (pageIdx >= Math.min(start, end))
    && (pageIdx <= Math.max(start, end))
}

function isCursorIndex(
  index: CURSOR_SELECT['index'],
  start: CURSOR_SELECT['cursorIndex'],
  end: CURSOR_SELECT['cursorIndex']
) {
  return (index >= Math.min(start, end))
    && (index <= Math.max(start, end))
}

function isCursorSelected(
  pageIdx: CURSOR_SELECT['pageIdx'],
  index: CURSOR_SELECT['index'],
  cursorStart: CURSOR_SELECT['cursorStart'],
  cursorEnd: CURSOR_SELECT['cursorEnd']
) {
  return isCursorPage(pageIdx, cursorStart[0], cursorEnd[0])
    && isCursorIndex(index, cursorStart[1], cursorEnd[1])
}

function isSingleCursor(
  cursorStart: CURSOR_SELECT['cursorStart'],
  cursorEnd: CURSOR_SELECT['cursorEnd']
) {
  const pageMatch = cursorStart[0] === cursorEnd[0]
  const indexMatch = cursorStart[1] === cursorEnd[1]

  return pageMatch && indexMatch
}

function getCursorPage(cursor: CURSOR) {
  return cursor[0]
}
function getCursorIndex(cursor: CURSOR) {
  return cursor[1]
}
export { isCursorSelected, isSingleCursor, getCursorPage, getCursorIndex }