import { useState } from 'react';
import { adaptiveGrid, adaptiveInlineFlex } from './commonStyles';
import BookingForm from './BookingForm';

function BookingPageCard({ title, children }) {
    return (
        <div className={'flex flex-col items-start w-[20rem]'}>
            <h2 className='text-card-title m-auto'> {title} </h2>
            {children}
        </div>
    )
}

function BookingPage() {
    const [availableTimes, updateTimes] = useState([]);

    return (
        <section className={adaptiveGrid + ' mb-8'}>
            <div className={adaptiveInlineFlex}>
                <BookingPageCard title='Available Slots'>
                    <div className={'self-stretch flex flex-col items-start gap-[20px] bg-h-l p-4 rounded-2xl box-border '}>
                        <ul> {availableTimes.map((t) => <li> {t} </li>)} </ul>
                    </div>
                </BookingPageCard>
                <BookingPageCard title='Book a Table'>
                    <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
                </BookingPageCard>
            </div>
        </section>
    );
}

export default BookingPage;