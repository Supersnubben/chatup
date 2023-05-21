import { StyleSheet } from 'react-native';
import themes from '../../utils/themes'

export default StyleSheet.create({
  container: {
    marginTop: 30,
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
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
  name: {
    ...themes.text.small,
  },
});
