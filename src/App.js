import Button from "@material-ui/core/Button"
import css from "./style.css"
import PinterestLayout from "./pinterest/PinterestLayout"

function Header() {
  return <div className="headers">Header-----</div>
}

function Menu() {
  return <div className="menu">list1</div>
}

function Layout(props) {
  return (
    <div className="Layout">
      <div className="layout-header">{props.header}</div>
      <div className="layout-menu">{props.menu}</div>
    </div>
  )
}

function App() {
  return <Layout header={<PinterestLayout />} menu={<Menu />} />
}

export default App
