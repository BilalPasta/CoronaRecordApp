import React from 'react';
import {View,Text,TouchableOpacity,Image} from 'react-native'
import {ConciseInfo} from '../../shared'
export const CountryRecordStory=(props)=>{

return(<View style={{flex:1}}>
    <View style={{backgroundColor:"#01b6ad"}}><TouchableOpacity
    style={{width:80,height:50,justifyContent:"center",alignItems:"center"}}
          onPress={() => props.goBack()}        >
        
                  <Image 
                  style={{width:24,height:24,tintColor:"#000"}}
                  source={require("../../../assets/cancel-icon.png")}/>
            </TouchableOpacity>
            </View>
    <ConciseInfo
    countryName={props.params.countryName}
    />
    
    </View>)
}