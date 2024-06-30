import { useState } from 'react'
import { TAB_CARD_LIST, TabCardListConfigType } from './config';
import { TabMenuItem } from './components/TabMenuItem';
import { TabCards } from './components/TabCards';

const Tabs = ({ tabCardList, className }:
  {
    tabCardList?: TabCardListConfigType, className?: string
  }) => {

  const [topic, setTopic] = useState<number>(0)
  const [cardList] = useState(tabCardList || TAB_CARD_LIST)

  return (
    <div className={`tab-container ${className ? className : ''}`}>
      {
        cardList?.heading &&
        <h1>{cardList.heading}</h1>}
      <menu className="tab-menu">
        {
          cardList.tabData.map((item, index) => (
            <TabMenuItem
              key={index}
              name={item.menuName}
              index={index}
              topic={topic}
              setTopic={setTopic}
            />
          ))
        }
      </menu>
      {<section className="tab-contents">
        <TabCards
          topic={topic}
          tabCardList={cardList.tabData} />
      </section>
      }
    </div>
  )
}

export { Tabs }