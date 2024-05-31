import { useState, useCallback, useEffect } from 'react'
import { TAB_CARD_LIST, TabCardListConfigType } from './config';
export type TabMenuItemProps = { name: string, itemTopic: string, setTopic: (arg0: string) => void }
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

  const [currTab, setCurrTab] = useState(topic)

  useEffect(() => {
    setCurrTab(tabCardList[topic]?.component || null)
  }, [tabCardList, topic])

  return (
    <>
      <p>Current tab is set to {topic}</p>
      {currTab}
    </>
  )
}



const Tabs = () => {

  const [topic, setTopic] = useState(null)

  return (
    <>
      <h1>Tabs</h1>
      <p>Current Tab is {topic}</p>
      <menu>
        {
          Object.keys(TAB_CARD_LIST).map((item) => (
            <TabMenuItem
              name={TAB_CARD_LIST[item]?.menuName || item}
              itemTopic={item}
              setTopic={setTopic}
            />
          ))
        }
      </menu>
      <section>
        <TabCards
          topic={topic}
          tabCardList={TAB_CARD_LIST} />
      </section>
    </>
  )
}

export { Tabs }