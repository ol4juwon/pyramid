import { HStack,Box, Text,  } from 'native-base'
import React from 'react'
import { StyleSheet,Dimensions } from 'react-native'
const style = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: '#CFCFCF',
        borderWidth: 1,
        margin: 10,
        padding: 10,
        paddingVertical:20,
        borderRadius: 10,
    
    }
})
const DisplayText = ({title, value}) => {
  return (
    <Box style={style.container}>
        <HStack
        flexDirection='row'
        justifyContent='space-between'
        // paddingX={1}
        width={Dimensions.get('screen').width * 0.8}
        >
        <Text color='#707070'>{title? title : 'loading...'}</Text>
        <Text color='black'>${value? value : '0.00'}</Text>
        </HStack>
        
        </Box>
  )
}

export default DisplayText