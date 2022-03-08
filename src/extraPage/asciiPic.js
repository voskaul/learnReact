import React from "react"
import Sketch from "react-p5"

const AsciiPic = () => {
  const setup = (p5) => {
    p5.createCanvas(400, 400)
    p5.background(100, 100, 100)
  }

  const draw = (p5) => {
    p5.ellipse(70, 70, 70, 70)
  }

  return <Sketch setup={setup} draw={draw} />
}

export default AsciiPic
