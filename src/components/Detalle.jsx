import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import {Stats} from '../components/detalles/Stats'
import styled from 'styled-components';




const Container = styled.div`
background: #f2fcff;
    border: 5px solid #b2ffa7;
    padding: 20px;
    width: fit-content;
    margin: 0px auto;

`;



const Profile = styled.div`
display: flex;
flex-direction: column;
align-items: center;

img{
  width: 165px;
  image-rendering: pixelated;
  margin-top: -45px;
}

.Details-profile__title{
  display: flex;

}
.Details-profile__types{
  display: flex;
  margin-top: -3%;

}

.Details-profile__title h1
{
  font-family: 'Press Start 2P',cursive;
  font-size: 1.8rem;
  margin-top: -5px;
  margin-bottom: 30px;
}

.Details-profile__experience
{
  display: flex;
  border: 3px solid #bcffc6;
  border-radius: 5px;
  padding: 5px;
  margin-top: 5px;
}




`;
const Abilities = styled.div`
h3{
  text-align:center;
}

p{
  margin-left: 50px;
}
img{
  width: 90px;
  position: absolute;
  top: 86%;
  left: 54%;
}
`;


export const Detalle = () => {

    const {id} = useParams();

    const [pokemonDetails, setPokemonDetails] = useState([]);

    console.log(pokemonDetails)
    const getPokemonData = async (id) => {

        const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await resp.data;
        setPokemonDetails(data);
        
        return data;
    };

    
    useEffect(() => {
        getPokemonData(id);
   
    }, [id]);


    //console.log(id);
    return (
      <div className="contenedorDetails">
        <Container className="Container-Details">
          <Profile className="Details-profile">

          <div className="Details-profile__title">
            <h1>{pokemonDetails.name}&nbsp;</h1>
            <h1>#{id}</h1>
          </div>

          <img src={pokemonDetails?.sprites?.front_default} alt={pokemonDetails.name}/>

          <div className="Details-profile__types">
            <h3>{pokemonDetails?.types?.[0]?.type?.name}&nbsp; </h3>
            <h3>{pokemonDetails?.types?.[1]?.type?.name}</h3>
          </div>


          <div className="Details-profile__experience">
            <p><strong>Height:</strong> {pokemonDetails.height} &nbsp;</p>
            <p><strong>Weight:</strong> {pokemonDetails.weight} &nbsp;</p>
            <p><strong>Experience:</strong> {pokemonDetails.base_experience}</p>
          </div>
          </Profile>
          <h4 style={{textAlign: "center"}}>Base Stats</h4>

          <Stats prop={pokemonDetails}/>
          
          
      <Abilities>
          <h3>Abilities</h3>
          <p>{pokemonDetails?.abilities?.[0]?.ability?.name}</p>
          <p>{pokemonDetails?.abilities?.[1]?.ability?.name}</p>

          <img src="https://cdn.dribbble.com/users/1771704/screenshots/6124573/pokeball-800x600.gif" alt="pokeball"/>
      </Abilities>
        
        </Container>
        </div>
      );

}
