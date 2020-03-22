import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from 'react-native-snap-carousel';

import { View, Text,Dimensions } from 'react-native';

const _renderItem = ({item, index}) => {
    return (
        <View style={{flex:1,width:"95%",alignSelf:"center",marginTop:10}}>
            <Text style={{textAlign:"center",fontSize:14,color:"#fff",backgroundColor:"#4972a6",padding:10,borderRadius:12}}>{item}</Text>
        </View>
    );
}

export const CurrentNews = (props) => {
    _carousel=null;
    const [currentNews, updateCurrentNews] = useState(null);
    useEffect(() => {
        axios.get(`https://corona-app-backend.herokuapp.com/banner`)
            .then((response) => {
                if (response.status == 200) {
                    updateCurrentNews(response.data)
                }
            })
            .catch(function (error) {
                // handle error
                console.log()
                console.log(error);
            })



    }, [])

    // return (<View><Text>{currentNews}</Text>
    // </View>)

    return (<View style={{height:150}}>
        {currentNews!=null? <View style={{flex:1}}><Carousel
        autoplay={true}
          ref={(c) => {_carousel = c; }}
          data={currentNews.banners}
    
          renderItem={_renderItem}
          sliderHeight={50}
          sliderWidth={Dimensions.get("window").width}
          itemWidth={Dimensions.get("window").width}
        />
        <View style={{backgroundColor:"#ddd",alignSelf:"flex-end",paddingHorizontal:30,borderTopLeftRadius:17,borderBottomLeftRadius:17}}><Text style={{color:"#000",paddingVertical:10,fontSize:14,fontWeight:"bold"}}>{`${currentNews.noOfBanners} Breaking News`}
            </Text>
            </View>
        </View>:null}
       
        </View>
    );
}