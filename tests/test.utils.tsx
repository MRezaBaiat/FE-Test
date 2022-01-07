import React from 'react';
import store from '../src/redux/store';
import { Provider } from 'react-redux';

export const mockAsyncFnc = (resolve?: any) => {
  return jest.fn().mockReturnValue(Promise.resolve(resolve));
};

export const mockStore = () => {
  return store;
};

export const createTestProps = (props) => ({
  ...props
});

const ReduxProvider = ({ children, reduxStore }) => (
    <Provider store={reduxStore}>{children}</Provider>
);

export const wrapper = ({ children }) => (
    <ReduxProvider reduxStore={mockStore()}>{children}</ReduxProvider>
);

export const createRouteParams = (params) => {
  return {
    route: { params: { ...params } }
  };
};

export const wait = (duration: number) => {
  return new Promise((resolve) => setTimeout(resolve, duration));
};
