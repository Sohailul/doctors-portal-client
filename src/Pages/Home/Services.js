import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const services =[
        {
            _id: 1,
            title: "Fluoride Treatment",
            img: fluoride,
            description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            _id: 2,
            title: "Cavity Filling",
            img: cavity,
            description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            _id: 3,
            title: "Teeth Whitening",
            img: whitening,
            description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        }
    ]
    return (
        <div className='my-28'>
            <div className='text-center my-12'>
                <h4 className='text-2xl font-bold text-primary'>Our Services</h4>
                <h2 className='text-4xl font-bold'>Services we provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service=><Service 
                        key={service._id}
                        service={service}
                        >
                        </Service>)
                }
            </div>
        </div>
    );
};

export default Services;