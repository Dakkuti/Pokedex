import { firebase, googleAuthProvider,facebookAuthProvider} from '../firebase/firebaseConfig';
import { types } from '../types/types';
import { fileUpload } from '../helpers/fileUpload'
import { startLoading, finishLoading } from './uiError';
import Swal from 'sweetalert2'

let fileUrl=[]
//siempre tenemos un tipo y una accion y esas acciones se la pasamos al payload
export const login = (uid, displayName) => ({
    type: types.login,
    payload: {uid,displayName}
});


export const startLogout = () => {
    return async( dispatch ) => {
        await firebase.auth().signOut();
        dispatch( logout() );
    }
}


export const logout = () => ({
    type: types.logout
})

//FUNCIONES ASINCRONICA PARA HACER PROMESAS 
export const startGoogleLogin = () => {
    return (dispatch) => {

        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                dispatch(startLoading())
                dispatch(login(user.uid, user.displayName));
            });

    }
}//fin startgoogle
export const startFacebookLogin = () => {
    return (dispatch) => {

        firebase.auth().signInWithPopup(facebookAuthProvider)
            .then(({ user }) => {
                dispatch(startLoading())
                dispatch(login(user.uid, user.displayName));
            });

    }
}//fin startfb

export const startLoginEmailPassword = (email, password) => {
    return async (dispatch) => {
        return firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(startLoading())
                dispatch(login(user.uid, user.displayName));
            })
            .catch(e => {
                console.log(e);
                dispatch(finishLoading)
            })
    }
}


export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {

                await user.updateProfile({ displayName: name });

                dispatch(
                    login(user.uid, user.displayName)
                );
                console.log(user)
                Swal.fire({
                    position: 'top-end',
                    text: 'Usuario Creaso',
                    icon: 'success',
                    title:  user.displayName,
                    showConfirmButton: false,
                    timer: 1500
                  })
            })
            .catch(e => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: e,
                    footer: ''
                  })

            })

    }
}

export const startUploading = (file) => {
    return async (dispatch) => {

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait ...',
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
