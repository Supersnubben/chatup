import { StyleSheet } from 'react-native';
import themes from '../../../utils/themes'

const styles = StyleSheet.create({
  container: {
    width: 'auto',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(130, 140, 135, 0.3)',
    padding: themes.spacing.large,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: 10,
  },

  align: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginRight: '25%',
    marginBottom: 3,
  },

  text: {

  },
});

export default styles;