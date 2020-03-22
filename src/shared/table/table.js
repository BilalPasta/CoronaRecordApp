import React,{useState,useEffect} from 'react';
import {View,Text,FlatList,ScrollView,ActivityIndicator} from 'react-native';
import {TableItem} from './component/tableItem';
import {TableHeader} from './component/tableHeader';
import {PieChartComponent} from '../../shared'
import axios from 'axios'
const headerData=["Country,\nOther ","Total\nCases ","New\nCases ","Total\nDeaths ","Total\nRecovered ","Active\nCases ","Serious,\nCritical ","Tot Cases/\n1M pop"]


export  const Table=(props)=>{
    const [countryData, updateCountryData] = useState(null);

    useEffect(() => {
        axios.get('https://corona-app-backend.herokuapp.com/table')
            .then(function (response) {
                if (response.status == 200) {
                    updateCountryData(response.data.countryData)
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    },[])
    return(<View 
         >
             {console.log(countryData,"countryDatacountryDatacountryData")}
     
    {countryData!=null?<View>
        {countryData!=null&&countryData.length>0?<PieChartComponent data={countryData.slice(0, 5)}/>: null }  
        {countryData!=null&&countryData.length>0?<TableHeader/>: null }  
        <FlatList
         data={countryData}            
         renderItem={({ item,index }) => <TableItem {...item} index={index} {...props}/>}
         keyExtractor={item => item.name}
        />
        </View>:<ActivityIndicator size={"large"} style={{alignSelf:"center"}} color="#4972a6" />}
        
        </View>)
}