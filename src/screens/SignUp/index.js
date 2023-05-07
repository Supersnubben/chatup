import React, { useState } from 'react';
import { ToastAndroid, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Text, View } from 'react-native';
import styles from './styles';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../utils/firebase';
import { collection, doc, setDoc } from "firebase/firestore";
import { CustomButton, CustomTextInput, BackButton, BackButtonSecondary } from '../../components/common';
import themes from '../../utils/themes'
import encodeImage from '../../utils/encodeImage'


const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [image, setImage] = useState(null);


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
        const userDocRef = doc(collection(db, 'users'), user.uid);
        await setDoc(userDocRef, {
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
      <BackButtonSecondary onPress={handleBackButton} />
      <View style={styles.outerContainer}>
        <TouchableOpacity onPress={handleSelectImage} style={styles.addImage}>
          {image ? (
            <Image style={styles.profileImage} source={{ uri: image.uri }} />
          ) : (
            <Text style={{ color: themes.colors.textSecondary }}>Add image</Text>
          )}
        </TouchableOpacity>
        <View style={styles.innerContainer}>
          <CustomTextInput
            placeholder='Enter full name'
            placeholderTextColor={themes.colors.textSecondary}
            value={name}
            autoCapitalize="words"
            onChangeText={text => setName(text)} />
          <CustomTextInput
            placeholder='Enter email'
            placeholderTextColor={themes.colors.textSecondary}
            value={email}
            autoCapitalize="none"
            onChangeText={text => setEmail(text)} />
          <CustomTextInput
            placeholder='Enter password'
            placeholderTextColor={themes.colors.textSecondary}
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <CustomTextInput

            placeholder='Confirm password'
            placeholderTextColor={themes.colors.textSecondary}
            secureTextEntry
            value={confirmPassword}
            onChangeText={text => setConfirmPassword(text)}
          />
          <CustomButton onPress={handleSignUp} title="Register account" />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;