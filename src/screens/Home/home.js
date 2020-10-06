
import React,{useEffect,useState} from 'react';
import { Text, View, Animated, StyleSheet ,Image,Dimensions,TouchableOpacity} from 'react-native';
import {SKY_BLUE} from '../../shared/colorConstant/color';
import StickyParallaxHeader from 'react-native-sticky-parallax-header';
import {ConciseInfo,BoxView,LineGraph,Table,PieChartComponent,Stories,CurrentNews} from '../../shared'
// export const HomeScreen =({ navigation })=> {
//     return (
//       <View style={{ flex: 1, }}>
//         <Button
//           onPress={() => navigation.navigate('History')}
//           title="Go to history"
//         />
//          <Button
//           onPress={() => navigation.navigate('CountryRecord')}
//           title="Go to Country Record"
//         />
//       </View>
//     );
//   }  

  const styles = StyleSheet.create({
    content: {
      flex:1,
      marginTop: 10
    },
    foreground: {
      flex: 1,
      // backgroundColor:"#41cbc7",
      backgroundColor:"#01b6ad",
      justifyContent: 'center',
      alignItems:"center",

    },
    message: {
      color: 'white',
      textAlign:"center",
      fontSize: 15,
      paddingTop: 24,
      paddingBottom: 7
    },
    headerWrapper: {
      backgroundColor: "#01b6ad",
      width: '100%',
      flexDirection:"row",
      // paddingHorizontal: 24,
      paddingBottom: 25,
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerTitle: {
      fontSize: 18,
      flex:1,
      color: '#ddd',
      margin: 12,
      fontWeight:"bold"
    },
    tabsWrapper: {
      paddingVertical: 12
    },
    tabTextContainerStyle: {
      backgroundColor: 'transparent',
      paddingHorizontal:10,
      
      borderRadius: 18
    },
    tabTextContainerActiveStyle: {
      backgroundColor: "#d8c8b5"
    },
    tabText: {
      fontSize: 16,
      lineHeight: 20,
      paddingHorizontal: 12,
      paddingVertical: 8,
      color: 'white'
    }
  })
   
  export const HomeScreen =({ navigation })=> {
  const [scroll] = useState(new Animated.Value(0));
  const [key,Refresh]=useState(Math.random())
    
   
    useEffect(()=>{
      scroll.addListener(({ value }) => (value))

    }) 
   
  const  renderContent = (label) => (
      <View style={styles.content}>
      <Text>{label}</Text>
      </View>
    )
   
  const  renderForeground = () => {
      const titleOpacity = scroll.interpolate({
        inputRange: [0, 106, 154],
        outputRange: [1, 1, 0],
        extrapolate: 'clamp'
      })
   
      return (
        <View style={styles.foreground}>
          <Animated.View style={{ opacity: titleOpacity }}>
            <Text style={{color:"#ddd",fontWeight:"bold",fontSize:30,textAlign:"center"}}>Latest Update</Text>
            {/* <Text style={styles.message}>Current News dewdsfdsfds fskdjbfjhkdsb skdjnfkjdsbf sdfkjbdskjfb dsfkjnfkjsdb asdfjnfakjdsbfn wfdlknflsnf dsflknlkn dfslknflkn
            sdfgd
            dfg
            df
            gifdf
            gifdfg
            d
            fg
            df
            g
            df
            g
            df
            gifdfg
          eorfimorifgmneior omrfopmeiprgmf elrmfgpeormpom ermgperjgpo eromgpoergmpoerm kmgoemrpgjop poerjgpoergpo gerompoermgpo ergompoerkgpoerkg erpogpoerkg</Text> */}
          <CurrentNews/>
          </Animated.View>
        </View>
      )
    }

    const renderSymptoms=()=>{
      return(<View style={{height:700}}>

        <View  style={{width:"85%",backgroundColor:"#d8c8b5",padding:8,borderTopRightRadius:18,borderBottomRightRadius:18,marginTop:10}}><Text style={{textAlign:"center",fontSize:15,color:"#fff",fontWeight:"bold"}}>        Typical Symptoms
</Text></View>
      <View style={{width:"90%",alignSelf:"center"}}>
        <Text style={{fontSize:15,color:"#494949",textAlign:"center",fontWeight:"bold"}}>COVID-19 typically causes flu-like symptoms including a fever and cough.
</Text>
<Text style={{color:"#494949"}}>In some patients - particularly the elderly and others with other chronic health conditions - these symptoms can develop into pneumonia, with chest tightness, chest pain, and shortness of breath.

It seems to start with a fever, followed by a dry cough.

After a week, it can lead to shortness of breath, with about 20% of patients requiring hospital treatment.

Notably, the COVID-19 infection rarely seems to cause a runny nose, sneezing, or sore throat (these symptoms have been observed in only about 5% of patients). Sore throat, sneezing, and stuffy nose are most often signs of a cold.
  </Text>
  </View>
  <View  style={{width:"85%",backgroundColor:"#01b6ad",padding:15,borderTopLeftRadius:25,marginTop:10,alignSelf:"flex-end"}}>
    <Text style={{textAlign:"center",fontSize:15,color:"#fff",fontWeight:"bold"}}> Pre-existing conditions </Text> 
    <View style={{width:"90%"}}>
<Text style={{color:"#fff"}}>
Pre-existing illnesses that put patients at higher risk:{"\n\n"}

1- cardiovascular disease{"\n\n"}
2- diabetes{"\n\n"}
3- chronic respiratory disease{"\n\n"}
4- hypertension{"\n\n\n"}
That said, some otherwise healthy people do seem to develop a severe form of pneumonia after being infected by the virus. The reason for this is being investigated as we try to learn more about this new virus.
  </Text>
  </View>
    </View>



        </View>)
    }

    const renderInfo=()=>{

      return(<View >
        {/* <Image source={require("../../../assets/loader.gif")} /> */}
        <ConciseInfo >
        {/* <BoxView
         headerText={"ACTIVE CASES"}
        />
        <BoxView
                 headerText={"CLOSED CASES"}
                 /> */}
        {/* <LineGraph
         headerText={"Total Cases"}
        />
        <LineGraph
         headerText={"Death Cases"}
        /> */}
        <Table {...navigation}/>

        </ConciseInfo>
        


        </View>)
    }
   

const renderStories=()=>{
  return <View  ><Stories/></View>
}

   const renderHeader = () => {
      // const { scroll } = this.state
      const opacity = scroll.interpolate({
        inputRange: [0, 160, 210],
        outputRange: [0, 0, 1],
        extrapolate: 'clamp'
      })
   
      return (
        <View style={styles.headerWrapper}>
          <Animated.View style={{ opacity,flex:1}}>
          <Text style={styles.headerTitle}
          > Corona Updates</Text>
        
          </Animated.View>
          <TouchableOpacity 
          onPress={()=>Refresh(Math.random())}
          style={{backgroundColor:"red",padding:10,marginVertical:4,borderTopLeftRadius:24,borderBottomLeftRadius:24,backgroundColor:"#ddd",alignSelf:"center"}}>
          <Text style={{justifyContent:"flex-end",fontSize:15,fontWeight:"bold",color:"#0a4958"}}
          > Update me</Text>
          </TouchableOpacity>
        </View>
      )
    }
   
   
      return (
        <StickyParallaxHeader
        key={key}
          foreground={renderForeground()}
          header={renderHeader()}
          parallaxHeight={200}
          headerHeight={50}
          headerSize={() => {}}
          onEndReached={() => {}}
          scrollEvent={Animated.event([{ nativeEvent: { contentOffset: { y: scroll } } }])}
          tabs={[
            {
              title: 'Info',
              content:renderInfo()
            },
            {
              title: 'Symptoms',
              content: renderSymptoms()
            },
      
            {
              title: 'Stories',
              content: renderStories()
            },
           
          ]}
          tabTextStyle={styles.tabText}
          tabTextContainerStyle={styles.tabTextContainerStyle}
          tabTextContainerActiveStyle={styles.tabTextContainerActiveStyle}
          tabsContainerBackgroundColor=  {"#0a4958"}  
          // {"#d8c8b5"}
          tabsWrapperStyle={styles.tabsWrapper}
        >
        </StickyParallaxHeader>)
  }