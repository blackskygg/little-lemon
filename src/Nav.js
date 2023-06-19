import { hoverLink, selfCenter } from "./commonStyles";
import { Link } from "react-router-dom";

function NavItem({ name, link }) {
    return (
        <li className='whitespace-nowrap my-auto px-2'>
            <Link to={link} className={'text-highlight ' + hoverLink}> {name} </Link>
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
                <NavItem name='HOME' link='/' />
                <NavItem name='ABOUT' link='#' />
                <NavItem name='MENU' link='#' />
                <NavItem name='RESERVATIONS' link='/book' />
                <NavItem name='ORDER ONLINE' link='#' />
                <NavItem name='LOGIN' link='#' />
            </ul>
        </nav>
    );
}

export default Nav;