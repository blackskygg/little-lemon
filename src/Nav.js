function NavItem({ name, link }) {
    return (
        <li className='whitespace-nowrap my-auto px-2'>
            <a href={link}> {name} </a>
        </li>
    );
}

function Nav() {
    return (
        <nav className='grid self-center justify-start md:col-start-5 md:col-span-6'>
            <ul className='flex flex-wrap md:flex-nowrap justify-around'>
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