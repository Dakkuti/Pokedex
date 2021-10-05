import { db } from '../firebase/firebaseConfig'

export const loadCard = async (uid) => {

    const cardStore = await db.collection(`${uid}/Card/Card`).get()
    const cardsList = [];

    cardStore.forEach(hijo=>{
        cardsList.push({
        id:hijo.id,
        ...hijo.data()
       })
    })
   
    return cardsList
}