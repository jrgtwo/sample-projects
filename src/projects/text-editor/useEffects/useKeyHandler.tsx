import { useEffect } from 'react'
import { isSingleCursor, getCursorIndex } from '../helpers/cursorSelect'
import { CURSOR_SETTER, CURSOR } from '../types'

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

      if (isSingleCursor(cursorStart, cursorEnd)) {
        const cursorIndex = getCursorIndex(cursorStart)
        let newPages = pages
        const newPageLeft = newPages.slice(0, cursorIndex)
        const newPageRight = newPages.slice(cursorIndex)
        newPages = `${newPageLeft}${event.key}${newPageRight}`

        setPages(newPages)
        setCursorStart([0, cursorIndex + 1])
        setCursorEnd([0, cursorIndex + 1])
      }
    }
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [cursorEnd, cursorStart, pages, setPages, setCursorStart, setCursorEnd])
}

export { useKeyHandler }