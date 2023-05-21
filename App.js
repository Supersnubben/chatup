import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation';
import { AppState, AppStateIOS, Platform } from 'react-native';

export default function App() {
  const [appState, setAppState] = useState(AppState.currentState);

  const handleAppStateChange = (nextAppState) => {
    setAppState(nextAppState);
  };

  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange);

    if (Platform.OS === 'ios') {
      AppStateIOS.addEventListener('change', handleAppStateChange);
    }

    return () => {
      AppState.removeEventListener('change', handleAppStateChange);

      if (Platform.OS === 'ios') {
        AppStateIOS.removeEventListener('change', handleAppStateChange);
      }
    };
  }, []);
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
  }