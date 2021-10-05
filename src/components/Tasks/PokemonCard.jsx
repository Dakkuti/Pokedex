import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeCard, Delete, ListarCard } from '../../actions/taskAction';
import styled from 'styled-components';

const Title = styled.h2`

  color: #ffffff;
  background: #be83ffa6;
  padding: 10px;
  text-align: center;
  border-radius: 20px;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  margin: 0px auto;
  margin-top: 40px;

  `;

export const PokemonCard = () => {

    const { card } = useSelector(state => state.card)

    const { uid } = useSelector(state => state.auth)

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(ListarCard(uid));
    }, [dispatch]);

    const { name } = useSelector(state => state.auth)

    const handleEdit = (data) => {
        dispatch(activeCard(data.id, data))
    }

    const handleDelete = (id) => {
        dispatch(Delete(id))
    }

    return (
        <>
            <Title>Tus pokemons Favoritos</Title>

            <div className="container pokemon">
                {
                    (card.length !== 0) ?
                        card.map(data => (
                            <div className="col-md-4 ms-5 citas" key={data.id}>
                                <div className="card mb-1">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between">
                                                <img src={data.image} alt={data.nombre} className="img-pokemon" />
                                        </div>
                                        <p><strong>Creado por :</strong> {name}</p>
                                        <p><strong>Nombre:</strong> {data.nombre}</p>
                                        <p><strong>Tipo:</strong> {data.tipo}</p>
                                        <p><strong>Habilidad:</strong> {data.Habilidad}</p>

                                        <button className="btn btn-warning" onClick={()=>handleEdit(data)}>Editar</button>

                                        <button className="btn btn-danger" onClick={() => handleDelete(data.id)}>Eliminar</button>

                                    </div>
                                </div>

                            </div>
                        )) :
                        <div >
                            <h1>No hay Pokémones</h1>
                        </div>




                }
            </div>
        </>
    );
};
