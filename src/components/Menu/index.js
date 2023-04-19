import Logo from "../../assets/img/Logo.png";
import ButtonLink from './components/ButtonLink'
import './Menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <ButtonLink href="/">
                <img className="Logo" src={Logo} alt="AluraFlix" />
            </ButtonLink>

            <ButtonLink className="ButtonLink" href="/">
                Novo Vídeo
            </ButtonLink>

        </nav>
    );
}

export default Menu;