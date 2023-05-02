import React, { useState } from 'react';
import { ToastAndroid, Image, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { StyleSheet, Text, View } from 'react-native';
import styles from '../styles/styles.js';

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

    ToastAndroid.show('All fields are filled in correctly.', ToastAndroid.SHORT);
    // continue with signup process
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
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
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
            <Image style={styles.profileImage} source={{ uri: image }} />
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