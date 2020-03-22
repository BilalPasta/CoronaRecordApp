import React from 'react';
import {ScrollView,Text,View} from 'react-native';
import { styles } from './style';

const headerData=["Country,\nOther ","Total\nCases ","New\nCases ","Total\nDeaths ","New\nDeaths ","Total\nRecovered","Active,\nCases ","Serious\nCritical"]

export  const TableHeader=()=>{
return (<View style={styles.row} horizontal={true}>
{headerData.map((value,index)=><View key={index} style={{ borderRightWidth: 1, borderColor: "#ddd",flex:1 }}>
            <Text  style={{  textAlign: "center",fontSize:10,fontWeight:"bold" }} >{value}</Text>
        </View>)
}
</View>)

}