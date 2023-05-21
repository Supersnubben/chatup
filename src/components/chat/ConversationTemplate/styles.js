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
    width: 50,
    height: 50,
    borderRadius: 25,

    marginTop: themes.spacing.medium,
  },

  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: 'cover',

  },

  statusCircleContainer: {
    position: 'absolute',
    top: '80%',
    right: 0,
    transform: [{ translateY: -5 }],
    width: 10,
    height: 10,
    borderRadius: 5,
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
    color: themes.colors.thirdrary,
  },

  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  dateText: {
    color: themes.colors.secondary,
    fontSize: 10,

  }

});

export default styles;