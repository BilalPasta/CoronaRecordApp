import React from 'react';
import {View,Text} from 'react-native';
import {styles} from './style';



export  const BoxView=(props)=>{
    return(<View style={styles.container}>
        <View style={styles.header}>
            <Text style={{textAlign:"center",fontSize:14,fontWeight:"bold"}}>{props.headerText}
                </Text>
            </View>
            <View style={{flex:1,justifyContent:"center"}}>
            <View style={styles.column}>
                        <Text>89,819 (94%)
                            </Text>
                            <Text>Currently Infected Patients

                            </Text>
                </View>
                <View style={styles.row}>
                    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                        <Text style={{textAlign:"center"}}>89,819 (94%)
                            </Text>
                            <Text style={{textAlign:"center"}}>in Mild Condition

                            </Text>
                        </View>
                        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                        <Text style={{textAlign:"center"}}>89,819 (94%)
                            </Text>
                            <Text style={{textAlign:"center"}}>Serious or Critical

                            </Text>
                        </View>
                </View>
                </View>
        </View>)
}