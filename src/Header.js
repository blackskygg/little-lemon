import logo from './assets/Logo.svg';
import Nav from './Nav';
import { adaptiveGrid, selfCenter } from './commonStyles';

const headerClasses = [
    adaptiveGrid,
    'xl:h-24',
].join(' ');
const imgClasses = [
    selfCenter,
    'xl:col-start-3 xl:col-span-2 xl:justify-self-start',
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