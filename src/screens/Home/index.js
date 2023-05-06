import { FlatList, Image, TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import styles from './styles'
import React from 'react'

const HomeScreen = () => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.header}>
        <TouchableOpacity>
          <View style={styles.profileImage}>
          </View>
        </TouchableOpacity>
        <View style={styles.nameContainer}>
          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18 }}>Robin Blondin</Text>
        </View>
        <TouchableOpacity>
          <View>
            <Image
              style={styles.logout}
              source={require('/home/robin/repos/chatup/images/logout.png')} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.innerContainer}>
        <FlatList>

        </FlatList>
      </View>
      <View style={styles.header}>
        <TouchableOpacity>
          <View>
            <Image
              style={styles.add}
              source={require('/home/robin/repos/chatup/images/export.png')} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeScreen