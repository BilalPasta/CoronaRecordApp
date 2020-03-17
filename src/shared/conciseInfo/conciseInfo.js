
import React from 'react';
import {View,Text} from 'react-native'
import {styles} from './style';
import {Item} from './component/item';
import {Header} from './component/header';
import {GREY,SKY_BLUE,GREEN,RED} from '../colorConstant/color'
export  const ConciseInfo=()=>{
    return(<View style={styles.container}>
        <Header/>
        <View style={styles.row}>
        <Item 
        headerText={"Coronavirus Cases:"} 
        value={"182,225,545"}
        color={GREY}

        />
         <Item 
        headerText={"Death:"} 
        value={"182,225,545"}
        color={RED}
        />
         <Item 
        headerText={"Recovered:"} 
        value={"182,225,545"}
        color={GREEN}

        />
        </View>
        </View>)
}