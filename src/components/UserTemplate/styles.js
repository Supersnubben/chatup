import { StyleSheet } from 'react-native';
import themes from '../../utils/themes'

export default StyleSheet.create({
  container: {
    marginTop: 30,
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    marginRight: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  name: {
    ...themes.text.small,
  },
});
