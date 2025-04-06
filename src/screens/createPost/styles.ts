import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bg
    },

    // header
    headerPostBtn: {
        backgroundColor: colors.yellow,
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 50
    },
    headerPostLabel: {
        color: colors.white,
        fontSize: 16,
        fontWeight: "bold"
    },

    scrollContainer: {
        paddingHorizontal: 15
    }
})