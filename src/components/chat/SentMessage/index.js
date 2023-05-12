import { Text, View } from 'react-native'
import styles from './styles'
import React from 'react'

const index = ({ message }) => {
  return (
    <View style={[styles.container, styles.align]}>
      <Text style={styles.text}>{message}</Text>
    </View>
  )
}

export default index