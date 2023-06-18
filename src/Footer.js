import logoTransparent from './assets/LogoTransparent.svg';
import { adaptiveGrid, selfCenter } from './commonStyles';

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

const footerClasses = adaptiveGrid;

const imgClasses = [
    selfCenter,
    'box-border h-16',
    'lg:justify-self-start lg:col-start-3 lg:col-span-2',
].join(' ');

const linkContainerClasses = [
    selfCenter,
    'lg:justify-self-end lg:col-start-5 lg:col-span-6',
    'flex flex-wrap gap-8 lg:flex-nowrap',
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