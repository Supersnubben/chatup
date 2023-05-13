import { StyleSheet } from 'react-native';
import themes from '../../../utils/themes'

const styles = StyleSheet.create({
  outerContainer: {
    marginLeft: themes.spacing.medium,
    flexDirection: 'row',
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
    marginLeft: themes.spacing.medium,
    marginRight: '35%',
    marginBottom: 3,
  },

  image: {
    marginTop: '0%',
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    borderWidth: 1,
    borderColor: themes.colors.secondary

  },

  imageContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingBottom: themes.spacing.small,
  },

});

export default styles;