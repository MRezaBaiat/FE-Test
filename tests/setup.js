import 'reflect-metadata';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import mockRNCNetInfo from '@react-native-community/netinfo/jest/netinfo-mock.js';
import 'react-native-gesture-handler/jestSetup';
import AppNavigator from "lifemate-react-dev-kit/src/navigation/app.navigator";

window.location = {
    assign: jest.fn(),
}
jest.mock('React', () => ({
    ...jest.requireActual('React'),
    memo: (c) => c
}));
jest.mock('react-native-reanimated', () => {
    const Reanimated = require('react-native-reanimated/mock');
    Reanimated.default.call = () => {};
    return Reanimated;
});
AppNavigator.navigateTo = jest.fn();
// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('@react-native-community/netinfo', () => mockRNCNetInfo);
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
global.fetch = require('jest-fetch-mock');
// Enzyme.configure({ adapter: new Adapter() });
