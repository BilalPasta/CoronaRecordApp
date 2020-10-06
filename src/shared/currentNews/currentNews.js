import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from 'react-native-snap-carousel';

import { View, Text,Dimensions, ActivityIndicator } from 'react-native';

const _renderItem = ({item, index}) => {
    return (
        <View style={{flex:1,width:"98%",marginTop:10,opacity:0.77,alignSelf:"center"}}>
            <Text style={{textAlign:"center",fontSize:15,color:"#fff",backgroundColor:"#0a4958",padding:10,borderRadius:10}}>{item}</Text>
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
        //   autoplayDelay={2000}
          autoplayInterval={15000}

          renderItem={_renderItem}
          sliderHeight={50}
          sliderWidth={Dimensions.get("window").width}
          itemWidth={Dimensions.get("window").width}
        />
        <View style={{backgroundColor:"#0a4958",alignSelf:"flex-end",paddingHorizontal:30,borderTopLeftRadius:20,borderBottomLeftRadius:20,opacity:0.77}}><Text style={{color:"#ddd",paddingVertical:10,fontSize:14,fontWeight:"bold"}}>{`${currentNews.noOfBanners} Breaking News`}
            </Text>
            </View>
        </View>:<View style={{justifyContent:"center",alignItems:"center"}}><ActivityIndicator color="#ddd" size={"large"}/></View>}
       
        </View>
    );
}