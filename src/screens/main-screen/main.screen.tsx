import React, { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';
import styles from './styles';
import useBalance from '../../hooks/use.balance';
import { CurrencySymbols, CurrencyType } from '../../models';
import { useDispatch } from 'react-redux';
import { actionConvert } from '../../redux/actions/currencies.actions';
import WalletView from '../../components/wallet-view/wallet.view';
import { actionExchange } from '../../redux/actions/wallet.actions';
import { ExchangeSession } from '../../models/exchange.session';
import useLoader from '../../hooks/use.loader';
import { round } from '../../utils';
import AppButton from '../../components/app-button/app.button';

function MainScreen () {
  const loaded = useLoader();
  return (
    <SafeAreaView>
        {
            loaded ? <MainView/> : <LoadingView/>
        }
    </SafeAreaView>
  );
}

const MainView = () => {
  const dispatch = useDispatch();
  const [hasError, setHasError] = useState(false);
  const [session, setSession] = useState({
    fromAmount: 0,
    toAmount: 0,
    fromType: CurrencyType.EUR,
    toType: CurrencyType.USD
  } as ExchangeSession);

  const balance = useBalance(session.fromType);

  const exchange = useCallback(() => {
    dispatch(actionExchange(session));
    setSession({ ...session, fromAmount: 0, toAmount: 0 });
  }, [session]);

  useEffect(() => {
    setHasError(Boolean(session.fromAmount && session.fromAmount > balance));
  }, [session.fromAmount, balance]);

  useEffect(() => {
    setSession({ ...session, fromAmount: 0, toAmount: 0 });
  }, [session.fromType, session.toType]);

  return (
        <View style={styles.container}>
            <Text style={styles.baseBoard}>
                1{CurrencySymbols[session.fromType]} = {round(dispatch(actionConvert(session.fromType, session.toType, 1)))}{CurrencySymbols[session.toType]}
            </Text>
            <View style={styles.box}>
                <WalletView
                    type={session.fromType}
                    zIndex={2}
                    onChange={(type) => setSession({ ...session, fromType: type })}
                />
                <TextInput
                    testID={'from-input'}
                    value={String(session.fromAmount || '')}
                    keyboardType={'numeric'}
                    style={styles.input}
                    placeholder={'from...'}
                    autoFocus={true}
                    onChangeText={(text) => {
                      setSession({
                        ...session,
                        fromAmount: Number(text || 0),
                        toAmount: Number(dispatch(actionConvert(session.fromType, session.toType, Number(text))))
                      });
                    }}
                />
            </View>

            {
                hasError &&
                <Text
                    testID={'error-text'}
                    style={styles.errorTxt}>
                    Exceeds Balance
                </Text>
            }
            <TouchableHighlight
                style={styles.switch_container}
                onPress={() => setSession({
                  fromAmount: session.toAmount,
                  toAmount: session.fromAmount,
                  fromType: session.toType,
                  toType: session.fromType
                })}>
                <Image
                    style={styles.switch_icon}
                    source={require('../../assets/switch_icon.png')}
                />
            </TouchableHighlight>
            <View style={styles.box}>
                <WalletView
                    type={session.toType}
                    zIndex={1}
                    onChange={(type) => setSession({ ...session, toType: type })}
                />

                <TextInput
                    testID={'to-input'}
                    value={String(session.toAmount || '')}
                    keyboardType={'numeric'}
                    placeholder={'to...'}
                    style={styles.input}
                    onChangeText={(text) => {
                      setSession({
                        ...session,
                        fromAmount: Number(dispatch(actionConvert(session.fromType, session.toType, Number(text)))),
                        toAmount: Number(text || 0)
                      });
                    }}
                />
            </View>
            {
                !hasError &&
                <AppButton
                    style={styles.exchangeBtn}
                    text={'Exchange'}
                    onPress={exchange}
                />
            }
        </View>
  );
};

const LoadingView = () => {
  return (
        <View style={styles.container}>
            <ActivityIndicator size={'large'} color={'red'}/>
        </View>
  );
};

export default React.memo(MainScreen);
