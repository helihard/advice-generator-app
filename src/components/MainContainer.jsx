import { useState, useEffect } from "react"

import PatternDividerMobile from "../images/pattern-divider-mobile.svg"
import PatternDividerDesktop from "../images/pattern-divider-desktop.svg"
import IconDice from "../images/icon-dice.svg"

function MainContainer() {
  const [advice, setAdvice] = useState(null)

  const fetchAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice?" + Date.now())
      const result = await response.json()
      setAdvice(result)
    } catch (error) {
      console.error("No advice")
    }
  }

  useEffect(() => {
    fetchAdvice()
  }, [])

  const handleClick = () => fetchAdvice()

  return (
    <div id="container">
      {advice && (
        <>
          <div id="advice-no-div">advice #{advice.slip.id}</div>
          <div id="quote-div">&#8220;{advice.slip.advice}&#8221;</div>
        </>
      )}
      <img src={PatternDividerMobile} id="pattern-divider-mobile" />
      <img src={PatternDividerDesktop} id="pattern-divider-desktop" />
      <button onClick={handleClick}>
        <img src={IconDice} alt="Get advice" />
      </button>
    </div>
  )
}

export default MainContainer
