import { string, bool } from "prop-types"
import "./Button.styles.scss"

const Button = ({ text, secondary }) => {
  const buttonCssClasses = !secondary ? "primary-button" : "secondary-button"

  return (
    <button className={buttonCssClasses}>
      { (!secondary) ? text : (<span className="secondary-button--span">{text}</span>) }
    </button>
  )
}

Button.propTypes = {
  text: string,
  secondary: bool
}

Button.defaultProps = {
  secondary: false,
}

export { Button }