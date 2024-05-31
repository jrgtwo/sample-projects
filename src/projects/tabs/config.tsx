export type TabCardListConfigType = {
  [key: string]: {
    component: JSX.Element,
    menuName?: string
  }
}
export const TAB_CARD_LIST: TabCardListConfigType = {
  'topic1': {
    component: (<div>topic #1</div>),

  },
  'topic2': {
    menuName: 'Topic2',
    component: (<div>Topic #2</div>)
  }
}