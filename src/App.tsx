import 'react-native-gesture-handler';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './redux/store';
import RootStack from './navigation/routes';

export default function App () {
  return (
      <Provider store={store}>
        <NavigationContainer fallback={<Text>Loading...</Text>}>
          <RootStack/>
        </NavigationContainer>
      </Provider>
  );
}
