import { StyleSheet } from 'react-native';
import themes from '../../utils/themes'

export default StyleSheet.create({

  outerContainer: {
    flex: 1,
    backgroundColor: themes.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
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

  addImage: {
    color: themes.colors.textSecondary,
    marginBottom: 50,
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: themes.colors.inputBackground,
    borderColor: themes.colors.secondary,
    borderWidth: 2,
  },

  profileImageHome: {
    marginTop: 20,
    marginLeft: 20,
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: themes.colors.secondary,
    borderRadius: 50 / 2,
  },

  backButton: {
    width: 25,
    height: 25,
    marginTop: 20,

  },

})