
// import React from 'react';
// import {View,Text,ScrollView} from 'react-native'
// import {styles} from './style';
// const headerData=["Country,\nOther ","Total\nCases ","New\nCases ","Total\nDeaths ","Total\nRecovered ","Active\nCases ","Serious,\nCritical ","Tot Cases/\n1M pop"]

// export  const TableItem=()=>{
//     return (<ScrollView style={styles.row}>
//     {headerData.map((value,index)=><View style={{borderRightWidth:1,borderColor:"#ddd",
// }}><Text key={index} style={{width:70,textAlign:"center"}} >{value}</Text></View>)
//     }
//     </ScrollView>)
// }

import React from 'react';
import { View, Text,ScrollView ,TouchableOpacity} from 'react-native'
import { styles } from './style';
const headerData = ["Country,\nOther ", "Total\nCases ", "New\nCases ", "Total\nDeaths ", "Total\nRecovered ", "Active\nCases ", "Serious,\nCritical ", "Tot Cases/\n1M pop"]
export const TableItem = (props) => {
    return (<View>
        {
            props.index<=9&&props.name!="Switzerland"?(<TouchableOpacity style={[styles.row,{marginVertical:2,backgroundColor:"#b05160"}]} onPress={()=>props.navigate("CountryRecord",{countryName:props.name})}>

            <View style={{ borderRightWidth: 1, borderColor: "#ddd",flex:1 }}>
                <Text  style={{  textAlign: "center",fontSize:10,fontWeight:"bold" }} >{props.name}</Text>
            </View>
            <View style={{
                borderRightWidth: 1, borderColor: "#ddd",flex:1
            }}>
                <Text  style={{  textAlign: "center",fontSize:10 }} >{props.total_cases}</Text>
            </View>
            <View style={{
                borderRightWidth: 1, borderColor: "#ddd",flex:1
            }}>
                <Text  style={{  textAlign: "center",fontSize:10 }} >{props.new_cases}</Text></View>
            <View style={{ borderRightWidth: 1, borderColor: "#ddd",flex:1 }}>
                <Text  style={{  textAlign: "center",fontSize:10 }} >{props.total_deaths}</Text></View>
            <View style={{ borderRightWidth: 1, borderColor: "#ddd",flex:1 }}>
                <Text  style={{  textAlign: "center",fontSize:10 }} >{props.new_deaths}</Text></View>
            <View style={{
                borderRightWidth: 1, borderColor: "#ddd",flex:1
            }}><Text  style={{  textAlign: "center",fontSize:10 }} >{props.total_recovered}</Text></View>
            <View style={{ borderRightWidth: 1, borderColor: "#ddd",flex:1 }}>
                <Text  style={{  textAlign: "center",fontSize:10 }} >{props.active_cases}</Text></View>
                <View style={{ flex:1 }}>
                <Text  style={{  textAlign: "center",fontSize:10 }} >{props.serious_critical}</Text></View>
    
        </TouchableOpacity>):(<View style={styles.row} >

<View style={{ borderRightWidth: 1, borderColor: "#ddd",flex:1 }}>
    <Text  style={{  textAlign: "center",fontSize:10,fontWeight:"bold" }} >{props.name}</Text>
</View>
<View style={{
    borderRightWidth: 1, borderColor: "#ddd",flex:1
}}>
    <Text  style={{  textAlign: "center",fontSize:10 }} >{props.total_cases}</Text>
</View>
<View style={{
    borderRightWidth: 1, borderColor: "#ddd",flex:1
}}>
    <Text  style={{  textAlign: "center",fontSize:10 }} >{props.new_cases}</Text></View>
<View style={{ borderRightWidth: 1, borderColor: "#ddd",flex:1 }}>
    <Text  style={{  textAlign: "center",fontSize:10 }} >{props.total_deaths}</Text></View>
<View style={{ borderRightWidth: 1, borderColor: "#ddd",flex:1 }}>
    <Text  style={{  textAlign: "center",fontSize:10 }} >{props.new_deaths}</Text></View>
<View style={{
    borderRightWidth: 1, borderColor: "#ddd",flex:1
}}><Text  style={{  textAlign: "center",fontSize:10 }} >{props.total_recovered}</Text></View>
<View style={{ borderRightWidth: 1, borderColor: "#ddd",flex:1 }}>
    <Text  style={{  textAlign: "center",fontSize:10 }} >{props.active_cases}</Text></View>
    <View style={{ flex:1 }}>
    <Text  style={{  textAlign: "center",fontSize:10 }} >{props.serious_critical}</Text></View>

</View>)
        }
    </View>)
}