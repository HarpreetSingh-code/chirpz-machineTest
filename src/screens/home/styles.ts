import { Dimensions, StyleSheet } from "react-native";
import colors from "../../utils/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bg
    },
    listContentcontainer: {
        paddingBottom: 30
    },
    emptyListLabel: {
        color: colors.lightWhite,
        fontSize: 16,
        textAlign: "center",
        marginTop: Dimensions.get("window").height / 2.5
    }
})