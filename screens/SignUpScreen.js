import { Image, JSX, TouchableOpacity, TextInput, StyleSheet, Text, View } from 'react-native'
import styles from '../styles/styles.js'
import React from 'react'

const SignUpScreen = () => {
  return (
    
    <View style={styles.outerContainer}>
      <TouchableOpacity>
        <View style={styles.relativeView}>    
          <View style={styles.absoluteView}>
            <Image style={styles.backButton} source={require('../images/backbutton.png')} />
          </View>
        </View>
      </TouchableOpacity>
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
          placeholderTextColor={'#87888c'}/>
        <TextInput 
          style={styles.textInput}
          placeholder='Confirm password'
          placeholderTextColor={'#87888c'} />
      </View>
      
        <TouchableOpacity style={styles.buttonContainer}>
          <View>
            <Text style={styles.buttonContainer}>Register account</Text>
          </View>
        </TouchableOpacity>
      
      </View>
  )
}

export default SignUpScreen