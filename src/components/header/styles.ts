import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export default StyleSheet.create({
    // main Header
    mainHeaderContainer: {
        backgroundColor: colors.bg,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
        paddingTop: 25,
        paddingBottom: 15,
        borderBottomWidth: 0.8,
        borderColor: colors.lightBlue
    },
    userImage: {
        height: 40,
        width: 40
    },
    chirpzLogoText: {
        width: 70,
        height: 30,
    },

    // navigation Header
    navigationHeaderContainer: {
        backgroundColor: colors.bg,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
        paddingTop: 25,
        paddingBottom: 15,
        borderBottomWidth: 0.8,
        borderColor: colors.lightBlue
    },
    button:{
        height: 30,
        width: 30
    }
})