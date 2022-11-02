import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
import { Box } from "native-base";
  import React from 'react'
import { Dimensions } from "react-native";
  
  const Chart = () => {
    return (
      <Box
      style={{
        marginLeft: -52,
      }}
      >

        <LineChart
        data={{
            labels: ["1H", "1D", "1W", "1M", "1Y", "All"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100
                ]
              }
            ]
          }}
          width={Dimensions.get("window").width *0.9} // from react-native
    height={320}
    backgroundColor='#fffff'
    yLabelsOffset={0}
    padding={0}
    paddingLeft={0}
    // yAxisLabel="$"
    // yAxisSuffix="k"
    // yAxisInterval={1} // optional, defaults to 1
    withHorizontalLabels={false}
    withInnerLines={false}
    chartConfig={{
      backgroundColor: "#ffffff",
      backgroundGradientFrom: "#fff",
      backgroundGradientTo: "#fff",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `#00FF7F`,
      labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      style: {
        // borderRadius: 16,
        paddingLeft:0,
        backgroundColor: '#fff'
      },
    //   propsForDots: {
    //     r: "1",
    //     strokeWidth: "1",
    //     stroke: "#00FF7F"
    //   }
    }}
    bezier
    fromZero={true}
    style={{
    //   marginVertical: 8,
      borderRadius: 16
    }}
        />
      </Box>
    )
  }
  
  export default Chart