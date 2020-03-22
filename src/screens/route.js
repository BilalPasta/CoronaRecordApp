import React from 'react';
import {HomeScreen,HistoryScreen,CountryRecord} from './index';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export const Navigation=()=>{
    // const Drawer = createDrawerNavigator();
    const Stack = createStackNavigator();

    // return(
    //     <NavigationContainer >
    //   <Drawer.Navigator initialRouteName="Home">
    //     <Drawer.Screen name="Home" component={HomeRoute} />
    //     <Drawer.Screen name="History" component={HistoryScreen} />
    //   </Drawer.Navigator>
    // </NavigationContainer>

    // )

    return(<NavigationContainer >
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false,}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CountryRecord" component={CountryRecord} />
      </Stack.Navigator>
    </NavigationContainer>

    )
}



// const HomeRoute=()=> {
//   const Stack = createStackNavigator();

//   return (
//     <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false,}}>
//       <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="CountryRecord" component={CountryRecord} />
//     </Stack.Navigator>
//   );
// }