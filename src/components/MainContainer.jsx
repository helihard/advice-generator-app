import PatternDividerMobile from "../images/pattern-divider-mobile.svg"
//import PatternDividerDesktop from "../images/pattern-divider-desktop.svg"
import IconDice from "../images/icon-dice.svg"

function MainContainer() {
  return (
    <div id="container">
      <div id="advice-no-div">advice #</div>
      <div id="quote-div">
        &quot;It is easy to sit up and take notice, what&apos;s difficult is
        getting up and taking action.&quot;
      </div>
      <img src={PatternDividerMobile} id="pattern-divider-mobile" />
      <button>
        <img src={IconDice} />
      </button>
    </div>
  )
}

export default MainContainer
