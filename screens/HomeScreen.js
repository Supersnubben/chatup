import { FlatList, Image, TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import styles from '../styles/styles.js'
import React from 'react'

const HomeScreen = () => {
  return (
    <View style={styles.outerContainerDark}>
      <View style={styles.headerHome}>
        <TouchableOpacity>
          <View style={styles.profileImageHome}>
          </View>
        </TouchableOpacity>
        <View style={styles.nameContainerHome}>
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
      <View style={styles.innerContainerHome}>
        <FlatList>

        </FlatList>
      </View>
      <View style={styles.headerHome}>
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