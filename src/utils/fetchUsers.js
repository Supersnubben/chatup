import { collection, getDocs } from 'firebase/firestore'
import { db } from '../utils/firebase'

const fetchUsers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const usersObj = {};
  
      querySnapshot.forEach((doc) => {
        const userData = doc.data();
        usersObj[doc.id] = userData;
      });
  
      return usersObj;
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  export default fetchUsers