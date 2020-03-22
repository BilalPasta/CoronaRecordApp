
import React, { useState, useEffect } from 'react';
import { View, Text,Image ,ActivityIndicator} from 'react-native'
import { styles } from './style';
import { Item } from './component/item';
import { Header } from './component/header';
import {BoxView} from '../boxView/boxView';
import {Table} from '../../shared'
import { GREY, SKY_BLUE, GREEN, RED } from '../colorConstant/color'
import axios from 'axios';
export const ConciseInfo = (props) => {
    const [data, updateData] = useState(null);
    useEffect(() => {
        if(props.countryName!=undefined){
            axios.get(`https://corona-app-backend.herokuapp.com/country/${(props.countryName.replace(/\s/g, '')).toLowerCase()}`)
            .then(function (response) {
                if (response.status == 200) {
                    updateData(response.data)
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        }
        else{
            axios.get('https://corona-app-backend.herokuapp.com/')
            .then(function (response) {
                if (response.status == 200) {
                    updateData(response.data)
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        }
        

    },[])

    return (<View style={styles.container}>
       {data!=null?<View style={{flex:1}}> 
        <Header lastUpdated={data.lastUpdated} />
        
        <View style={styles.row}>
            <Item
                headerText={"Coronavirus Cases:"}
                value={data.totalCases}
                color={GREY}

            />
            <Item
                headerText={"Death:"}
                value={data.totalDeaths}
                color={RED}
            />
            <Item
                headerText={"Recovered:"}
                value={data.totalRecovered}
                color={GREEN}

            />
        </View>
<View>
        <BoxView 
         headerText={data.firstBox.heading}
         name={data.firstBox.name}
         value={data.firstBox.value}
         extraInfo={data.firstBox.data}
         />
        <BoxView 
        name={data.secondBox.name}
        value={data.secondBox.value}
        extraInfo={data.secondBox.data}
         headerText={data.secondBox.heading} />
         {/* <Table {...props}/> */}
         {props.children}
         </View>
        </View>:<View style={{flex:1,justifyContent:"center",alignItems:"center"}}><ActivityIndicator size={"large"} style={{alignSelf:"center"}} color="#4972a6" /></View>} 
    </View>)
}