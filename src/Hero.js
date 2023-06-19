import { adaptiveGrid, button, hoverLink, selfCenter } from "./commonStyles";
import { Link } from 'react-router-dom';
import restaurantImg from './assets/restaurant.jpg';

const heroLeftClasses = [
    selfCenter,
    'py-4',
    'xl:col-start-3 xl:col-span-4 xl:justify-self-start',
].join(' ');

const heroRightClasses = [
    selfCenter,
    'xl:col-start-7 xl:col-span-4',
].join(' ');

function Hero() {
    return (
        <section className={adaptiveGrid + ' bg-1-d p-2'}>
            <div className={heroLeftClasses}>
                <article className='pb-8 box-border w-[20rem] text-1-l'>
                    <h1 className='text-sub-title'> Little Lemon </h1>
                    <h3 className='text-card-title text-h-l'> Chicago </h3>
                    <p className='text-paragraph text-h-l'> Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. </p>
                </article>
                <Link to='/book' role='button' className={button}> Reserve a Table </Link>
            </div>
            <div className={heroRightClasses}>
                <img src={restaurantImg} alt='hero' className='h-60' />
            </div>
        </section>
    );
}

export default Hero;