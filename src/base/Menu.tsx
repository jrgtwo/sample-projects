const Menu = ({ handleClick }: {
  handleClick: (event: React.MouseEvent<HTMLElement>, tab: string) => void
}) => {

  return (
    <section id="menu-container">
      <h1>Projects</h1>
      <menu id="project-menu">
        <li><a href="#tabs" onClick={(event) => handleClick(event, '#tabs')}>Tabs</a></li>
        <li><a href="#tic-tac-toe" onClick={(event) => handleClick(event, '#tic-tac-toe')}>Tic Tac Toe</a></li>
        <li><a href="#wordle" onClick={(event) => handleClick(event, '#wordle')}>Wordle</a></li>
        <li><a href="#user-inputs" onClick={(event) => handleClick(event, '#user-inputs')}>User Inputs</a> </li>
        <li><a href="#text-editor" onClick={(event) => handleClick(event, '#text-editor')}>Text Editor</a> </li>
      </menu>
    </section>
  )
}

export { Menu }