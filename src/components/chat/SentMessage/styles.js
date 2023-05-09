import { StyleSheet } from 'react-native';
import themes from '../../../utils/themes'

const styles = StyleSheet.create({
  container: {
    width: 'auto',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 30, 255, 0.7)',
    padding: themes.spacing.large,
  },
});

export default styles;