import { useCallback } from 'react'
import type { TabMenuItemProps } from '../config';
const TabMenuItem = (props: TabMenuItemProps) => {
  const {
    name,
    index,
    setTopic
  } = props;

  const handleClick = useCallback(() => {
    setTopic(index)
  }, [setTopic, index])

  return (
    <li>
      <button onClick={handleClick}>{name}</button>
    </li>
  )
}

export { TabMenuItem }