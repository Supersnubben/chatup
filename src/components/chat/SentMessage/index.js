import { Text, View } from 'react-native'
import styles from './styles'
import React from 'react'

const index = ({message}) => {
  return (
    <View style={styles.container}>
      <Text>{message}</Text>
    </View>
  )
}

export default index