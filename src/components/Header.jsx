import PropTypes from "prop-types"
import AboutIcon from "./AboutIcon"
import { Link } from "react-router-dom"

function Header({text, bgColor, textColor}) {

  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor
  }

  return (
    <header style={headerStyle}>
        <div className="container">
          <Link to="/feedbacks">
            <h2>{text}</h2>
          </Link>
        </div>
        <AboutIcon />
    </header>
  )
}

Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
}

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string
}

export default Header
