import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export default StyleSheet.create({
    // container
    container: {
        padding: 15,
        borderBottomWidth: 0.8,
        borderColor: colors.lightBlue
    },
    // user 
    userContainer: {
        flexDirection: "row",
        alignItems: 'center',
    },
    userName: {
        color: colors.white,
        fontSize: 18,
        maxWidth: "80%",
        fontWeight: "bold",
        marginRight: 15
    },

    // tick
    tickImage: {
        height: 20,
        width: 20
    },

    // post 
    postLabel: {
        color: colors.lightWhite,
        fontSize: 15,
        lineHeight: 23,
        marginVertical: 15
    },

    // tags
    tagsContainer: {
        flexDirection: "row",
        alignItems: 'center',
        flexWrap: "wrap",
    },
    tagContainer: {
        backgroundColor: colors.lightBlue,
        marginRight: 10,
        marginBottom: 10,
        padding: 10,
        borderRadius: 5
    },
    tagLabel: {
        color: colors.white,
        fontSize: 15,
    }
})