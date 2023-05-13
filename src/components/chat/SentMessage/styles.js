import { StyleSheet } from 'react-native';
import themes from '../../../utils/themes'

const styles = StyleSheet.create({
  container: {
    width: 'auto',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 30, 255, 0.6)',
    padding: themes.spacing.large,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 3,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,

  },

  align: {
    alignSelf: 'flex-end',
    marginRight: 10,
    marginLeft: '25%',
    marginBottom: 3,
  },

  text: {
    color: themes.colors.textPrimary,
  },

});

export default styles;