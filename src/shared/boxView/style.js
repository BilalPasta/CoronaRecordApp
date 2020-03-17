import { StyleSheet, Dimensions } from 'react-native';
import normalize from 'react-native-normalize'

export const styles = StyleSheet.create({
    container: {
        height: normalize(200),
        width: Dimensions.get("window").width,
        marginVertical: normalize(10),
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#ddd"
    },
    header: {
        height: normalize(40),
        justifyContent: "center",
        borderBottomWidth: 1,
        borderColor: "#000",
        backgroundColor: "#ccc"
    },
    row: {
        flexDirection: "row",
        height: normalize(70),
        justifyContent: "center"
    },
    column: {
        height: normalize(60),
        justifyContent: "center",
        alignItems: "center"
    }
})