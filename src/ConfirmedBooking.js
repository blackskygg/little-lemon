import { Link } from "react-router-dom";
import { button } from "./commonStyles";

function ConfirmedBooking() {
    return (
        <section>
            <div className='bg-h-l p-4 mb-8 rounded-2xl box-border w-60 mx-auto'>
                <p className='text-center text-lead mx-auto mb-4 box-border w-full'> Reservation confirmed! </p>
                <Link role='button' className={button + ' block mx-auto w-16'} to='/'> OK! </Link>
            </div>
        </section>
    );
}

export default ConfirmedBooking;