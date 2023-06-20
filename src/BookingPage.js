import { useEffect, useState } from 'react';
import { adaptiveGrid, button, hoverLink, selfCenter } from './commonStyles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { fetchAPI, submitAPI } from './apis';

const labelClasses = 'block text-paragraph font-bold px-2';
const inputClasses = 'text-paragraph bg-white rounded-2xl px-4 py-1 hover:shadow-xl';
const selectClasses = inputClasses + ' border-r-[1rem] border-white';

function BookingPage() {
    const [availableTimes, updateTimes] = useState([]);
    const formik = useFormik({
        initialValues: {
            date: '',
            time: '',
            guests: 1,
            occasion: 'Birthday'
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: Yup.object({
            date: Yup.date().required(),
            time: Yup.string().required(),
            guests: Yup.number().min(1).max(10).required(),
            occasion: Yup.string().oneOf(['Birthday', 'Anniversary']),
        }),
    });

    useEffect(() => {
        const currentDate = new Date();
        updateTimes(fetchAPI(currentDate));
        formik.setFieldValue('date', currentDate.toISOString().slice(0, 10));
        formik.setFieldValue('time', availableTimes ? availableTimes[0] : 'empty');
    }, []);


    const onDateChange = (event) => {
        updateTimes(fetchAPI(new Date(event.target.value)));
        formik.handleChange(event);
    };

    return (
        <section className={adaptiveGrid + ' mb-8'}>
            <div className={selfCenter + ' xl:justify-self-stretch xl:col-start-3 xl:col-end-11 flex flex-wrap justify-center xl:justify-between items-start gap-4'}>
                <div className={'flex flex-col items-start w-[16rem]'}>
                    <h2 className='text-card-title m-auto'> Book a Table </h2>
                    <form
                        className={'self-stretch flex flex-col items-start gap-[20px] bg-h-l p-4 rounded-2xl box-border '}
                        onSubmit={formik.handleSubmit}
                    >
                        <div>
                            <label className={labelClasses} for='res-date'>Choose date</label>
                            <input className={inputClasses} type='date' id='res-date' name='date' {...formik.getFieldProps('date')} onChange={onDateChange} />
                        </div>
                        <div>
                            <label className={labelClasses} for='res-time'>Choose time</label>
                            <select className={selectClasses} id='res-time' name='time' {...formik.getFieldProps('time')}>
                                {availableTimes.map((t) => <option> {t} </option>)}
                            </select>
                        </div>
                        <div>
                            <label className={labelClasses} for='guests'>Number of guests</label>
                            <input className={inputClasses}
                                type='number' placeholder='1' min='1' max='10'
                                id='guests' name='guests'
                                {...formik.getFieldProps('guests')}
                            />
                        </div>
                        <div>
                            <label className={labelClasses} for='occasion'>Occasion</label>
                            <select className={selectClasses} id='occasion' name='occasion' {...formik.getFieldProps('occasion')}>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                        </div>
                        <input className={[button, hoverLink, 'self-center text-paragraph'].join(' ')} type='submit' value='Make Your reservation' />
                    </form>
                </div>
                <div className={'flex flex-col items-start w-[16rem]'}>
                    <h2 className='text-card-title m-auto'> Available Slots </h2>
                    <div className={'self-stretch flex flex-col items-start gap-[20px] bg-h-l p-4 rounded-2xl box-border '}>
                        <ul>
                            {availableTimes.map((t) => <li> {t} </li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BookingPage;