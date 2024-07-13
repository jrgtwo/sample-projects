import type { Routes } from "./types"
const Menu = ({ routes, handleClick }: {
  handleClick: (event: React.MouseEvent<HTMLElement>, tab: string) => void,
  routes: Routes
}) => {

  return (
    <section id="menu-container">
      <h1>Projects</h1>
      <menu id="project-menu">
        {
          routes.map((route) => (
            <li>
              <a
                href={route[1]}
                onClick={(event) => handleClick(event, route[1])}>{route[0]}</a>
            </li>
          ))
        }
      </menu>
    </section>
  )
}

export { Menu }