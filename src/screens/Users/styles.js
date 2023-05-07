import { StyleSheet } from 'react-native';
import themes from '/home/robin/repos/chatup/src/utils/themes.js'

export default StyleSheet.create({

  outerContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: themes.colors.secondary,
  },

  innerContainer: {
    flex: 8,
    backgroundColor: themes.colors.primary,
    borderRadius: 50,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
    justifyContent: 'space-between',
    marginTop: themes.spacing.large,
    paddingLeft: themes.spacing.large,
  },

  footer: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: themes.spacing.large,
  },

  text: {
    flex: 1,
    textAlign: 'center',
    marginRight: 60,
    ...themes.text.medium,
  },

  button: {
    marginBottom: themes.spacing.medium,
    marginLeft: themes.spacing.small,
},
});