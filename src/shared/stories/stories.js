import React, { useEffect,useState } from 'react';
import {View,Text,FlatList,ActivityIndicator,ScrollView} from 'react-native'
import {Item} from './component/item';
 import axios from 'axios';
export  const Stories=(props)=>{

const [storiesData,updateStoriesData]=useState(null);

    // useEffect=(()=>{
    //     axios.get(`https://corona-app-backend.herokuapp.com/stories`)
    //     .then(function (response) {
    //         if (response.status == 200) {
    //             updateStoriesData(response.data)
    //         }
    //     })
    //     .catch(function (error) {
    //         // handle error
    //         console.log(error);
    //     }),[]
    // })


    useEffect(() => {
            axios.get('https://corona-app-backend.herokuapp.com/stories')
            .then( (response) =>{
                if (response.status == 200) {
                    updateStoriesData(response.data.stories)
                }
                console.log(response,"sto")
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    },[])

    return(<View style={{flex:1}}>
        {storiesData!=null&&storiesData.length>0?<FlatList
         data={storiesData}            
         renderItem={({ item,index }) => <Item itemList={item} index={index} {...props}/>}
         keyExtractor={item=>item[0]}
    
        />:<ActivityIndicator  size={"large"} color="#4972a6" />}
         
        
        </View>)
}