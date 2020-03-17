import React from 'react';
import {View,Text} from 'react-native';
import {styles} from '../style';
export const Header=()=>{
    return(<View style={styles.header}>
        <Text style={styles.headerText}>COVID-19 CORONAVIRUS OUTBREAK
        </Text>
        <Text style={{textAlign:"center",color:"#f5f5f5"}}>Last updated: March 17, 2020, 07:55 GMT
        </Text>
        </View>)
}