import { getDoc, doc } from 'firebase/firestore';
import { db } from './firebase'

const getUserById = async (userId) => {
    try {
        const userDoc = await getDoc(doc(db, 'users', userId));
        if (userDoc.exists()) {
            return userDoc.data();
        } else {
            console.log('No such document!');
        }
    } catch (error) {
        console.error('Error getting document:', error);
    }
}

export default getUserById