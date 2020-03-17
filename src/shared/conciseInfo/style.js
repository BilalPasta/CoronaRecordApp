import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import {BLACKISH_GREY,GREY} from '../colorConstant/color';

export const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#ddd",
        padding:normalize(2),
        // alignSelf:"center"
    },
    row:{
        flexDirection:"row",

    },
    headerText:{
fontSize:normalize(20),
color:"#fff",
textAlign:"center",
fontWeight:"bold"

    },
    item: {
        flex:1,
        // marginHorizontal:10,
        marginVertical: normalize(5),
        justifyContent: "center",
        alignItems: "center"
    },
    itemText: {
        fontSize: normalize(20),
        fontWeight:"bold",
        textAlign:"center"
    },
    itemHeader: {
        fontSize: normalize(15),
        fontWeight: "bold",
   
    },
    header:{
        backgroundColor:GREY,
        paddingVertical:normalize(10)
    }
})