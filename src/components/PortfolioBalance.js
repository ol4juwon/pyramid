import { Box, VStack , Text} from 'native-base';
import React from 'react';
// import {Text} from 'react-native';

const PortfolioBalance = ({amount, interest, percent}) => {
  return ( <Box>
    <VStack>
      <Text >Portfolio Balance</Text>
      <Text fontSize={30}  fontWeight='600' fontStyle='normal'>${amount ? amount.toFixed(2) : '38,582.62'}</Text>
      <Text color="#00FF7F" >{`+${interest? interest : 0.00.toFixed(2)}`}{"("}{`${percent? percent : 0.00.toFixed(2)}`}{`%)`}</Text>
    </VStack>
  </Box>);
};

export default PortfolioBalance;
