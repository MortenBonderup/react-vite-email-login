import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <NavLink to="/home">Hjem</NavLink>
            <NavLink to="/about">Om mig</NavLink>
            <NavLink to="/contact">Kontakt</NavLink>
        </nav>
    );
}
