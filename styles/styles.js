import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
  
      backgroundColor: '#EDFFFF',
      paddingVertical: 8,
      paddingLeft: 12,
      alignItems: 'stretch',
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#25b8bf'
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

    addImage: {
        marginBottom: 25,
        width: 150,
        height: 150,
        borderRadius: 150/2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EDFFFF',
        borderColor: '#25b8bf',
        borderWidth: 2,

    },

    backButton: {
        width: 25,
        height: 25,

    },

    absoluteView: {
        position: 'absolute',
        top: 20,
        left: 20,
        width: 50,
        height: 50,
      },

      relativeView: {
        position: 'relative',
        width: '100%',
        height: '100%',
      },
  });