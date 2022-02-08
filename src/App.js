import "./style.css"
import PinterestLayout from "./pinterest/PinterestLayout"
import PinterestLayout2 from "./GsapTest/GsapTest"
import Test from "./Test/Test"
import "./scss/style.scss"

function Header() {
  return <PinterestLayout />
}

function Menu() {
  return <div className="menu">list1</div>
}

function Layout(props) {
  return (
    <div>
      <div className="Layout">
        <div className="layout-header">{props.header}</div>
        <div className="layout-menu">{props.menu}</div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div>
      <Test />

      <span>------</span>
      <PinterestLayout2 />
      <span>------</span>
      <Layout header={<Header />} menu={<Menu />} />
    </div>
  )
}

export default App
