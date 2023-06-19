import { selfCenter } from "./commonStyles";

function NavItem({ name, link }) {
    return (
        <li className='whitespace-nowrap my-auto px-2'>
            <a href={link} className='text-highlight'> {name} </a>
        </li>
    );
}

const navClasses = [
    selfCenter,
    'xl:col-start-5 xl:col-span-6 xl:justify-self-end',
].join(' ');

function Nav() {
    return (
        <nav className={navClasses}>
            <ul className='flex flex-wrap xl:flex-nowrap'>
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