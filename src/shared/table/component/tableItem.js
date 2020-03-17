
import React from 'react';
import {View,Text} from 'react-native'
import {styles} from './style';
const headerData=["Country,\nOther ","Total\nCases ","New\nCases ","Total\nDeaths ","Total\nRecovered ","Active\nCases ","Serious,\nCritical ","Tot Cases/\n1M pop"]

export  const TableItem=()=>{
    return (<View style={styles.row}>
    {headerData.map((value,index)=><View style={{borderRightWidth:1,borderColor:"#ddd",
}}><Text key={index} style={{width:70,textAlign:"center"}} >{value}</Text></View>)
    }
    </View>)
}