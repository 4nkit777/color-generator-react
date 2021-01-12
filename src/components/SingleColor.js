import React, { useEffect, useState } from 'react';
import rgbToHex from '../util';

export default function SingleColor({ rgb, weight, index, hexColor }) {
    const [alert, setAlert] = useState(false);
    const bcg = rgb.join(',');
    const hex = rgbToHex(...rgb);

    const lightColor = (index > 10 ? 'text-light' : 'text-dark');

    useEffect(() => {
        let value = setTimeout(() => {
            setAlert(false);
        }, 3000);
        return () => clearTimeout(value);
    }, [alert])
    
    return (
        <article className={`${lightColor} d-flex flex-column p-4`} style={{ width: '20%', height: '20%', backgroundColor: `rgb(${bcg})`}} onClick={() => {
            setAlert(true);
            navigator.clipboard.writeText(hex);
            }}>
            <h5>{weight}%</h5>
            <p style={{ fontSize: '1.5rem'}}>{hex}</p>
            {alert && <p>copied to clipboard</p>} 
        </article>
    );
}