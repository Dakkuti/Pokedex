import React from 'react';
import { useSelector } from 'react-redux';
import { PokemonCard } from './PokemonCard';


export const MovieList = () => {

    
    const {cards} = useSelector(store => store.card);


    return (
        <div className="card-columns animate__animated animate__fadeIn">

             {
                (cards)?
                        (
                            cards.map( item => (
                                <PokemonCard 
                                     key={ item.id }
                                     { ...item }
                                 />
                                
                            ))
                        ):
                           <p>No hay datos</p>
           } 
        </div>
    )
}