
import React from 'react'
import { Box, HStack, IconButton, Text } from 'native-base'
import Pie from '../assets/icons/Pipe_fill (1).svg';
import RightChevron from '../assets/icons/right.svg';
import { Dimensions, StyleSheet } from 'react-native';
const style = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        margin: 10,
        padding: 10,
        paddingVertical:20,
        borderRadius: 10,
    }
})
const AccountDetails = () => {
  return (
<Box
style={style.container}
>
    <HStack
           flexDirection='row'
           justifyContent='space-between'
           alignItems='center'
           width={Dimensions.get('screen').width * 0.8}
    >
    <HStack
    justifyContent='flex-start'
    alignItems="center"
    >
         <Pie />
    <Text color='black'
    marginLeft={2}
    fontFamily="OpenSans-regular"
    alignSelf='center'
    >Account Details</Text>
    </HStack>
{/* 
    <IconButton
    alignItems='flex-end'
    borderColor='#CFCFCF'
    borderWidth={1}
    size='md'
    _icon={{
        as: RightChevron,
        name: 'chevron-forward'
    }}
    /> */}
    <RightChevron />
    </HStack>
   
    
</Box>
  )
}

export default AccountDetails