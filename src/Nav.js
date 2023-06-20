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
                <NavItem name='Home' link='/' />
                <NavItem name='About' link='#' />
                <NavItem name='Menu' link='#' />
                <NavItem name='Reservations' link='/book' />
                <NavItem name='Order Online' link='#' />
                <NavItem name='Login' link='#' />
            </ul>
        </nav>
    );
}

export default Nav;