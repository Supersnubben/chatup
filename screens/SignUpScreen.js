import React, { useState } from 'react';
import { ToastAndroid, Image, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { StyleSheet, Text, View } from 'react-native';
import styles from '../styles/styles.js';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db } from '../firebase.js';
import { collection, addDoc } from "firebase/firestore";
import * as FileSystem from 'expo-file-system';
import mime from 'react-native-mime-types';



const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [image, setImage] = useState(null);

const encodeImage = async (image) => {
  try {
    const fileExtension = image.uri.split('.').pop();
    const mimeType = mime.lookup(fileExtension) || 'image/png';

    // Read the image file as base64
    const base64Image = await FileSystem.readAsStringAsync(image.uri, {
      encoding: FileSystem.EncodingType.Base64,
    });

    const base64WithMimeType = `data:${mimeType};base64,${base64Image}`;

    console.log('Base64-encoded image:', base64WithMimeType);
    return base64WithMimeType;
  } catch (error) {
    console.error('Error encoding image to base64:', error);
  }
};


  const handleSignUp = () => {
    if (!name || !email || !password || !confirmPassword) {
      ToastAndroid.show('Please fill all fields.', ToastAndroid.SHORT);
      return;
    }
  
    if (!validateEmail(email)) {
      ToastAndroid.show('Please enter a valid email address.', ToastAndroid.SHORT);
      return;
    }
  
    if (password !== confirmPassword) {
      ToastAndroid.show('Passwords do not match.', ToastAndroid.SHORT);
      return;
    }
  
    if (!image) {
      ToastAndroid.show('Please select a profile picture.', ToastAndroid.SHORT);
      return;
    }
  
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in 
        const user = userCredential.user;
  
        // Encode image to base64
        const base64Image = await encodeImage(image);
  
        // Add user to Firestore
        await addDoc(collection(db, 'users'), {
          uid: user.uid,
          name: name,
          email: email,
          image: base64Image
        });
  
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setImage(null);
  
        ToastAndroid.show('User registered successfully.', ToastAndroid.SHORT);
  
        navigation.navigate('HomeScreen');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        console.log(errorCode, errorMessage);
        ToastAndroid.show(errorMessage, ToastAndroid.SHORT);
      });
  };

  const validateEmail = (email) => {
    // regex pattern for email validation
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const handleBackButton = () => {
    navigation.goBack();
  };

  const handleSelectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });
  
    if (!result.canceled) {
      setImage({ uri: result.assets[0].uri, mimeType: result.assets[0].mimeType || 'image/png' });
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.shellContainer}
      behavior='padding'>
      <TouchableOpacity onPress={handleBackButton}>
        <Image
          style={styles.backButton} source={require('../images/backbutton.png')} />
      </TouchableOpacity>
      <View style={styles.outerContainer}>
        <TouchableOpacity onPress={handleSelectImage}>
          {image ? (
            <Image style={styles.profileImage} source={{ uri: image.uri }} />
          ) : (
            <View style={styles.addImage}>
              <Text style={{ color: '#87888c' }}>Add image</Text>
            </View>
          )}
        </TouchableOpacity>
        <View style={styles.innerContainer}>
          <TextInput
            style={styles.textInput}
            placeholder='Enter full name'
            placeholderTextColor={'#87888c'}
            value={name}
            onChangeText={text => setName(text)} />
          <TextInput
            style={styles.textInput}
            placeholder='Enter email'
            placeholderTextColor={'#87888c'}
            value={email}
            onChangeText={text => setEmail(text)} />
          <TextInput
            style={styles.textInput}
            placeholder='Enter password'
            placeholderTextColor={'#87888c'}
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <TextInput
            style={styles.textInput}
            placeholder='Confirm password'
            placeholderTextColor={'#87888c'}
            secureTextEntry
            value={confirmPassword}
            onChangeText={text => setConfirmPassword(text)}
          />

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handleSignUp}>
            <View>
              <Text style={styles.buttonContainer}>Register account</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;