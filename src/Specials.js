import { adaptiveGrid, adaptiveInlineFlex, button, hoverLink, selfCenter } from "./commonStyles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';

import greakSalad from './assets/greek salad.jpg';
import lemonDessert from './assets/lemon dessert.jpg';


function SpecialCard({ img, name, price, description }) {
    return (
        <article className={selfCenter + ' w-48 rounded-t-2xl bg-h-l m-2'}>
            <img src={img} alt={name} className='rounded-t-2xl box-border h-32 w-full' />
            <div className='p-2 h-full'>
                <div className='flex flex-wrap justify-between items-end pb-4'>
                    <span className='text-card-title'> {name} </span>
                    <span className='text-highlight'> {price} </span>
                </div>
                <p className='text-paragraph pb-4 text-h-d'> {description} </p>
                <a href='#' className={'text-highlight ' + hoverLink}> Order a delivery <FontAwesomeIcon icon={faMotorcycle} /> </a>
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
                <div className={adaptiveInlineFlex}>
                    <SpecialCard
                        img={greakSalad}
                        name='Greak Sald'
                        price='$0.11'
                        description='The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
                    />
                    <SpecialCard
                        img={lemonDessert}
                        name='Lemon Dessert'
                        price='$0.12'
                        description={'This comes straight from grandma\'s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'}
                    />
                    <SpecialCard
                        img={greakSalad}
                        name='Bruchetta'
                        price='$0.13'
                        description='Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. '
                    />
                </div>
            </div>
        </section>
    );
}

export default Specials;