function NavItem({ name, link }) {
    return (
        <li>
            <a href={link}> {name} </a>
        </li>
    );
}

function Nav() {
    return (
        <nav>
            <ul>
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