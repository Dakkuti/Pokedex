  
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CardNew, startUploading, Edit,clearCard} from '../../actions/taskAction';
import { useForm } from '../../hooks/useForm'



export const AddPokemon = () => {
    //dispatch para traer funciones asincronicas
    const dispatch = useDispatch();

    const { active } = useSelector(state => state.card);

    const [formValue, handleInputChange, reset] = useForm(active)
  
    const activeId = useRef(active.id)

    useEffect(() => {
        if (active.id !== activeId.current) {
        reset(active)
        }
        activeId.current = active.id
    }, [active])


    //desectructuro
    const {nombre , tipo , description , experiencia } = formValue;

    //Metodo para agregar una pelicula nueva

    const handleNewCard = (e) => {
        e.preventDefault();
    
        if (active.nombre == "") {
          dispatch(CardNew(formValue))
          reset()
        } else if(active.id !== ""){
          dispatch(Edit(formValue))
        }
        dispatch(clearCard())
      }

    //Metodo para agregar mi imagen
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        console.log(file)
        if (file) {
          dispatch(startUploading(file))
        }
      }

    return (

        <div>
            <h1 id="title-addMovies">Agrega un Pokémon </h1>
            <form onSubmit={handleNewCard} id="form-addMovie"> 

                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input  type="text" name="nombre" value={nombre} onChange={handleInputChange}/>
                
                <label htmlFor="tipo" className="form-label">Tipo</label>
                <input  type="text" name="tipo" value={tipo} onChange={handleInputChange}/>
                
                <input id="fileSelector" type="file" name="file" onChange={handleFileChange}/>
                
                <label htmlFor="description" className="form-label">Descripcion</label>
                <input  type="text" name="description" value={description} onChange={handleInputChange}/>

                <label htmlFor="experiencia" className="form-label">Experiencia</label>
                <input  type="text" name="experiencia" value={experiencia} onChange={handleInputChange}/>
                
                <button type="submit" className="btn btn-primary mt-2">Agregar</button>
            </form>

        </div>
    
    )
}
