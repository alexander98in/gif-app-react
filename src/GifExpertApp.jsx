import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = () => {
        setCategories([ 'Valorant', ...categories ]);
        //setCategories( cat => [...cat, 'Valorant']);
    }
    return (
        <>
            <h1>Gif Expert App</h1>

            {/* Input */}
            <AddCategory/>
            <button onClick={ onAddCategory }>Agregar</button>
            <ol>
                {
                    categories.map( category => {
                        return <li key={ category }>{ category }</li>
                    })
                }
            </ol>
        </>
    )
}
