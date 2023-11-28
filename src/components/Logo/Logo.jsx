import { bool } from "prop-types"
import "./Logo.styles.scss"

const Logo = ({ secondary }) => {
  const logoCssClasses = !secondary ? "main-logo" : "secondary-logo"
  return (
    <h4 className={logoCssClasses}>work<span>it</span></h4>
  )
}

Logo.propTypes = {
  secondary: bool
}

Logo.defaultProps = {
  secondary: false,
}

export { Logo }