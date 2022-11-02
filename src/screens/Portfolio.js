import React from 'react';
import {Text, View} from 'react-native';
import {Box, ScrollView} from 'native-base';
import PortfolioBalance from '../components/PortfolioBalance';
// import Screentitle from '../components/Screentitle';
import Categories from '../components/Categories';
import DisplayText from '../components/DisplayText';
import AccountDetails from '../components/AccountDetails';
import Chart from '../components/Chart';
import BottomNav from '../components/BottomNav';

const Portfolio = () => {
  const list = [
    {
      id: 1,
      name: 'Invested in Assets',
      value: 1000,
    },
    {
      id: 2,
      name: 'Cash Balance',
      value: 100,
    },
  ]
  return (
    <View>
      <Box padding={4} bgColor={'white'} height={'full'}>
        <ScrollView>
        <PortfolioBalance />
        <Chart />
        <Categories />
        {
          list.map((item) => {
            return <DisplayText key={item.id} title={item.name} value={item.value} />
          })
        }
        <AccountDetails />
        </ScrollView>
       
      </Box>
      <Box position="absolute" bottom="0">
<BottomNav />
      </Box>
    </View>
  );
};

export default Portfolio;
