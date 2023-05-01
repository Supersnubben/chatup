import { Image, JSX, TouchableOpacity, TextInput, StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native'
import styles from '../styles/styles.js'
import React from 'react'

const SignUpScreen = () => {
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
          placeholderTextColor={'#87888c'} />
        <TextInput 
          style={styles.textInput}
          placeholder='Enter email'
          placeholderTextColor={'#87888c'} />
          <TextInput 
          style={styles.textInput}
          placeholder='Enter password'
          placeholderTextColor={'#87888c'}
          secureTextEntry
          />
        <TextInput 
          style={styles.textInput}
          placeholder='Confirm password'
          placeholderTextColor={'#87888c'}
          secureTextEntry />
      </View>
      
        <TouchableOpacity style={styles.buttonContainer}>
          <View>
            <Text style={styles.buttonContainer}>Register account</Text>
          </View>
        </TouchableOpacity>
      
      </View>
      </KeyboardAvoidingView>
  )
}

export default SignUpScreen