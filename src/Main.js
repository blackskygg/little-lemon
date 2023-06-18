import { adaptiveGrid, selfCenter } from "./commonStyles";
import restaurantImg from './assets/restaurant.jpg';
import greakSalad from './assets/greek salad.jpg';
import lemonDessert from './assets/lemon dessert.jpg';

const heroLeftClasses = [
    selfCenter,
    'py-4',
    'lg:col-start-3 lg:col-span-4 lg:justify-self-start',
].join(' ');

const heroRightClasses = [
    selfCenter,
    'lg:col-start-7 lg:col-span-4',
].join(' ');

function Hero() {
    return (
        <section className={adaptiveGrid}>
            <div className={heroLeftClasses}>
                <article className='pb-8 box-border w-[20rem]'>
                    <h1> Little Lemon </h1>
                    <h3> Chicago </h3>
                    <p> Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. </p>
                </article>
                <a href='#' role='button'> Reserve a Table </a>
            </div>
            <div className={heroRightClasses}>
                <img src={restaurantImg} alt='hero' className='h-60' />
            </div>
        </section>
    );
}

function SpecialCard({ img, name, price, description, lgStart, span, align}) {
    return (
        <article className={`w-48 lg:col-start-${lgStart} lg:col-span-${span} justify-self-center lg:row-start-1 lg:justify-self-${align}`}>
            <img src={img} alt={name} />
            <div>
                <h3> {name} </h3>
                <span> {price} </span>
            </div>
            <p> {description} </p>
            <p> Order a delivery </p>
        </article>
    );
}

function Specials() {
    return (
        <section>
            <div className={adaptiveGrid}>
                <h2 className={selfCenter + ' lg:col-start-3 lg:justify-self-start'}> Specials </h2>
                <a className={selfCenter + ' lg:col-end-11 lg:justify-self-end'} href='#' role='button'> Open Menu </a>
            </div>
            <div className={adaptiveGrid + ' gap-8'}>
                <SpecialCard
                    img={greakSalad}
                    name='Greak Sald'
                    price='$0.11'
                    description='The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
                    lgStart={3}
                    span={3}
                    align='start'
                />
                <SpecialCard
                    img={lemonDessert}
                    name='Lemon Dessert'
                    price='$0.12'
                    description={'This comes straight from grandma\'s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'}
                    lgStart={5}
                    span={4}
                    align='center'
                />
                <SpecialCard
                    img={greakSalad}
                    name='Bruchetta'
                    price='$0.13'
                    description='Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. '
                    lgStart={8}
                    span={3}
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