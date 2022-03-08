import React, {useRef, useState} from "react"

function Effectorial() {
  const [data, setData] = useState("0")

  const inputRef = useRef(null)

  const onClick = () => {
    inputRef.current.value = ""

    //console.log(inputRef.current.value)
  }

  return (
    <div>
      <h1> hellow world </h1>
      <input type="text" placeholder="ex.." ref={inputRef} />
      <button onClick={onClick}>click</button>
    </div>
  )
}

export default Effectorial
