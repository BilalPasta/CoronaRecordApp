import React from 'react';
import {HomeScreen,HistoryScreen} from './index';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
export const Navigation=()=>{
    const Drawer = createDrawerNavigator();

    return(
        <NavigationContainer >
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="History" component={HistoryScreen} />
      </Drawer.Navigator>
    </NavigationContainer>

    )
}