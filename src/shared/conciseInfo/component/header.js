import React from 'react';
import {View,Text, ShadowPropTypesIOS} from 'react-native';
import {styles} from '../style';
export const Header=(props)=>{
    return(<View style={styles.header}>
        <Text style={styles.headerText}>COVID-19 CORONAVIRUS OUTBREAK
        </Text>
        <Text style={{textAlign:"center",color:"#f5f5f5"}}>{props.lastUpdated}
        </Text>
        </View>)
}