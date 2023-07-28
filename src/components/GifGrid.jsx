import React from 'react';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

    console.log( getGifs(category) );

    return (
        <>
            <h3>{category}</h3>
            <p>Hola mundo</p>
        </>
    )
}
