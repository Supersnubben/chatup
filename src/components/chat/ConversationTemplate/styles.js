import { StyleSheet } from 'react-native';
import themes from '../../../utils/themes'

const styles = StyleSheet.create({
    outerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: themes.spacing.medium,
        gap: themes.spacing.medium,
      },
      imageContainer: {
        height: 40,
        width: 40,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: themes.colors.secondary,
        marginTop: themes.spacing.medium,
      },

      profileImage: {
        width: 40,
        heigh: 40,
        borderRadius: 20,

      },

      infoContainer: {
        marginTop: themes.spacing.medium,
        justifyContent: 'center'
      },
    
      nameText: {
        ...themes.text.small,
      },
    
      messageText: {
        color: themes.colors.textSecondary,
      },
    
    });

export default styles;