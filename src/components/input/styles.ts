import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export default StyleSheet.create({
    container: {
        marginBottom: 10,
        paddingBottom: 5
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: 'center',
    },
    inputTitle: {
        color: 'white',
        marginBottom: 5,
        fontSize: 16,
        fontWeight: 'bold',
        width: "80%",
        marginHorizontal: 5
    },
    input: {
        color: colors.white,
        fontSize: 16,
        paddingVertical: 8,
        flex: 1
    },
    errorLabel: {
        color: colors.red,
        position: "absolute",
        bottom: 0,
        right: 0,
        fontSize: 12
    },


    // tags input
    rightComponentLabel: {
        color: colors.white,
        fontSize: 18
    },
    rightComponent: {
        paddingHorizontal: 5
    },
    tagsContainer: {
        flexDirection: "row",
        flexWrap: "wrap"
    },
    tagContainer: {
        backgroundColor: colors.lightBlue,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 50,
        marginRight: 5,
        marginBottom: 5
    },
    tagLabel: {
        color: colors.white
    },
})