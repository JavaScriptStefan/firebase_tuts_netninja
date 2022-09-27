import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    getDocs
} from "firebase/firestore";

// My Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBKCDz6Qyru1zB7soth_KWtLUzlv6NONZs",
    authDomain: "fir-9-tutorial-1153b.firebaseapp.com",
    projectId: "fir-9-tutorial-1153b",
    storageBucket: "fir-9-tutorial-1153b.appspot.com",
    messagingSenderId: "800570909550",
    appId: "1:800570909550:web:3107051f3a44caae63577f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// get a handle/reference to the firestore db
const db = getFirestore(); //returns a firestore instance (which is a ref to our firestore db)

// get a reference to data collections in the db
const usersCollection = collection(db, "users");
const carsCollection = collection(db, "cars");

// fetch data from db collections
(async () => {
    const usersSnapshot = await getDocs(usersCollection);
    const carsSnapshot = await getDocs(carsCollection);

    usersSnapshot.forEach(user => {
        console.log(user.id, " => ", user.data().name);
        console.log({user});
    });

    carsSnapshot.forEach(car => {
    console.log(`Car ID: ${car.id} - Car Data - ${car.data().name}  ${car.data().model}  ${car.data().year}`);
    console.log({car});
    });
})();