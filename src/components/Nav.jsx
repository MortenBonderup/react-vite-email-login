import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">Gem information</NavLink>
            <NavLink to="/contact">Dine gemte informationer</NavLink>
        </nav>
    );
}
