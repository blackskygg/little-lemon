import { useFormik } from 'formik';
import { useEffect } from 'react';
import { button, hoverLink } from './commonStyles';
import * as Yup from 'yup';
import { fetchAPI, submitAPI } from './apis';
import { useNavigate } from 'react-router-dom';

const formClasses = 'self-stretch flex flex-col items-start gap-[20px] bg-h-l p-4 rounded-2xl box-border';
const labelClasses = 'block text-paragraph font-bold px-2';
const inputClasses = 'text-paragraph bg-white rounded-2xl px-4 py-1 hover:shadow-xl';
const selectClasses = inputClasses + ' border-r-[1rem] border-white';

function BookingForm({ availableTimes, updateTimes }) {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            date: '',
            time: '',
            guests: 1,
            occasion: 'Birthday'
        },
        onSubmit: (values) => {
            if (submitAPI(values)) {
                navigate('/confirmed')
            }
        },
        validationSchema: Yup.object({
            date: Yup.date().required(),
            guests: Yup.number().min(1).max(10).required(),
            occasion: Yup.string().oneOf(['Birthday', 'Anniversary']),
        }),
    });
    const onDateChange = (event) => {
        updateTimes(fetchAPI(new Date(event.target.value)));
        formik.handleChange(event);
    };

    useEffect(() => {
        const currentDate = new Date();
        updateTimes(fetchAPI(currentDate));
        formik.setFieldValue('date', currentDate.toISOString().slice(0, 10));
        formik.setFieldValue('time', availableTimes ? availableTimes[0] : 'empty');
    }, []);


    return (
        <form className={formClasses} onSubmit={formik.handleSubmit}>
            <div>
                <label className={labelClasses} htmlFor='res-date'>Choose date</label>
                <input className={inputClasses} type='date' id='res-date' name='date' {...formik.getFieldProps('date')} onChange={onDateChange} />
            </div>
            <div>
                <label className={labelClasses} htmlFor='res-time'>Choose time</label>
                <select className={selectClasses} id='res-time' name='time' {...formik.getFieldProps('time')}>
                    {availableTimes.map((t) => <option> {t} </option>)}
                </select>
            </div>
            <div>
                <label className={labelClasses} htmlFor='guests'>Number of guests</label>
                <input className={inputClasses}
                    type='number' placeholder='1' min='1' max='10'
                    id='guests' name='guests'
                    {...formik.getFieldProps('guests')}
                />
            </div>
            <div>
                <label className={labelClasses} htmlFor='occasion'>Occasion</label>
                <select className={selectClasses} id='occasion' name='occasion' {...formik.getFieldProps('occasion')}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
            </div>
            <input className={[button, hoverLink, 'self-center text-paragraph'].join(' ')} type='submit' value='Confirm' />
        </form>
    );
}

export default BookingForm;