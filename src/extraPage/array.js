import React from "react"

const ArrayExample = () => {
  return (
    <>
      <div>
        [■,■,■,■].map(■→●) ⇒ [●,●,●,●]
        <br />
        [■,●,■,▲].filter(■→true) ⇒ [■,■]
        <br />
        [■,●,■,▲].find(●→true) ⇒ ●
        <br />
        [■,●,■,▲].findIndex(●→true) ⇒ 1
        <br />
        [■,●,■,▲].fill(●) ⇒ [●,●,●,●]
        <br />
        [■,●,■,▲].some(●→true) ⇒ true
        <br />
        [■,●,■,▲].every(●→true) ⇒ false
        <br />
      </div>
    </>
  )
}

export default ArrayExample
