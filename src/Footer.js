import logoTransparent from './assets/LogoTransparent.svg';

function FooterLink({ name, link }) {
    return (
        <li>
            <a href={link}> {name} </a>
        </li>
    )
}

function FooterSection({ title, links }) {
    return (
        <div>
            <h1> {title} </h1>
            <ul>
                {links.map(({ name, link }) => <FooterLink name={name} link={link} />)}
            </ul>
        </div>
    )
}

function Footer() {
    return (
        <footer>
            <img src={logoTransparent} alt='footer logo' />
            <FooterSection
                title='Navigation'
                links={[
                    { name: 'Home', link: '#' },
                    { name: 'About', link: '#' },
                    { name: 'Menu', link: '#' },
                    { name: 'Home', link: '#' },
                    { name: 'Reservations', link: '#' },
                    { name: 'Order Online', link: '#' },
                    { name: 'Login', link: '#' },
                ]}
            />
            <FooterSection
                title='Context'
                links={[
                    { name: 'Address', link: '#' },
                    { name: 'Phone Number', link: '#' },
                    { name: 'Email', link: '#' },
                ]}
            />
            <FooterSection
                title='Social Media Links'
                links={[
                    { name: 'Facebook', link: '#' },
                    { name: 'Twitter', link: '#' },
                ]}
            />
        </footer>
    );
}

export default Footer;