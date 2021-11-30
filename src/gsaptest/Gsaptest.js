import React, { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"

export default function GsapTest() {
  const boxRef = useRef()
  const [count, setCount] = useState(0)

  useEffect(() => {
    gsap.to(boxRef.current, { rotation: "+=360" })
  }, [count])

  return (
    <div>
      <div className="box" ref={boxRef}>
        2222222221111
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
