import { initializeApp } from 'firebase/app'
import  { getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB5genO9QSpgSjZaD6mnqgC737IiEr_qWk",
    projectId: "mascoteando-a663d",
    storageBucket: "mascoteando-a663d.appspot.com",
    messagingSenderId: "364933209715",
    appId: "1:364933209715:android:b5435ba5a8d2ed71ddd406",

}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }