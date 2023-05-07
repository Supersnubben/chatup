import { FlatList, TouchableOpacity, Text, View } from 'react-native'
import styles from './styles'
import React, { useState, useEffect } from 'react'
import { BackButtonPrimary } from '../../components/common'


const UserScreen = ({ navigation }) => {
  

const handleBack = () => {
  navigation.navigate('HomeScreen');
}

  return (
    <View style={styles.outerContainer}>
      <View style={styles.header}>
          <BackButtonPrimary style={styles.button} onPress={handleBack}/>
          <Text style={styles.text}>Select user</Text>
      </View>
      <View style={styles.innerContainer}>
        <FlatList>

        </FlatList>
      </View>
      <View style={styles.footer}>
      </View>
    </View>
  )
}

export default UserScreen