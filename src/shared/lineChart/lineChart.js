

import React from 'react';
import { LineChart, YAxis, Grid, XAxis } from 'react-native-svg-charts'
import { View,Text } from 'react-native';

export const LineGraph = (props) => {

    const data = [0, 10, 20, 30, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

    const axesSvg = { fontSize: 10, fill: 'grey' };
    const verticalContentInset = { top: 10, bottom: 10 }
    const xAxisHeight = 30
    return (<View>
        <View style={{justifyContent:"center",alignItems:'center'}}>
            <Text style={{fontWeight:"bold",fontSize:18}}>{props.headerText}
        </Text>
        <Text>Linear Scale
        </Text>
        </View>
        <View style={{ height: 200, padding: 20, flexDirection: 'row' }}>
            <YAxis
                data={data}
                style={{ marginBottom: xAxisHeight }}
                contentInset={verticalContentInset}
                svg={axesSvg}
                formatLabel={(value, index) => index}

            />
            <View style={{ flex: 1, marginLeft: 10 }}>
                <LineChart
                    style={{ flex: 1 }}
                    data={data}
                    contentInset={verticalContentInset}
                    svg={{ stroke: 'rgb(134, 65, 244)' }}
                >
                    <Grid />
                </LineChart>
                <XAxis
                    style={{ marginHorizontal: -10, height: xAxisHeight }}
                    data={data}
                    formatLabel={(value, index) => index}
                    contentInset={{ left: 10, right: 10 }}
                    svg={axesSvg}
                />
            </View>
        </View>
    </View>
    )
}