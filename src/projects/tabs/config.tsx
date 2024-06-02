export type TabMenuItemProps = {
  name: string,
  itemTopic: string,
  setTopic: (arg0: string) => void
}

export type TabCardListConfigItemType = {
  component: JSX.Element,
  menuName: string
}

export type TabCardListConfigType = {
  [key: string]: TabCardListConfigItemType
}
export const TAB_CARD_LIST: TabCardListConfigType = {
  'topic1': {
    component: (<div>topic #1</div>),
    menuName: 'TOPIC 1'
  },
  'topic2': {
    menuName: 'Topic2',
    component: (<div>Topic #2</div>)
  }
}