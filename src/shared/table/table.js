import React from 'react';
import {View,Text,FlatList,ScrollView} from 'react-native';
import {TableItem} from './component/tableItem';
import {TableHeader} from './component/tableHeader';
const headerData=["Country,\nOther ","Total\nCases ","New\nCases ","Total\nDeaths ","Total\nRecovered ","Active\nCases ","Serious,\nCritical ","Tot Cases/\n1M pop"]


export  const Table=()=>{
    return(<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
     {/* <TableHeader/>  */}
    <View/>
        <FlatList
         data={headerData}            
         renderItem={({ item }) => <TableItem/>}
         keyExtractor={item => item}
        />
        </ScrollView>)
}