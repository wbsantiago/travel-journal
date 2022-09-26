import logoImg from '../assets/world.svg'
import './header.css'

export default function Header() {
    return (
        <nav>
            <a className="header--logo" href="#"><img className="header--logo__img" src={logoImg} alt="logo image" />
            my travel journal.</a>
        </nav>
    )
}