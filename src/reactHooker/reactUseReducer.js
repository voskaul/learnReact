import React from "react"
import {useReducer} from "react"

const ReactUseReducer = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "Increment":
        return {count: state.count + 1, showState: state.showState}
      case "toggleTxtState":
        return {count: state.count, showState: !state.showState}
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, {count: 0, showState: true})

  return (
    <>
      {state.count}
      <button
        onClick={() => {
          dispatch({type: "Increment"})
          dispatch({type: "toggleTxtState"})
        }}
      >
        add
      </button>
      <h1> {state.showState && <p>show txt</p>} </h1>
    </>
  )
}

export default ReactUseReducer
