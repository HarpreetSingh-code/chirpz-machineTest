import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

import { LabelProps } from './types'
// import roboto from '../../utils/roboto'

const Label = ({ value, style, fontFamily = "Regular", ...props }: LabelProps) => {
    // const familyName = roboto[fontFamily]
    const familyName = "regular"
    return <Text style={[styles.label, { fontFamily: familyName }, style]} {...props}>{value || "Label"}</Text>
}

export default Label