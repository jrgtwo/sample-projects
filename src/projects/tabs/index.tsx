import { useState, useCallback, useEffect } from 'react'
import type { TabCardListConfigType, TabCardListConfigItemType, TabMenuItemProps } from './config';
import { TAB_CARD_LIST } from './config';

const TabMenuItem = (props: TabMenuItemProps) => {
  const {
    name,
    itemTopic,
    setTopic
  } = props;

  const handleClick = useCallback(() => {
    setTopic(itemTopic)
  }, [setTopic, itemTopic])

  return (
    <li>
      <button onClick={handleClick}>{name}</button>
    </li>
  )
}

const TabCards = (props: { topic: string, tabCardList: TabCardListConfigType }) => {
  const {
    topic,
    tabCardList
  } = props;

  const [currTab, setCurrTab] = useState<TabCardListConfigItemType['component']>(tabCardList[topic]?.component)

  useEffect(() => {
    setCurrTab(tabCardList[topic]?.component)
  }, [tabCardList, topic])

  return (
    <>
      <p>Current tab is set to {topic}</p>
      {currTab}
    </>
  )
}



const Tabs = () => {

  const [topic, setTopic] = useState<string>('')

  return (
    <>
      <h1>Tabs</h1>
      <menu>
        {
          Object.keys(TAB_CARD_LIST).map((item) => (
            <TabMenuItem
              key={item}
              name={TAB_CARD_LIST[item]?.menuName || item}
              itemTopic={item}
              setTopic={setTopic}
            />
          ))
        }
      </menu>
      {topic.length > 0 &&
        <section>
          <TabCards
            topic={topic}
            tabCardList={TAB_CARD_LIST} />
        </section>
      }
    </>
  )
}

export { Tabs }