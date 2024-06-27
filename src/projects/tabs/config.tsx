export type TabMenuItemProps = {
  topic: number,
  name: string,
  index: number,
  setTopic: (arg0: number) => void
}

export type TabCardListConfigItemType = {
  component: JSX.Element,
  menuName: string
}

export type TabCardListConfigType = {
  'heading'?: string,
  'tabData': TabCardListConfigItemType[]

}
export const TAB_CARD_LIST: TabCardListConfigType = {
  'heading': 'Tabs',
  'tabData': [
    {
      component: (<div>topic #1</div>),
      menuName: 'TOPIC 1'
    },
    {
      menuName: 'Topic2',
      component: (<div>Topic #2</div>)
    }
  ]

}