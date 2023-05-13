import { StyleSheet } from 'react-native';
import themes from '../../../utils/themes'

const styles = StyleSheet.create({
  outerContainer: {
    marginLeft: themes.spacing.medium,
    flexDirection: 'row',
    marginRight: '35%',
  },

  messageContainer: {
    width: 25,
    height: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },

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
  },

  align: {
    alignSelf: 'flex-start',
    marginLeft: themes.spacing.small,
    marginBottom: 3,
  },

  image: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
  },

  imageContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingBottom: 3,
  },

  date: {
    fontSize: 8,
    color: themes.colors.textSecondary,
    alignSelf: 'flex-start',
    marginLeft: 12,
  }

});

export default styles;