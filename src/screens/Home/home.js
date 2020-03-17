
import React from 'react';
import {View,Text,Button} from 'react-native';
export const HomeScreen =({ navigation })=> {
    alert("fff")
    return (
      <View style={{ flex: 1, backgroundColor:"red" }}>
        <Button
          onPress={() => navigation.navigate('History')}
          style={{backgroundColor:"red"}}
          title="Go to notifications"
        />
      </View>
    );
  }  