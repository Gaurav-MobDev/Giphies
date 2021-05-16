import React from 'react';
import {StackActions} from '@react-navigation/native';

const navigationRef = React.createRef();

const navigate = (name, params) =>
  navigationRef.current?.navigate(name, params);

const pop = (screenCount = 1) =>
  navigationRef.current?.dispatch(StackActions.pop(screenCount));

const goBack = () => navigationRef.current?.goBack();

export {navigationRef, navigate, pop, goBack};
