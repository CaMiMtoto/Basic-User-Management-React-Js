import {Link} from "react-router-dom";
import PropTypes from "prop-types";

export default function NavLink({text, href}) {
    return (
        <Link to={href} className="text-decoration-none text-dark">
            {text}
        </Link>
    )
}

NavLink.propTypes = {
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
}
