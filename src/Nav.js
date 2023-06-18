import { selfCenter } from "./commonStyles";

function NavItem({ name, link }) {
    return (
        <li className='whitespace-nowrap my-auto px-2'>
            <a href={link}> {name} </a>
        </li>
    );
}

const navClasses = [
    selfCenter,
    'lg:col-start-5 lg:col-span-6 lg:justify-self-end',
].join(' ');

function Nav() {
    return (
        <nav className={navClasses}>
            <ul className='flex flex-wrap lg:flex-nowrap'>
                <NavItem name='HOME' link='#' />
                <NavItem name='ABOUT' link='#' />
                <NavItem name='MENU' link='#' />
                <NavItem name='RESERVATIONS' link='#' />
                <NavItem name='ORDER ONLINE' link='#' />
                <NavItem name='LOGIN' link='#' />
            </ul>
        </nav>
    );
}

export default Nav;