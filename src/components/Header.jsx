import {Link} from 'react-router-dom';
import logo from "./../assets/logo.png"

export default function Header() {
    return <>
        <header>
            <nav className={"nav-bar"}>
                <img src={logo} alt=" logo de la app" className={"logo"}/>
                <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/actividades">Actividades</Link></li>
                </ul>
            </nav>
        </header>
    </>
}
