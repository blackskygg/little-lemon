import { adaptiveGrid, button, hoverLink, selfCenter } from "./commonStyles";
import restaurantImg from './assets/restaurant chef B.jpg';

const heroLeftClasses = [
    selfCenter,
    'py-4',
    'xl:col-start-3 xl:col-span-4 xl:justify-self-start',
].join(' ');

const heroRightClasses = [
    selfCenter,
    'xl:col-start-7 xl:col-span-4',
].join(' ');

function Chicago() {
    return (
        <section className={adaptiveGrid + ' p-8'}>
            <div className={heroLeftClasses}>
                <article className='pb-8 box-border w-[20rem]'>
                    <h1 className='text-sub-title'> Little Lemon </h1>
                    <h3 className='text-card-title'> Chicago </h3>
                    <p className='text-paragraph'> Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. </p>
                </article>
            </div>
            <div className={heroRightClasses}>
                <img src={restaurantImg} alt='hero' className='h-60' />
            </div>
        </section>
    );
}

export default Chicago;