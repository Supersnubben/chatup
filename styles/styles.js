import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#9af3f3',
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
    marginTop: 12,
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
    color: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 45,
    backgroundColor: '#25b8bf',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },

  logo: {

    width: 300,
    height: 191,

  },

  addImage: {
    color: '#87888c',
    marginBottom: 50,
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EDFFFF',
    borderColor: '#25b8bf',
    borderWidth: 2,

  },

  backButton: {
    width: 25,
    height: 25,
    marginTop: 20,

  },

  shellContainer: {
    flex: 1,
    backgroundColor: '#9af3f3',
    padding: 30,
  },

  profileImage: {
    marginBottom: 50,
    width: 150,
    height: 150,
    borderWidth: 2,
    borderColor: '#25b8bf',
    borderRadius: 150 / 2,
  },

});