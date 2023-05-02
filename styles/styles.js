import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  outerContainer: {
    flex: 1,
    backgroundColor: '#9af3f3',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  outerContainerDark: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: '#25b8bf',
  },

  shellContainer: {
    flex: 1,
    backgroundColor: '#9af3f3',
    padding: 30,
  },

  innerContainer: {
    marginTop: 10,
    alignSelf: 'stretch',
    gap: 8,
  },

  innerContainerHome: {
    flex: 6,
    backgroundColor: '#9af3f3',
    borderRadius: 50,
  },

  nameContainerHome: {
    marginTop: 20,
    width: 180,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerHome: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
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

  logo: {
    width: 300,
    height: 191,
  },

  logout: {
    marginTop: 20,
    marginRight: 30,
    width: 25,
    height: 25
  },

  add: {
    width: 175,
    height: 175,
    marginLeft: '35%',
    marginBottom: 100,
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

  profileImage: {
    marginBottom: 50,
    width: 150,
    height: 150,
    borderWidth: 2,
    borderColor: '#25b8bf',
    borderRadius: 150 / 2,
  },

  profileImageHome: {
    marginTop: 20,
    marginLeft: 20,
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: '#9af3f3',
    borderRadius: 50 / 2,
  },

});