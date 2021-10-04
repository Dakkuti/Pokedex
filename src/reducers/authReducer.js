import {types} from "../types/types";

//inicializo un estado de autenticacion id, name, o pass
const initialState = {
    auth:{}
}
//funcion pura devuelve algo siempre por defecto
export const authReducer = (state = initialState, action) =>{

    switch(action.type) {
        case types.login:
            return{
                uid: action.payload.uid,
                name: action.payload.displayName
                }
        case types.logout:
            return {};
            
        default:
            return state;
    }
}