import logoTransparent from './assets/LogoTransparent.svg';
import { adaptiveGrid, hoverLink, selfCenter } from './commonStyles';

function FooterSection({ title, links }) {
    return (
        <div className='inline col-span-2'>
            <h1 className='text-card-title'> {title} </h1>
            <ul className='text-paragraph'>
                {links.map(({ name, link }) => <li> <a href={link} className={hoverLink}> {name} </a> </li>)}
            </ul>
        </div>
    )
}

const footerClasses = adaptiveGrid;

const imgClasses = [
    selfCenter,
    'box-border h-16',
    'xl:justify-self-start xl:col-start-3 xl:col-span-2',
].join(' ');

const linkContainerClasses = [
    selfCenter,
    'xl:justify-self-end xl:col-start-5 xl:col-span-6',
    'flex flex-wrap gap-8 xl:flex-nowrap',
].join(' ');

function Footer() {
    return (
        <footer className={footerClasses + ' bg-1-d p-2'}>
            <img src={logoTransparent} alt='footer logo' className={imgClasses + ' bg-white box-border h-40 p-2'} />
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