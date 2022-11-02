import { Box, HStack, ScrollView, Text } from 'native-base'
import React, { useState } from 'react'
import { Dimensions, StyleSheet, TouchableHighlight } from 'react-native'
const style = StyleSheet.create({
    active: {
        backgroundColor: '#111111',  
        borderRadius: 20,
        paddingHorizontal: 5,
        marginHorizontal: 3,
        overflow: 'scroll',
        color: 'white',
    },
    inactive: {
        backgroundColor: '#F5F5F5',  
        color:'black',
        borderRadius: 20,
        paddingHorizontal: 5,
        marginHorizontal: 3
    },
    scroll:{
        // width: Dimensions.get('screen').width,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 2,
        marginVertical: 3,
    }
})
const Categories = () => {
    const [isActive,setIsActive] = useState(1)
    const list = [
        {
            id: 1,
            name: 'Overview',
        },
        {
            id: 2,
            name: 'Art',
        },
        {
            id: 3,
            name: 'Crypto',
        },
        {
            id: 4,
            name: 'Stocks',
        },
        {
            id: 5,
            name: 'Estate',
        },
    ]
  return (
    <HStack>
        <ScrollView
        contentContainerStyle={style.scroll}
        horizontal={true}
        >
{
    list.map((item) => {
        return (
        <TouchableHighlight onPress={() => setIsActive(item.id)}>
        <Box  key={item.id} style={isActive === item.id ? style.active : style.inactive} paddingX={4}>
            
            <Text color={isActive === item.id ? 'white': 'black'}>{item.name}</Text></Box>
     
        </TouchableHighlight>)

        
    }
    )

}
</ScrollView>
    </HStack>
  )
}

export default Categories