import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppoinments from './AvailableAppoinments';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div className='max-w-7xl mx-auto px-10'>
            <AppointmentBanner date={date} setDate={setDate} />
            <AvailableAppoinments date={date} />
            <Footer />
        </div>
    );
};

export default Appointment;
