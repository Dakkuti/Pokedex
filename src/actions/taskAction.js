import Swal from 'sweetalert2'
import { fileUpload } from '../helpers/fileUpload'
import { db } from '../firebase/firebaseConfig'
import {types} from '../types/types'
import { loadCard} from '../helpers/loadCard'


//CREO UN ARRAY PARA ALMACENAR LA IMAGEN
let fileUrl=[]

export const CardNew = (card) => {

    return async (dispatch, getSate) => {
        const uid = getSate().auth.uid

        const newCard = {
            nombre: card.nombre,
            tipo: card.tipo,
            image: fileUrl,
            Habilidad: card.Habilidad
       }
       //AGREGO A MI COLECCION FIREBASE


    const docRef = await db.collection(`${uid}/Card/Card`).add(newCard)
    dispatch(addNewCard(docRef.id, newCard))

    }
}

export const addNewCard = (id,card) => ({
    type: types.cardAddNew,
    payload: {
        id,...card
    }
})




export const Edit = (card) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        
        if (!card.url) {
            delete card.url;
        }
        const EditCard = {
            id:card.id,
            nombre: card.nombre,
            tipo: card.tipo,
            image: fileUrl,
            Habilidad: card.Habilidad
           
        }

        const cardFire = { ...EditCard  }
       // delete cardFire.id

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait ...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading()
            }
        })

        await db.doc(`${uid}/Card/Card/${card.id}`).update(EditCard)
           console.log(EditCard)

        Swal.fire('Saved', card.nombre, 'success');
        dispatch(ListarCard(uid))
    }
}

export const Delete = (id) => {
    return async (dispatch, getState) => {

        const uid = getState().auth.uid;

        await db.doc(`${uid}/Card/Card/${id}`).delete();

        dispatch(deleteCard(id));
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Delete',
            showConfirmButton: false,
            timer: 1500
          })
          dispatch(ListarCard(uid))
    }
}


//METODO PARA LAS ALERTAS SON SWAL
export const startUploading = (file) => {
    return async (dispatch) => {

        Swal.fire({
            title: 'Uploading...',
            text: 'Cargando imagen ...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading()
            }
        })

        fileUrl = await fileUpload(file)//CARGO MI IMAGEN
        //console.log(fileUrl)
        Swal.close()
       return fileUrl
    }
}

//FUNCIÓNES SINCRÓNICAS

export const ListarCard = (uid) => {
    return async (dispatch) =>{
        const cards =  await loadCard(uid)
        dispatch(setCards(cards))
    }
}

export const setCards = (cards) => {
    return {
        type: types.cardLoad,
        payload: cards
    }
}

export const activeCard = (id,card) => {
    return{
        type:types.cardActive,
        payload:{
            id,
            ...card
        }
    }
}

export const clearCard = () => {
    return {
        type: types.cardLogoutClean
    }
}

export const deleteCard = (id) => ({
    type: types.cardDelete,
    payload: id
});
