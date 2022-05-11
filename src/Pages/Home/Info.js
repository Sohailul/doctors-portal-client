import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
    const openingHours = <>
    <p>Lorem Ipsum is simply dummy text of the pri</p>
    </>
    const location = <>
    <p>Brooklyn, NY 10036, United States</p>
    </>

    const contact = <>
    <p>+000 123 456789</p>
    </>
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard cardTitle="Opening hours" bgClass="bg-gradient-to-r from-secondary to-primary" info={openingHours} img={clock}></InfoCard>
            <InfoCard cardTitle="Visit our location" bgClass="bg-[#3d4451]" info={location} img={marker}></InfoCard>
            <InfoCard cardTitle="Contact us now" bgClass="bg-gradient-to-r from-secondary to-primary" info={contact} img={phone}></InfoCard>
        </div>
    );
};

export default Info;