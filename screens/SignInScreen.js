import { Image, JSX, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const SignInScreen = () => {
  return (
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
          placeholderTextColor={'#87888c'} />
      </View>
      
        <TouchableOpacity style={styles.buttonContainer}>
          <View>
            <Text style={styles.buttonContainer}>Sign in</Text>
          </View>
        </TouchableOpacity>
      
      <View>
        <TouchableOpacity>
            <Text style={styles.text}>Create a new account</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SignInScreen

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#9af3f3',
    te: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  innerContainer: {
    marginTop: 10,
    alignSelf: 'stretch',
    gap: 8,

  },

  text: {
    color: '#87888c',
    alignItems: 'center',
    alignSelf: 'stretch',
    padding: 12,
  },

  textInput: {

    backgroundColor: 'white',
    paddingVertical: 8,
    paddingLeft: 12,
    alignItems: 'stretch',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '25b8bf'
  },

  buttonContainer: {

    alignSelf: 'stretch',
    marginTop: 8,
    backgroundColor: '#25b8bf',
    alignItems: 'center',
    borderRadius: 10,
    padding: 2,
    paddingBottom: 8,
  },

  logo: {

    width: 300,
    height: 191,

  },
});