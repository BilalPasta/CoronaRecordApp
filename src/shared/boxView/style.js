import { StyleSheet, Dimensions } from 'react-native';
import normalize from 'react-native-normalize'

export const styles = StyleSheet.create({
    container: {
        height:normalize(180),
        width:"85%",
        marginTop:10,
        alignSelf:"center",
        marginVertical: normalize(10),
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#ddd",
        marginBottom:10,
        borderWidth: 1,
        borderRadius: 2,
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginTop: 10,
    },
    header: {
        height: normalize(40),
        justifyContent: "center",
        borderBottomWidth: 1,
        borderColor: "#ddd",
        backgroundColor: "#F7F8FC"
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