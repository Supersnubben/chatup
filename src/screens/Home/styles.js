import { StyleSheet } from 'react-native';
import themes from '/home/robin/repos/chatup/src/utils/themes.js'

export default StyleSheet.create({

  outerContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: themes.colors.secondary,
  },

  innerContainer: {
    flex: 8,
    backgroundColor: themes.colors.primary,
    borderRadius: 50,
  },

  profileImage: {
    marginTop: 20,
    marginLeft: 20,
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: themes.colors.primary,
    borderRadius: 50 / 2,
  },

  nameContainer: {
    marginTop: 20,
    width: 180,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginTop: themes.spacing.large,
  },

  footer: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: themes.spacing.large,
  },

  logout: {
    marginTop: 20,
    marginRight: 30,
    width: 25,
    height: 25
  },

});