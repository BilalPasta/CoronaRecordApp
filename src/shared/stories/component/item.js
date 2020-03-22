import React from 'react';
import {View,Text} from 'react-native'
// import GradientHeader from "react-native-gradient-header";

 
export  const Item=(props)=>{
    return(<View>
        {/* {props.itemList.map((val,index)=>{
            <View  style={{alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#78909C',
    padding: 15,

    }}>
        <Text style={{marginBottom:10,fontSize:15,color:"#000"}}>Heading</Text>
        <Text style={{fontSize:12,color:"#000"}}>fw;ojfkdjfslkdfjsdlkf whfiouwhrf kjhewfiuewhf hfeiewuhfi hiuujjj hjkjjj
            </Text>
        </View>
        })} */}
        {props.itemList.map((value,key)=>key>0? <View style={{width:"90%",alignSelf:"center",borderBottomWidth:1,borderColor:"#ddd",paddingVertical:12}} key={ value.heading}>
             <Text style={{fontWeight:"bold",fontSize:20,textAlign:"center"}}>
    {value.heading}</Text>
            <Text>
    {value.text}</Text>
    </View>:<View key={value} style={{width:"85%",backgroundColor:"#0284fc",padding:8,borderTopRightRadius:8,borderBottomRightRadius:8,marginTop:10}}><Text style={{textAlign:"center",fontSize:15,color:"#fff",fontWeight:"bold"}}>{value}</Text></View>)}
        
        </View>)
}