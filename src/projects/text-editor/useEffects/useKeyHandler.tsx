import { useEffect } from 'react'
import { isSingleCursor, getCursorIndex } from '../helpers/cursorSelect'
import { CURSOR_SETTER, CURSOR } from '../types'
const SPECIAL_INPUT = {
  ENTER: 'Enter',
  BACKSPACE: 'Backspace',
  DELETE: 'Delete'
}

function useKeyHandler(
  cursorEnd: CURSOR,
  cursorStart: CURSOR,
  pages: string,
  setPages: (arg0: string) => void,
  setCursorStart: CURSOR_SETTER,
  setCursorEnd: CURSOR_SETTER
) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      event.preventDefault()

      const key = event.key
      //const isAlphaNumeric = (/^[a-z0-9]+$/i).test(key)
      const isAlphaNumeric = key.length === 1
      const isArrow = key.toLowerCase().split('arrow')[1]
      const isEnter = key === 'Enter'
      const isBackspace = key === 'Backspace'

      const cursorIndex = getCursorIndex(cursorStart)
      let newPages = pages
      let newCursorStart = cursorIndex
      let newCursorEnd = cursorIndex
      const newPageLeft = newPages.slice(0, cursorIndex)
      const newPageRight = newPages.slice(cursorIndex)

      if (isAlphaNumeric) {
        if (isSingleCursor(cursorStart, cursorEnd)) {

          newPages = `${newPageLeft}${event.key}${newPageRight}`
          newCursorStart = cursorIndex + 1
          newCursorEnd = cursorIndex + 1
        }
      } else if (isArrow) {
        debugger
        // update cursor position
      } else if (isEnter) {
        debugger
      } else if (isBackspace) {
        newPages = `${newPageLeft.slice(0, cursorIndex - 1)}${newPageRight}`
        newCursorStart = cursorIndex - 1
        newCursorEnd = cursorIndex - 1
      }
      setCursorStart([0, newCursorStart])
      setCursorEnd([0, newCursorEnd])
      setPages(newPages)
    }
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [cursorEnd, cursorStart, pages, setPages, setCursorStart, setCursorEnd])
}

export { useKeyHandler }   