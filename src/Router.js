import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import OnBoardingStack from './navigation';
import {navigationRef} from './navigation/service';
const Router = () => {
  const routeNameRef = React.createRef();

  const renderNavigator = () => {
    return <OnBoardingStack />;
  };
  const onNavigationStateChange = async () => {
    if (!navigationRef?.current?.getCurrentRoute()) {
      return;
    }
    const currentRouteName = navigationRef.current.getCurrentRoute().name;
    routeNameRef.current = currentRouteName;
  };
  const onNavigationStateReady = () => {
    if (!navigationRef?.current?.getCurrentRoute()) {
      return;
    }
    return (routeNameRef.current =
      navigationRef.current.getCurrentRoute().name);
  };
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={onNavigationStateReady}
      onStateChange={onNavigationStateChange}>
      {renderNavigator()}
    </NavigationContainer>
  );
};

export default Router;
