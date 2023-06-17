import logo from './assets/Logo.svg';
import Nav from './Nav';

function Main() {
    return (
        <header>
            <img src={logo} alt="logo" />

            <Nav />
        </header>
    );
}

export default Main;