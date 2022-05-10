import React from 'react';

const InfoCard = ({img, cardTitle, bgClass, info}) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl px-5 ${bgClass}`}>
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <p>{info}</p>
            </div>
        </div>
    );
};

export default InfoCard;