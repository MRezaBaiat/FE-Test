import React, { Suspense, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useWindowDimensions } from 'react-native';
import { routesStack } from '../app';

const Stack = createStackNavigator();

export default () => {
  const dimensions = useWindowDimensions();
  return (
      <Stack.Navigator
          initialRouteName={'builderx'}
          screenOptions={{
            animationTypeForReplace: 'push',
            headerShown: false,
            cardStyle: {
              width: dimensions.width,
              height: dimensions.height
            }
          }}>
                  {
                      Object.keys(routesStack).map((name) => {
                        return <Stack.Screen name={name} component={routesStack[name]}/>;
                      })
                  }
      </Stack.Navigator>
  );
};
