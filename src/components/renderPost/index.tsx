import { View, Text, Image } from 'react-native'
import React from 'react'
import { PostProps } from '../../screens/home/types'
import Label from '../label'
import styles from './styles'
import images from '../../utils/images'
import { RenderPostProps } from './types'

const Tick = () => {
    return (<Image source={images.tick} resizeMode='contain' style={styles.tickImage} />)
}
const RenderPost = (props: RenderPostProps) => {
    const { user, post, tags, style } = props
    const isUserVerified = user?.verified ?? false
    return (
        <View style={[styles.container, style]}>
            {/* User Details - Start*/}
            <View style={styles.userContainer}>
                <Label value={user?.name} style={styles.userName} numberOfLines={1} />
                {isUserVerified && <Tick />}
            </View>
            {/* User Details - End*/}

            {/* Post - Start*/}
            <Label value={post?.message} style={styles.postLabel} />
            {/* Post - End*/}

            {/* Tags - Start*/}
            {Array.isArray(tags) && !!tags?.length && <View style={styles.tagsContainer}>
                {tags.map((tag, index) => <View key={index} style={styles.tagContainer}>
                    <Label value={`#${tag}`} style={styles.tagLabel} />
                </View>)}
            </View>}
            {/* Tags - End*/}
        </View>
    )
}

export default RenderPost