import { KeyboardAvoidingView, Text, View, TouchableOpacity, Image, FlatList, TextInput } from 'react-native'
import React from 'react'
import styles from './styles'
import { BackButtonPrimary, CustomTextInput } from '../../components/common';
import themes from '../../utils/themes'

const ChatScreen = ({ route, navigation }) => {
  const { user } = route.params;

  const handleBack = () => {
    navigation.navigate('HomeScreen');
  }
  return (
    <KeyboardAvoidingView style={styles.container}>
      {user && (
        <>

          <View style={styles.header}>
            <BackButtonPrimary style={styles.backButton} onPress={handleBack} />
            <TouchableOpacity>
              <Image
                style={styles.profileImage}
                source={{ uri: user.image }}
                resizeMode="cover" />
            </TouchableOpacity>
            <View style={styles.nameContainer}>
              <Text style={styles.text}>{user.name}</Text>
            </View>

          </View>
          <View style={styles.innerContainer}>
            <FlatList>

            </FlatList>
          </View>
          <View style={styles.footer}>
            <TextInput
              style={styles.textInput}
              placeholder='Write something'
              placeholderTextColor={themes.colors.textSecondary}
            />
            <TouchableOpacity>
              <Image source={require('../../../images/sendbutton.png')} style={styles.sendButton} />
            </TouchableOpacity>

          </View>
        </>
      )}
    </KeyboardAvoidingView>
  )
}

export default ChatScreen