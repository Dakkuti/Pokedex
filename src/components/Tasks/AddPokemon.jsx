  
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CardNew, startUploading, Edit,clearCard} from '../../actions/taskAction';
import { useForm } from '../../hooks/useForm'



export const AddPokemon = () => {
  const dispatch = useDispatch();

  const { active } = useSelector(state => state.card);

  const activeId = useRef(active.id)

  useEffect(() => {
      if (active.id !== activeId.current) {
      reset(active)
      }
      activeId.current = active.id
  }, [active])

  const [formValue, handleInputChange, reset] = useForm(active)

  //desectructuro
  const {nombre , tipo  , Habilidad } = formValue;

  //Metodo para agregar un pokemon 

  const handleNewCard= (e) => {
      e.preventDefault();
  
      if (active.nombre === "") {
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
                <input  type="text" name="nombre" value={nombre} onChange={handleInputChange} required/>
                
                <label htmlFor="tipo" className="form-label">Tipo</label>
                <input  type="text" name="tipo" value={tipo} onChange={handleInputChange} required/>
                
                <input id="fileSelector" type="file" name="file" onChange={handleFileChange} required/>

                <label htmlFor="Habilidad" className="form-label">Habilidad</label>
                <input  type="text" name="Habilidad" value={Habilidad} onChange={handleInputChange} required/>
                
                <button type="submit" className="btn btn-primary mt-2">Agregar</button>
            </form>

        </div>
    
    )
}
