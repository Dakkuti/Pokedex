import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import img from '../assets/3337437.png';

import { Navbar } from "./Navbar";

const Index = () => {

    const [pokemon, setPokemon] = useState([]);
    const [pokemonList, setPokemonList] = useState([]);
    const [ setSearch] = useState('');

    //consumo la api desde una promesa normal
    const obtenerPokemons = async () => {
        const url = `https://pokeapi.co/api/v2/pokemon/?limit=26`;
        const resp = await axios.get(url);
        const data = await resp.data;
        return data;
    };

    // obtener la informacion especifica de un pokemon por su url
    const obtenerDataPokemons = async (url) => {
        const resp = await axios.get(url);
        const data = await resp.data;
        return data;
    };

    //obtengo los datos de la api para asi mostrarlo
    const obtenerDatos = async () => {

        const data = await obtenerPokemons();

        //creo una promesa para filtrar la api por su url e itero
        const promises = data.results.map(async (pokemons) => {
            return await obtenerDataPokemons(pokemons.url)//paso la url a la funcion
        })

        //hago un Promise que me devolvera toda la consulta de las url
        const resp = await Promise.all(promises)
        //console.log(resp);
        setPokemon(resp)
        setPokemonList(resp);

    }

    useEffect(() => {
        obtenerPokemons();
        obtenerDatos();
        // eslint-disable-next-line
    }, []);


    const handleChange = (e) => {
        setSearch(e.target.value);
        filtrar(e.target.value);
    }

    const filtrar=(item)=>{

        let resultSearch = pokemonList.filter((elemento)=>{

          if(elemento.name.toString().toLowerCase().includes(item.toLowerCase())){
            return elemento;
          
          }
          return resultSearch;
        });
        if(resultSearch)
        {
            setPokemon(resultSearch);
        }else{
            console.log('no hay pokemones')
        }
        
    }


    

    return (
        <div>
            <Navbar/>
            <div className="container--pokemones">
                <h1 className="container--title">Pokémones</h1>

                <div className="input-group rounded">
                    <input
                        type="search"
                        className="form-control rounded"
                        placeholder="Busca un pokémon..."
                        aria-label="Search"
                        aria-describedby="search-addon"
                        onChange={handleChange}

                    />

                </div>
            </div>

            {  
            (pokemon.length !== 0) ?
                pokemon.map(pokemon => {
                    return (

                        <ul className="cards" key={pokemon.name} poke={pokemon}>
                            <li>
                                <Link to={`/Detalle/${pokemon.id}`} ><img src={pokemon.sprites.front_default} alt={pokemon.name} /></Link>
                                
                                <p className="card-text" >{pokemon.name}</p>
                            </li>
                        </ul>



                    )

                }) :
                <div className="notfound">
                    <h2>Error</h2>
                 <img src={img} alt="pokemon-notfound"/>

                </div>

            }





        </div>
    )
}
export default Index;