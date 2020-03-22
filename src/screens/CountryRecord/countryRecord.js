import React from 'react';
import {CountryRecordStory} from './countryRecordStory'

export const CountryRecord=({ navigation ,route})=>{
// alert(navigation.getParam("countryName"))
// alert(route.params.countryName+" navvvvv")
return(<CountryRecordStory
    {...route}
    {...navigation}/>)
}