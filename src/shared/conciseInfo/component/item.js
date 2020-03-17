import React from 'react';
import {View,Text} from 'react-native';
import {styles} from '../style';
export const Item=(props)=>{
    return (<View style={styles.item}>
        <Text style={[styles.itemHeader,{color:props.color?props.color:"#000"}]}>{props.headerText}

            </Text>
            <Text style={[styles.itemText,{color:props.color}]}>{props.value}
            </Text>
        </View>)

}