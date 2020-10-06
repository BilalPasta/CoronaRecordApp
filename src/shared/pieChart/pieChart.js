import React from 'react';
import {Dimensions,View,Text} from 'react-native';
// import { PieChart } from 'react-native-svg-charts'
import {

    PieChart,
   
  } from "react-native-chart-kit";
// import { Text } from 'react-native-svg'

export const PieChartComponent=(props)=> {

    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0
      };

        // const data = [
        //     {
        //         key: 1,
        //         amount: 50,
        //         svg: { fill: '#600080' },
        //     },
        //     {
        //         key: 2,
        //         amount: 50,
        //         svg: { fill: '#9900cc' }
        //     },
        //     {
        //         key: 3,
        //         amount: 40,
        //         svg: { fill: '#c61aff' }
        //     },
        //     {
        //         key: 4,
        //         amount: 95,
        //         svg: { fill: '#d966ff' }
        //     },
        //     {
        //         key: 5,
        //         amount: 35,
        //         svg: { fill: '#ecb3ff' }
        //     },
        //     {
        //         key: 5,
        //         amount: 35,
        //         svg: { fill: '#ecb3ff' }
        //     }
        // ]
// let str=props.data[0].total_cases;
// // str.replace(/,/g,"")
// alert(str)

console.log(props.data,"pie,pie")
        const totalCases = [
            {
              name: props.data[0].name,
              population: Number(props.data[0].total_cases.replace(/,/g,"")),
              color: "#81ddc6",
              legendFontColor: "#7F7F7F",
              legendFontSize: 15
            },
            {
              name: props.data[1].name,
              population: Number(props.data[1].total_cases.replace(/,/g,"")),
              color: "#f45d58",
              legendFontColor: "#7F7F7F",
              legendFontSize: 15
            },
            {
              name: props.data[2].name,
              population: Number(props.data[2].total_cases.replace(/,/g,"")),
              color: "#50514f",
              legendFontColor: "#7F7F7F",
              legendFontSize: 15
            },
            {
              name: props.data[3].name,
              population: Number(props.data[3].total_cases.replace(/,/g,"")),
              color: "#eec583",
              legendFontColor: "#7F7F7F",
              legendFontSize: 15
            },
            {
              name: props.data[4].name,
              population: Number(props.data[4].total_cases.replace(/,/g,"")),
              color: "#5997cf",
              legendFontColor: "#7F7F7F",
              legendFontSize: 15
            }
          ];


          const deathCases = [
            {
              name: props.data[0].name,
              population: Number(props.data[0].total_deaths.replace(/,/g,"")),
              color: "#81ddc6",
              legendFontColor: "#7F7F7F",
              legendFontSize: 15
            },
            {
              name: props.data[1].name,
              population: Number(props.data[1].total_deaths.replace(/,/g,"")),
              color: "#f45d58",
              legendFontColor: "#7F7F7F",
              legendFontSize: 15
            },
            {
              name: props.data[2].name,
              population: Number(props.data[2].total_deaths.replace(/,/g,"")),
              color: "#50514f",
              legendFontColor: "#7F7F7F",
              legendFontSize: 15
            },
            {
              name: props.data[3].name,
              population: Number(props.data[3].total_deaths.replace(/,/g,"")),
              color: "#eec583",
              legendFontColor: "#7F7F7F",
              legendFontSize: 15
            },
            {
              name: props.data[4].name,
              population: Number(props.data[4].total_deaths.replace(/,/g,"")),
              color: "#5997cf",
              legendFontColor: "#7F7F7F",
              legendFontSize: 15
            }
          ];
          
        // const Labels = ({ slices, height, width }) => {
        //     return slices.map((slice, index) => {
        //         const { labelCentroid, pieCentroid, data } = slice;
        //         return (
        //             <Text
        //                 key={index}
        //                 x={pieCentroid[ 0 ]}
        //                 y={pieCentroid[ 1 ]}
        //                 fill={'white'}
        //                 textAnchor={'middle'}
        //                 alignmentBaseline={'middle'}
        //                 fontSize={20}
        //                 stroke={'black'}
        //                 strokeWidth={0}
        //             >
        //                 {data.amount}
        //             </Text>
        //         )
        //     })
        // }

    //     return (
    //         <PieChart
    //             style={{ height: 200 }}
    //             valueAccessor={({ item }) => item.amount}
    //             data={data}
    //             spacing={0}
    //             outerRadius={'100%'}
    //         >
    //             <Labels/>
    //         </PieChart>
    //     )
    // }
return(<View style={{justifyContent:"center",alignItems:"center",width:"90%",alignSelf:"center"}}>
<Text style={{textAlign:"center",fontSize:15,fontWeight:"bold"}}>Coronavirus: worst affected areas, by confirmed cases and deaths
    </Text>
    <PieChart
    animate={true}
    data={totalCases}
    width={Dimensions.get("window").width}
    height={220}
    chartConfig={chartConfig}

    accessor="population"
    backgroundColor="transparent"
    paddingLeft="15"
    // absolute
  />
  <PieChart
    data={deathCases}
    width={Dimensions.get("window").width}
    height={220}
    chartConfig={chartConfig}

    accessor="population"
    backgroundColor="transparent"
    paddingLeft="15"
    // absolute
  />
  </View>)

}

