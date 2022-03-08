import "./assets/scss/reset.scss"
import "./assets/scss/App.scss"
import LetterEff from "./cssPattem/lettersEff"

function App() {
  const peak = ["aa", "babel", "cc", "findDOMNode"]
  const [...first] = peak
  console.log(first)
  //console.log(other)

  const user = {
    name: "John",
    age: 30,
    isAdmin: true,
    friends: ["Bob", "Jane"],
    address: {
      city: "New York",
      country: "USA",
    },
  }

  //console.log(JSON.stringify(user))
  //console.log(JSON.stringify(user, null, "lol"))
  return (
    <div className="App">
      <LetterEff />
    </div>
  )
}

export default App
