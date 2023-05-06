import { StyleSheet } from 'react-native';
import themes from '../../../utils/themes'

export default StyleSheet.create({

  buttonContainer: {
    color: themes.colors.textPrimary,
    alignSelf: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 45,
    backgroundColor: themes.colors.secondary,
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },

  buttonText: {
    color: themes.colors.textPrimary,
    ...themes.text.small,
  }

})