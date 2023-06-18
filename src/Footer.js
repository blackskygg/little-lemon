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
        <div className='inline col-span-2'>
            <h1> {title} </h1>
            <ul>
                {links.map(({ name, link }) => <FooterLink name={name} link={link} />)}
            </ul>
        </div>
    )
}

const footerClasses = [
    'grid content-center justify-center',
    'md:grid-rows-1 md:grid-cols-12',
    'grid-cols-1 grid-rows-auto',
].join(' ');

const imgClasses = [
    'self-center justify-self-center box-border h-16',
    'md:col-start-2 md:col-span-2',
].join(' ');

const linkContainerClasses = [
    'flex flex-row flex-wrap justify-around',
    'md:flex-nowrap md:col-start-5 md:col-span-6',
].join(' ');

function Footer() {
    return (
        <footer className={footerClasses}>
            <img src={logoTransparent} alt='footer logo' className={imgClasses} />
            <div className={linkContainerClasses}>
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
            </div>
        </footer>
    );
}

export default Footer;