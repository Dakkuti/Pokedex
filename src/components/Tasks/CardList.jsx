import React from 'react';
import { useSelector } from 'react-redux';
import { PokemonCard } from './PokemonCard';


export const MovieList = () => {

    
    const {cards} = useSelector(store => store.card);
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(ListarCard());
    }, [dispatch]);


    return (
        <div className="card-columns animate__animated animate__fadeIn">

             {
               (cards.length !== 0)?
               (
                cards.map((data, index)=> (
                    <PokemonCard
                          key={`${index}-${data.id}`} 
                         { ...data }
                     />
                    
                ))
               ):
               <p>No hay datos</p>
           } 
        </div>
    )
}