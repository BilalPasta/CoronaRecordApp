import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { BLACKISH_GREY, GREY } from '../colorConstant/color';

export const styles = StyleSheet.create({
    container: {
        flex:1  ,
        backgroundColor:"#f7f8fc"
        // borderWidth: 1,
        // borderRadius: 5,
        // borderColor: "#ddd",
        // alignSelf:"center",
        // justifyContent: "center",
        // alignItems:"center",
  },
    row: {
        flexDirection: "row",
        width:"80%",
        // backgroundColor:"red",
        alignSelf:"center",
        marginTop:10

    },
    headerText: {
        fontSize: normalize(20),
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold"

    },
    item: {
        flex: 1,
        // marginHorizontal:10,
        marginVertical: normalize(5),
        margin:2,
        // backgroundColor:"red",
        justifyContent: "center",
        alignItems: "center",
    },
    itemText: {
        fontSize: normalize(18),
        fontWeight: "bold",
        textAlign: "center"
    },
    itemHeader: {
        fontSize: normalize(15),
        fontWeight: "bold",

    },
    header: {
        backgroundColor: GREY,
        paddingVertical: normalize(10),
        marginTop:5,
        width:"90%",
        alignSelf:"center",
        borderRadius:5,
        
    }
})