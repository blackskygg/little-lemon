import logo from './assets/Logo.svg';
import Nav from './Nav';

const headerClasses = [
    'grid justify-center',
    'md:grid-cols-12 md:grid-rows-1 md:h-24',
    'grid-cols-1 grid-rows-auto',
].join(' ');
const imgClasses = [
    'self-center justify-self-center box-border h-8',
    'md:col-start-3 md:col-span-2',
].join(' ');

function Main() {
    return (
        <header className={headerClasses}>
            <img src={logo} alt='logo' className={imgClasses} />
            <Nav />
        </header>
    );
}

export default Main;