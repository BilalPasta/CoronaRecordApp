/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import 'react-native-gesture-handler';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Item} from './src/shared/stories/component/item';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {Navigation} from './src/screens/route';
import { Table, ConciseInfo, BoxView, LineGraph } from './src/shared';
const App: () => React$Node = () => {
  return <Navigation/>

   
          {/* <ConciseInfo />
          <BoxView
            headerText={"ACTIVE CASES"}

          />
          <BoxView
            headerText={"CLOSED CASES"}

          />
          <LineGraph
            headerText={"Total Cases"}
          />

          <LineGraph
            headerText={"Death Cases"}
          />
          <Table /> */}
    

};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;







// 
// import React from 'react';
// import { View, Text } from 'react-native'
// import { styles } from './style';
// const headerData = ["Country,\nOther ", "Total\nCases ", "New\nCases ", "Total\nDeaths ", "Total\nRecovered ", "Active\nCases ", "Serious,\nCritical ", "Tot Cases/\n1M pop"]

// export const TableItem = (props) => {
//     return (<View style={styles.row}>
//         {/* {headerData.map((value,index)=><View style={{borderRightWidth:1,borderColor:"#ddd",
// }}><Text key={index} style={{width:70,textAlign:"center"}} >{value}</Text></View>) */}
//         <View style={{ borderRightWidth: 1, borderColor: "#ddd" }}>
//             <Text  style={{ width: 70, textAlign: "center" }} >{props.name}</Text>
//         </View>
//         <View style={{
//             borderRightWidth: 1, borderColor: "#ddd"
//         }}>
//             <Text  style={{ width: 70, textAlign: "center" }} >{props.total_cases}</Text>
//         </View>
//         <View style={{
//             borderRightWidth: 1, borderColor: "#ddd"
//         }}>
//             <Text  style={{ width: 70, textAlign: "center" }} >{props.new_cases}</Text></View>
//         <View style={{ borderRightWidth: 1, borderColor: "#ddd" }}>
//             <Text  style={{ width: 70, textAlign: "center" }} >{props.total_deaths}</Text></View>
//         <View style={{ borderRightWidth: 1, borderColor: "#ddd" }}>
//             <Text  style={{ width: 70, textAlign: "center" }} >{props.new_deaths}</Text></View>
//         <View style={{
//             borderRightWidth: 1, borderColor: "#ddd",
//         }}><Text  style={{ width: 70, textAlign: "center" }} >{props.total_recovered}</Text></View>
//         <View style={{ borderRightWidth: 1, borderColor: "#ddd" }}>
//             <Text  style={{ width: 70, textAlign: "center" }} >{props.active_cases}</Text></View>

//     </View>)
// }