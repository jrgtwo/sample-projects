import { useState } from 'react'
import { TAB_CARD_LIST, TabCardListConfigType } from './config';
import { TabMenuItem } from './components/TabMenuItem';
import { TabCards } from './components/TabCards';

const Tabs = ({ tabCardList }: { tabCardList: TabCardListConfigType }) => {

  const [topic, setTopic] = useState<number>(0)
  const [cardList] = useState(tabCardList || TAB_CARD_LIST)

  return (
    <>
      {
        cardList?.heading &&
        <h1>{cardList.heading}</h1>}
      <menu>
        {
          cardList.tabData.map((item, index) => (
            <TabMenuItem
              key={index}
              name={item.menuName}
              index={index}
              setTopic={setTopic}
            />
          ))
        }
      </menu>
      {<section>
        <TabCards
          topic={topic}
          tabCardList={cardList.tabData} />
      </section>
      }
    </>
  )
}

export { Tabs }