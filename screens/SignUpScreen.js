import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Alert } from 'react-native';
import styles from '../styles/styles.js';

const SignUpScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert('Please fill all fields.');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Please enter a valid email address.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Passwords do not match.');
      return;
    }

    // continue with signup process
    // ...
  };

  const validateEmail = (email) => {
    // regex pattern for email validation
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  return (
    <KeyboardAvoidingView 
      style={styles.shellContainer}
      behavior='padding'>
      <TouchableOpacity>
        <Image style={styles.backButton} source={require('../images/backbutton.png')} />
      </TouchableOpacity>
      <View style={styles.outerContainer}>
        <TouchableOpacity>
          <View style={styles.addImage}>
            <Text>Add image</Text>
          </View>
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
        </View>
        <TouchableOpacity 
          style={styles.buttonContainer}
          onPress={handleSignUp}>
          <View>
            <Text style={styles.buttonText}>Register account</Text>
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;