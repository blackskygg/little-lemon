import { adaptiveGrid, adaptiveInlineFlex } from "./commonStyles";
import greakSalad from './assets/greek salad.jpg';


function ReviewCard({ rating, name, img, text }) {
    return (
        <article className='w-40 rounded-2xl bg-h-l m-2 p-2'>
            <p className='text-lead'> {`Rating: ${rating}`} </p>
            <div className='flex justify-left items-center gap-4 my-4'>
                <img src={img} alt='review' className='box-border w-12 h-12'/>
                <p className='text-highlight'> { name } </p>
            </div>
            <p className='text-paragraph text-h-d'> {text} </p>
        </article>
    );
}

function UserReviews() {
    return (
        <section className='p-2 bg-1-d'>
            <h2 className='text-sub-title text-center margin-auto text-1-l'> Testimonials </h2>
            <div className={adaptiveGrid}>
                <div className={adaptiveInlineFlex}>
                    <ReviewCard
                        rating='4.5/5'
                        img={greakSalad}
                        name='User A'
                        text='Very very good.'
                    />
                    <ReviewCard
                        rating='4.5/5'
                        img={greakSalad}
                        name='User B'
                        text='Very very good.'
                    />
                    <ReviewCard
                        rating='4.5/5'
                        img={greakSalad}
                        name='User C'
                        text='Very very good.'
                    />
                </div>
            </div>
        </section>
    );
}

export default UserReviews;