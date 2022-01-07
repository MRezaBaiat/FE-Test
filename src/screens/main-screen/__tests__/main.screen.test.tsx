import React, { useState } from 'react';
import { cleanup, fireEvent, render, act } from '@testing-library/react-native';
import { mockAsyncFnc, wrapper } from '../../../../tests/test.utils';
import MainScreen from '../main.screen';

afterEach(cleanup);

describe('main.screen', () => {
  test('renders correctly', () => {
    render(<MainScreen/>, { wrapper });
  });

  test('login button should display error if mobile is not valid', async () => {
    const { getByTestId, UNSAFE_getAllByType } = render(<MainScreen/>, { wrapper });
    const mobileInput = getByTestId('mobile_input');
    const registerButton = getByTestId('register_button');
    fireEvent.changeText(mobileInput, '09305211601');
    await act(() => {
      return fireEvent.press(registerButton);
    });
    expect(UNSAFE_getAllByType(Hint).length).toEqual(1);
  });

  test('login button should pass if mobile is valid', async () => {
    SocketService.authApi().signIn = mockAsyncFnc();
    const { getByTestId, UNSAFE_getAllByType } = render(<LoginScreen/>, { wrapper });
    const mobileInput = getByTestId('mobile_input');
    const registerButton = getByTestId('register_button');
    fireEvent.changeText(mobileInput, '989305211601');
    await act(() => {
      return fireEvent.press(registerButton);
    });
    expect(SocketService.authApi().signIn).toBeCalledTimes(1);
    expect(() => UNSAFE_getAllByType(Hint)).toThrow();
  });
});
