import { string } from "prop-types"
import "./Button.styles.scss"

const Button = ({ text }) => {
  return (
    <button className="primary-button">{text}</button>
  )
}

Button.propTypes = {
  text: string
}

Button.defaultProps = {}

export { Button }