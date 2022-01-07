import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../screens/main-screen/main.screen';

const Stack = createStackNavigator();

export default () => {
  return (
      <Stack.Navigator
          initialRouteName={'main'}
          screenOptions={{
            animationTypeForReplace: 'push',
            headerShown: false
          }}>
          <Stack.Screen name={'main'} component={MainScreen}/>
      </Stack.Navigator>
  );
};
