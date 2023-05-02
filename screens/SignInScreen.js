import { ToastAndroid, Image, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native'
import styles from '../styles/styles.js'
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.js';

const SignInScreen = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in successfully
        const user = userCredential.user;
        navigation.navigate('HomeScreen');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // Show error message
        if (errorCode === 'auth/user-not-found') {
          ToastAndroid.show('User not found. Please register.', ToastAndroid.SHORT);
        }
        else if (errorCode === 'auth/wrong-password') {
          ToastAndroid.show('Incorrect password. Please try again.', ToastAndroid.SHORT);
        }
        else if (errorCode === 'auth/invalid-email') {
          ToastAndroid.show('Invalid email format. Please try again.', ToastAndroid.SHORT);
        }
        else {
          ToastAndroid.show(errorMessage, ToastAndroid.SHORT);
        }
      });
  };

  const handlePress = () => {
    navigation.navigate('SignUpScreen');
  };


  return (
    <KeyboardAvoidingView
      style={styles.shellContainer}
      behavior='padding'>
      <View style={styles.outerContainer}>
        <Image
          style={styles.logo}
          source={require('/home/robin/repos/chatup/images/logo.png')} />
        <View>
          <Text style={styles.text}>Login to continue</Text>
        </View>
        <View style={styles.innerContainer}>
          <TextInput
            style={styles.textInput}
            placeholder='Enter email adress'
            placeholderTextColor={'#87888c'}
            value={email}
            onChangeText={text => setEmail(text)} />
          <TextInput
            style={styles.textInput}
            placeholder='Enter password'
            placeholderTextColor={'#87888c'}
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)} />
          <TouchableOpacity onPress={handleSignIn} style={styles.buttonContainer}>
            <View>
              <Text style={styles.buttonContainer}>Sign in</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={handlePress}>
            <Text style={styles.text}>Create a new account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default SignInScreen