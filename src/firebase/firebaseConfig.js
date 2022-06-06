// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, query, where, collection, getDocs } from 'firebase/firestore/lite'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWno7SsJVi2LMXdyOhNxHjqNJikAnUD6k",
  authDomain: "amba-store.firebaseapp.com",
  projectId: "amba-store",
  storageBucket: "amba-store.appspot.com",
  messagingSenderId: "227916881924",
  appId: "1:227916881924:web:5cb7bd9aeb8b55be63d551"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);

export default firestoreDB;

export async function getAllItems() {
  const miColec = collection(firestoreDB, 'products')
  // getDocs(miColec).then(result => console.log(result))
  const productosSnap = await getDocs(miColec);
  
  return productosSnap.docs.map(doc => {
    return {
      ...doc.data(),
      id: doc.id
    }
  });
}

// obtener todos los items de una categoria
export async function getItemsByCategory(categoryId){
  const miColec = collection(firestoreDB, 'products');
  const queryProduct = query(miColec, where("categoria", "==", categoryId));

  const productosSnap = await getDocs(queryProduct)
  
  return productosSnap.docs.map(doc => {
    return {
      ...doc.data(),
      id: doc.id
    }
  });
}

// obtener un solo item segun ID para pasar a Item Detail
export async function getItem(id){
  const miColec = collection(firestoreDB, 'products');
  const productRef = doc(miColec, id);
  const productoSnap = await getDoc(productRef);

  return {
    ...productoSnap.data(),
    id: productoSnap.id
  }
}