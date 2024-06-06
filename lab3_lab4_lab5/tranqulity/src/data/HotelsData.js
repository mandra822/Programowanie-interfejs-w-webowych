import {
  addDoc,
  collection,
  query,
  where,
  serverTimestamp,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";
import { firestore, auth } from "../init";

export const createHotel = async (hotel) => {
  if (!auth.currentUser) return;

  try {
    const docRef = await addDoc(collection(firestore, "hotels"), {
      ...hotel,
      userId: auth.currentUser.uid,
      createdAt: serverTimestamp(),
    });
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getHotels = async () => {
  const hotels = [];

  const hotelsCollection = collection(firestore, "hotels");
  const q = query(hotelsCollection);
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    hotels.push({ id: doc.id, ...doc.data() });
  });
  return hotels;
};

export const getHotelById = async (id) => {
  try {
    const docRef = doc(firestore, "hotels", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error getting document:", error);
  }
};
