import { StyleSheet } from 'react-native';
import theme from '../../../utils/themes';

export default StyleSheet.create({

textInput: {
    backgroundColor: theme.colors.inputBackground,
    paddingVertical: theme.spacing.small,
    paddingLeft: theme.spacing.medium,
    alignItems: 'stretch',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: theme.colors.secondary,
  },

})