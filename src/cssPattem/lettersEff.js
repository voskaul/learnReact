import React from "react"
import "../assets/scss/cssPattem.scss"

const LetterEff = () => {
  let url = ""
  return (
    <>
      <div className="letterEff">
        <a className="block" href={url}>
          <span className="spaced">M</span>
          <span className="ghost">a</span>
          <span className="ghost">j</span>
          <span className="ghost">o</span>
          <span className="ghost">r</span>
          <span>&nbsp;</span>
          <span className="spaced">L</span>
          <span className="ghost">e</span>
          <span className="ghost">a</span>
          <span className="ghost">g</span>
          <span className="ghost">u</span>
          <span className="ghost">e</span>
          <span>&nbsp;</span>
          <span className="spaced">B</span>
          <span className="ghost">a</span>
          <span className="ghost">s</span>
          <span className="ghost">e</span>
          <span className="ghost">b</span>
          <span className="ghost">a</span>
          <span className="ghost">l</span>
          <span className="ghost">l</span>
        </a>
        <div className="circileEff">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.654 51.654">
            <path
              fill="none"
              stroke="#ffffff"
              stroke-miterlimit="10"
              d="M25.827.5A25.327 25.327 0 1 1 .5 25.827 25.327 25.327 0 0 1 25.827.5"
            />
          </svg>
        </div>
      </div>
    </>
  )
}

export default LetterEff
