import { initializeApp } from "firebase/app";
import { 
  getFirestore, 
  doc, 
  getDoc, 
  query, 
  addDoc,
  where, 
  collection,
  Timestamp,
  getDocs 
} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_apiKey,
  authDomain: process.env.REACT_APP_FIREBASE_authDomain,
  projectId: process.env.REACT_APP_FIREBASE_projectId,
  storageBucket: process.env.REACT_APP_FIREBASE_storageBucket,
  messagingSenderId: process.env.REACT_APP_FIREBASE_messagingSenderId,
  appId: process.env.REACT_APP_FIREBASE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);

export default firestoreDB;

export async function getAllItems() {
  const miColec = collection(firestoreDB, 'products')
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

export async function createBuyOrder(orderData){
  
  const buyTimestamp = Timestamp.now();
  const orderWithDate = {
    ...orderData, 
    date: buyTimestamp
  };

  const miColec = collection(firestoreDB, "buyOrders");
  const orderDoc = await addDoc(miColec, orderWithDate);
  
  function modal (){
    let content = document.getElementById('content');
    let checkoutContainer = document.querySelector('.checkoutFormContainer');
    checkoutContainer.style.display = 'none';
    return(
      content.innerHTML = `<div>Gracias por tu compra su ID es: <strong>${orderDoc.id}</strong>.</div>`
    )
  }
  modal();
}