import React, { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"

export default function Test() {
  const boxRef = useRef()
  const [count, setCount] = useState(0)

  useEffect(() => {
    gsap.to(boxRef.current, { rotation: "360" })
  })

  return (
    <div>
      <div className="box" ref={boxRef}>
        xxxxxxxxssssll
      </div>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Click s
      </button>
    </div>
  )
}
