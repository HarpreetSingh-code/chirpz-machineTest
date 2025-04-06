import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import images from '../../utils/images'
import styles from './styles'

const FAB = ({ onPress }: FABProps) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.container}>
            <Image source={images.plusFAB} resizeMode='contain' style={styles.tickImage} />
        </TouchableOpacity>
    )
}

export default FAB