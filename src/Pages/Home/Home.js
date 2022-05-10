import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';
import Treatment from './Treatment';

const Home = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto px-10'>
            <Banner />
            <Info />
            <Services/>
            <Treatment/>
            </div>
            <MakeAppointment/>
            <div className='max-w-7xl mx-auto px-10'>
            <Testimonials/>
            </div>
            <Contact/>
        </div>
    );
};

export default Home;