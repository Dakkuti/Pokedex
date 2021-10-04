import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { activeCard, Delete} from '../../actions/taskAction';

export const PokemonCard = ({card}) => {

    const dispatch = useDispatch()
    const { name } = useSelector(state => state.auth)

    const handleEdit = (data) => {
        dispatch(activeCard(data.id, data))
    }

    const handleDelete = (id) => {
        dispatch(Delete(id))
    }
    return (
        <div className=" row ">
            {
                card.map(data =>(
                    <div className="col-md-4 text-center py-1 container" key={data.id}>
                    <div className="card mt-2 container text-center">
                        <div className="card-title text-center container">
                            <h3>{data?.nombre}</h3>
                            <img className="text-center container" src={data.image} alt={data.nombre} id="img-Moviecard"/>
                            <span className="badge badge-pill bg-danger ml-2">
                               
                            </span>
    
                        </div>
    
                        <div className="card-body">
    
                            <p id="desc-moviesCard">{data.description}</p>
                            <p id="desc-moviesCard">{data.type}&nbsp; {data?.experiencia}</p>
                            <p id="desc-moviesCard">{name}</p>
                            <div className="card-footer text-center" >
    
                            <button
                                className="btn btn-warning"
                                onClick={()=>handleEdit(data)}
                            >
                                Edit
                            </button>
    
                            <button
                                className="btn btn-danger"
                                onClick={()=>handleDelete(data.id)}
                            >
                                Delete
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
                ))
            }
           
        </div>
    )
}
