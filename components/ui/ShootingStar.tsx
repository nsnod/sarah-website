import React, { useState, useEffect } from 'react';

const ShootingStar = () => {
    const [visible, setVisible] = useState(false);
    const [style, setStyle] = useState({});

    useEffect(() => {
        const shootStar = () => {
            setVisible(true);
            setStyle({
                top: `${Math.random() * 5}vh`,
                left: `${75 + Math.random() * 25}vw`
            });

            setTimeout(() => {
                setVisible(false);
            }, 2500);  
        };

        const interval = setInterval(shootStar, 10000);

        return () => clearInterval(interval);
    }, []);


    // lol i give up im just perma hiding the scrollbar while the stars are shooting
    useEffect(() => {
        if (visible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [visible]);

    return visible ? <div className="shooting-star" style={style}></div> : null;
};

export default ShootingStar;
