import { StyleSheet } from 'react-native';
import themes from '../../utils/themes'

const styles = StyleSheet.create({
    container: {
        backgroundColor: themes.colors.primary,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        flexDirection: 'column',
    },

    innerContainer: {
        flex: 8,
    },

    profileImage: {
        marginTop: 30,
        marginLeft: 20,
        alignContent: 'center',
        width: 40,
        height: 40,
        borderWidth: 2,
        borderColor: themes.colors.primary,
        borderRadius: 10,
    },

    nameContainer: {
        marginTop: 30,
        marginLeft: 10,
        width: 180,
        height: 25,
    },

    header: {
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'flex-start',
        backgroundColor: themes.colors.secondary,
        borderBottomColor: themes.colors.thirdrary,
        borderBottomWidth: 1,
    },

    footer: {
        height: 80,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: themes.spacing.large,
        backgroundColor: themes.colors.secondary,
        gap: 30,
    },

    backButton: {
        marginLeft: 20,
        marginTop: 30,
        width: 25,
        height: 25
    },

    text: {
        ...themes.text.small,
    },

    textInput: {
        padding: 8,
        paddingLeft: themes.spacing.medium,
        width: '70%',
        height: 35,
        borderRadius: 20,
        backgroundColor: themes.colors.inputBackground,
    },

    sendButton: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },

});

export default styles;