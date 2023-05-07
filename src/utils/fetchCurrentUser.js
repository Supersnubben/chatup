import { doc, getDoc } from 'firebase/firestore';
import { db } from '../utils/firebase'

const fetchCurrentUser = async (userId) => {
  try {
    const userDoc = await getDoc(doc(db, 'users', userId));

    if (userDoc.exists()) {
      const userData = userDoc.data();
      return { id: userDoc.id, ...userData };
    } else {
      console.error(`User not found: ${userId}`);
      return null;
    }
  } catch (error) {
    console.error(`Error fetching user (${userId}):`, error);
  }
};

export default fetchCurrentUser;