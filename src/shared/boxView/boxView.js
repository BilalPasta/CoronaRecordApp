import React from 'react';
import {View,Text} from 'react-native';
import {styles} from './style';



export  const BoxView=(props)=>{
    return(<View style={styles.container}>
        <View style={styles.header}>
            <Text style={{textAlign:"center",fontSize:16,fontWeight:"bold",color:"#8B90A0"}}>{props.headerText.replace(/\n/g, "")}
                </Text>
            </View>
            <View style={{flex:1,justifyContent:"center"}}>
            <View style={styles.column}>
                        <Text style={{fontWeight:"bold",color:"#494949"}}>{props.value.replace(/[\n\s]/g, "")}
                            </Text>
                            <Text style={{fontWeight:"bold",color:"#494949"}}>{props.name.replace(/[\n\s]/g, "")}

                            </Text>
                </View>
                <View style={styles.row}>
                    {props.extraInfo.map((info,index)=><View key={index} style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                        <Text style={{textAlign:"center",color:"#494949"}}>{info.value.replace(/[\n\s]/g, "")}
                            </Text>
                            <Text style={{textAlign:"center",color:"#494949"}}>{info.name.replace(/[\n\s]/g, "")}

                            </Text>
                        </View>)}
                    
                        {/* <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                        <Text style={{textAlign:"center"}}>89,819 (94%)
                            </Text>
                            <Text style={{textAlign:"center"}}>Serious or Critical

                            </Text>
                        </View> */}
                </View>
                </View>
        </View>)
}