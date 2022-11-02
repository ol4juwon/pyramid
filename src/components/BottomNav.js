import { HStack, IconButton } from 'native-base'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Dimensions } from 'react-native';
import Home from '../assets/icons/home.svg';
import Search from '../assets/icons/Search icon.svg';
import Plus from '../assets/icons/plus.svg';
import Portfolio from '../assets/icons/portfolio.svg';
import Bell from '../assets/icons/Bell Stroke Icon.svg';
const BottomNav = () => {
  return (
    <HStack
      justifyContent="space-between"
      w={Dimensions.get('screen').width}
      h={Dimensions.get('screen').height * 0.1}
      paddingTop="1"
      paddingBottom={4}
      px="2"
      shadow="1"
      alignItems="center"
      bg={'white'}>
       <IconButton 
       _icon={{
        as: Home,
        name: 'search'

       }}
       />
       <IconButton
          _icon={{
        as: Search,
        name: 'search'

       }}
       />
        <IconButton
          _icon={{
        as: Plus,
        name: 'search'

       }}
       />
        <IconButton
          _icon={{
        as: Bell,
        name: 'search'

       }}
       />
        <IconButton
          _icon={{
        as: Portfolio,
        name: 'search'

       }}
       />
        </HStack>
  )
}

export default BottomNav