import logoImg from '../assets/location-icon.svg'

export default function Header() {
    return (
        <nav>
            <a className="header--logo" href="#"><img className="header--logo__img" src={logoImg} alt="logo image" />
            my travel journal.</a>
        </nav>
    )
}