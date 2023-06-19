import { adaptiveGrid, button, hoverLink, selfCenter } from "./commonStyles";
import restaurantImg from './assets/restaurant.jpg';
import greakSalad from './assets/greek salad.jpg';
import lemonDessert from './assets/lemon dessert.jpg';

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
                    <h3 className='text-card-title text-white'> Chicago </h3>
                    <p className='text-paragraph text-white'> Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. </p>
                </article>
                <a href='#' role='button' className={button}> Reserve a Table </a>
            </div>
            <div className={heroRightClasses}>
                <img src={restaurantImg} alt='hero' className='h-60' />
            </div>
        </section>
    );
}

function SpecialCard({ img, name, price, description, lgStart, span, align }) {
    return (
        <article className={`w-48 xl:col-start-${lgStart} xl:col-span-${span} justify-self-center xl:justify-self-${align} rounded-t-2xl bg-h-l m-2`}>
            <img src={img} alt={name} className=' rounded-t-2xl box-border h-32 w-full' />
            <div className='p-2 h-full'>
                <div className='flex flex-wrap justify-between items-end pb-4'>
                    <span className='text-card-title'> {name} </span>
                    <span className='text-highlight'> {price} </span>
                </div>
                <p className='text-paragraph pb-4 text-h-d'> {description} </p>
                <a href='#' className={'text-highlight ' + hoverLink}> Order a delivery </a>
            </div>
        </article>
    );
}

function Specials() {
    return (
        <section className='p-2'>
            <div className={adaptiveGrid}>
                <h2 className={selfCenter + ' xl:col-start-3 xl:justify-self-start text-sub-title'}> Specials </h2>
                <a className={selfCenter + ' ' + button + ' xl:col-span-4 xl:col-end-11 xl:justify-self-end'} href='#' role='button'> Open Menu </a>
            </div>
            <div className={adaptiveGrid}>
                <SpecialCard
                    key='1'
                    img={greakSalad}
                    name='Greak Sald'
                    price='$0.11'
                    description='The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
                    lgStart={3}
                    span={3}
                    align='start'
                />
                <SpecialCard
                    key='2'
                    img={lemonDessert}
                    name='Lemon Dessert'
                    price='$0.12'
                    description={'This comes straight from grandma\'s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'}
                    lgStart={5}
                    span={4}
                    align='center'
                />
                <SpecialCard
                    key='3'
                    img={greakSalad}
                    name='Bruchetta'
                    price='$0.13'
                    description='Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. '
                    lgStart={9}
                    span={2}
                    align='end'
                />
            </div>
        </section>
    );
}

function Main() {
    return (
        <main>
            <Hero />
            <Specials />
        </main>
    );
}

export default Main;