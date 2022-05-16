import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Service from './Service';
import { useQuery } from 'react-query';

const AvailableAppoinments = ({ date }) => {
    const [treatment, setTreatment] = useState(null)

    const formattedDate = format(date, 'PP');
    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h4 className='text-xl text-secondary text-center py-6'>Available Appointments on: {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
                refetch={refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppoinments;