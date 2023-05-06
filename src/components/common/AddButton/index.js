import { TouchableOpacity, Image } from 'react-native'
import styles from './styles'
import React from 'react'

const AddButton = ({ onPress, style }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Image
                style={[styles.addButton, style]}
                source={require('/home/robin/repos/chatup/images/addButton.png')} />
        </TouchableOpacity>
    )
}

export default AddButton