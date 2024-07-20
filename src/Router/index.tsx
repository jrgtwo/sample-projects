import { useCallback, useState } from 'react';
import { Routes } from './types'
import { CardContainer } from "./CardContainer";
import { Menu } from "./Menu";
import { removeHash } from './helpers';

function Router({ routes }: {
  routes: Routes
}) {
  const [page, setPage] = useState(removeHash(window.location.hash))

  const handleClick = useCallback((event: React.MouseEvent<HTMLElement>, hash: string) => {
    event.preventDefault()
    setPage(removeHash(hash))
  }, [])

  return (
    <>
      <Menu
        handleClick={handleClick}
        routes={routes}
      />
      <CardContainer
        routes={routes}
        page={page}
      />
    </>
  )
}

export { Router }