import { Image, TouchableOpacity, View } from "react-native"
import styles from "./styles"
import images from "../../utils/images"
import { NavigationHeaderProps } from "./types"
import { useNavigation } from "@react-navigation/native"

export const MainHeader = () => {
    return (
        <View style={styles.mainHeaderContainer}>
            <Image source={images.user} resizeMode='contain' style={styles.userImage} />
            <Image source={images.chirpzLogoText} resizeMode='contain' style={styles.chirpzLogoText} />
            <View style={styles.userImage} />
        </View>
    )
}
export const NavigationHeader = ({ renderRightComponent }: NavigationHeaderProps) => {
    const navigation = useNavigation();
    const goBack = () => navigation.goBack();
    return (
        <View style={styles.navigationHeaderContainer}>
            <TouchableOpacity activeOpacity={0.8} onPress={goBack}>
                <Image source={images.backWhite} resizeMode='contain' style={styles.button} />
            </TouchableOpacity>
            {renderRightComponent
                ? renderRightComponent() :
                <View style={styles.button} />}
        </View>
    )
}