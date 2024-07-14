import type { Routes } from "./types"
function CardContainer({ routes, page }: {
  routes: Routes,
  page: string
}) {
  return (
    <div id="card-container">
      {
        routes.find((route) => {
          return route[1].slice(1) === page
        })?.[2]
      }
    </div>
  )
}


export { CardContainer }