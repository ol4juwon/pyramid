import React from 'react';
import {Center, HStack, IconButton, Text} from 'native-base';
import Logo from '../assets/icons/Round.svg';
import {StyleSheet} from 'react-native';
const Screentitle = ({title}) => {
  return (
    <HStack style={style.container}>
      {/* <Logo /> */}
      <IconButton />
      <Center>
        <Text>{title}</Text>
      </Center>
      <IconButton />
    </HStack>
  );
};
const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
});
export default Screentitle;
