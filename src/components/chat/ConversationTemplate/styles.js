import { StyleSheet } from 'react-native';
import themes from '../../../utils/themes'

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: themes.spacing.small,
    gap: themes.spacing.small,
    marginLeft: 20,
  },
  imageContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginTop: themes.spacing.medium,
  },

  profileImage: {
    resizeMode: 'cover',

  },

  infoContainer: {
    marginTop: themes.spacing.medium,
    justifyContent: 'center'
  },

  nameText: {
    ...themes.text.small,
  },

  messageText: {
    fontStyle: 'italic',
    color: '#484848',
  },

});

export default styles;