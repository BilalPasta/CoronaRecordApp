import React from 'react';
import {View,Text} from 'react-native';
import { styles } from './style';

const headerData=["Country,\nOther ","Total\nCases ","New\nCases ","Total\nDeaths ","Total\nRecovered ","Active\nCases ","Serious,\nCritical ","Tot Cases/\n1M pop"]
// Country,
// Other	Total
// Cases	New
// Cases	Total
// Deaths	New
// Deaths	Total
// Recovered	Active
// Cases	Serious,
// Critical	Tot Cases/
// 1M pop

export  const TableHeader=()=>{
return (<View style={styles.row}>
{headerData.map((value,index)=><Text key={index}>{value}</Text>)
}
</View>)

}