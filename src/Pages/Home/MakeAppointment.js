import React from 'react';
import doctor from '../../assets/images/doctor.png';
import PrimaryButton from '../Shared/PrimaryButton';
import appointment from '../../assets/images/appointment.png';

const MakeAppointment = () => {
    return (
        <section className='flex justify-center items-center mt-5 px-12' style={{backgroundImage: `url(${appointment})`}}>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 py-6'>
                <h3 className='text-xl text-primary'>Appointment</h3>
                <h2 className='text-3xl text-white mb-3'>Make an appointment Today</h2>
                <p className='text-white mb-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;