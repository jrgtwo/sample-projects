export type CURSOR_SETTER = (cursor: number[]) => void

export type CURSOR = number[]

export type CURSOR_SELECT = {
  pageIdx: number,
  cursorStart: CURSOR,
  cursorEnd: CURSOR,
  index: number,
  cursorIndex: number,
}