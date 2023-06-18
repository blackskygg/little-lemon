import logo from './assets/Logo.svg';
import Nav from './Nav';
import { adaptiveGrid, selfCenter } from './commonStyles';

const headerClasses = [
    adaptiveGrid,
    'lg:h-24',
].join(' ');
const imgClasses = [
    selfCenter,
    'lg:col-start-3 lg:col-span-2 lg:justify-self-start',
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