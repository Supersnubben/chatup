import { StyleSheet } from 'react-native';
import themes from '/home/robin/repos/chatup/src/utils/themes.js'

export default StyleSheet.create({

  outerContainer: {
    flex: 1,
    backgroundColor: themes.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  text: {
    color: themes.colors.textSecondary,
    alignItems: 'center',
    alignSelf: 'stretch',
    marginTop: themes.spacing.medium,
  },

  logo: {
    width: 300,
    height: 191,
  },

  innerContainer: {
    marginTop: themes.spacing.medium,
    alignSelf: 'stretch',
    gap: themes.spacing.small,
  },

  shellContainer: {
    flex: 1,
    backgroundColor: themes.colors.primary,
    padding: 30,
  },

})