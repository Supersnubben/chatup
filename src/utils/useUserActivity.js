import { useEffect } from 'react';
import { AppState } from 'react-native';
import { doc, setDoc } from 'firebase/firestore';
import { db, auth } from './firebase';

const updateUserLoggedInStatus = async (loggedIn) => {
  const user = auth.currentUser;
  if (user) {
    const userDocRef = doc(db, 'users', user.uid);
    await setDoc(userDocRef, { isLoggedIn: loggedIn }, { merge: true });
  }
};

const useUserActivity = () => {
  useEffect(() => {
    let timeoutId = null;

    const handleAppStateChange = (nextAppState) => {
      if (nextAppState === 'background') {
        clearTimeout(timeoutId);
        updateUserLoggedInStatus(false);
      } else {
        updateUserLoggedInStatus(true);

        timeoutId = setTimeout(() => {
          updateUserLoggedInStatus(false);
        }, 15 * 60 * 1000); // 15 minutes in milliseconds
      }
    };

    AppState.addEventListener('change', handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
      clearTimeout(timeoutId);
    };
  }, []);
};

export default useUserActivity;
