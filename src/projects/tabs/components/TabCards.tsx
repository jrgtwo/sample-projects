import { useEffect, useState } from 'react'
import type { TabCardListConfigType, TabCardListConfigItemType } from '../config';

const TabCards = (props: { topic: number, tabCardList: TabCardListConfigType['tabData'] }) => {
  const {
    topic,
    tabCardList
  } = props;

  const [currTab, setCurrTab] = useState<TabCardListConfigItemType['component']>(tabCardList[topic].component)

  useEffect(() => {
    setCurrTab(tabCardList[topic]?.component)
  }, [tabCardList, topic])

  return (
    <>
      {currTab}
    </>
  )
}

export { TabCards }