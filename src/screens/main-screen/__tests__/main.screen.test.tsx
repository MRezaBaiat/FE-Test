import React, { useState } from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react-native';
import { renderHook, act } from '@testing-library/react-hooks';
import { mockAsyncFnc, wrapper, wait } from '../../../../tests/test.utils';
import MainScreen from '../main.screen';
import useLoader from '../../../hooks/use.loader';

afterEach(cleanup);

describe('main.screen', () => {
  test('renders correctly', () => {
    render(<MainScreen/>, { wrapper });
  });

  test('test useLoader() hook', async () => {
    const hook = renderHook(() => useLoader(), {
      wrapper
    });
    expect(hook.result.current).toEqual(true);
  });

  test('Test inputs working correctly', async () => {
    const { getByTestId } = render(<MainScreen/>, { wrapper });
    const fromInput = getByTestId('from-input');
    const toInput = getByTestId('to-input');
    fireEvent.changeText(fromInput, '100');
    expect(toInput.props.value).toEqual('1500');
  });

  test('Test error will be displayed when from amount is bigger than balance', async () => {
    const { getByTestId, getAllByTestId } = render(<MainScreen/>, { wrapper });
    const fromInput = getByTestId('from-input');
    fireEvent.changeText(fromInput, '10000');
    expect(getAllByTestId('error-text').length).toEqual(1);
  });
});
