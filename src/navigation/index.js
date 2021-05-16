import React from 'react';
import List from '../containers/List';
import Details from '../containers/Details';
import {Constants} from '../utility';

import {createStackNavigator} from '@react-navigation/stack';

const OnBoardingStack = createStackNavigator();
const {
  SCREEN_NAMES: {LIST, DETAILS},
} = Constants;
const OnBoardingNavigationStack = () => {
  return (
    <OnBoardingStack.Navigator
      initialRouteName={LIST}
      screenOptions={{
        headerShown: false,
      }}>
      <OnBoardingStack.Screen name={LIST} component={List} />
      <OnBoardingStack.Screen name={DETAILS} component={Details} />
    </OnBoardingStack.Navigator>
  );
};
export default OnBoardingNavigationStack;
