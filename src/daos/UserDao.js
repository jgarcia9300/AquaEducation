import { collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import { deleteUser } from "firebase/auth";

//esta clase es la encargada de realizar las operaciones de acceso a datos de los usuarios
class UserDao {
    constructor() {
        this.collection = collection(db, "users"); 
    }

    async getuserById(id) {
        await getDoc(doc(this.collection, id))
        .then((userDoc) => {
                if (userDoc.exists()) {
                    return {success: true, data: userDoc.data()};
                } else {
                    return {success: false, data: null};
                }
            })
            .catch((error) => {
                console.error("Error getting document:", error);
            });
    }

    
    async createUser(UserData) {
        await addDoc (this.collectionRef, UserData)
        .then((docRef) => {
           console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        })};

    async updateUser(id, userData) {
        const userRef = doc(this.collectionRef, userData);
        await updateDoc(userRef, userData)
        .then(console.log("Document successfully Updated!"))
        .catch((error) => {
            console.error("Error updating document: ", error);
        });
    }

    async deleteUser(id) {
        await deleteUser(doc(this.collectionRef, id))
        .then(console.log("Document successfully deleted!"))
        .catch((error) => {
            console.error("Error deleting document: ", error);
        });
        
    

    }



    
}