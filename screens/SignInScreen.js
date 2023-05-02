import { Image, JSX, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView} from 'react-native'
import styles from '../styles/styles.js'
import React from 'react'
import SignUpScreen from './SignUpScreen';

const SignInScreen = ({navigation}) => {

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
          placeholderTextColor={'#87888c'} />
        <TextInput 
          style={styles.textInput}
          placeholder='Enter password'
          placeholderTextColor={'#87888c'}
          secureTextEntry />
        <TouchableOpacity style={styles.buttonContainer}>
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