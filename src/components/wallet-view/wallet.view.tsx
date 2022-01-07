import React, { useEffect, useMemo, useState } from 'react';
import { CurrencySymbols, CurrencyType } from '../../models';
import styles from './styles';
import { Text, View, ViewStyle } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import useBalance from '../../hooks/use.balance';

interface Props {
    type: CurrencyType,
    zIndex: number,
    onChange: (type: CurrencyType)=> void,
    style?: ViewStyle
}
function WalletView (props: Props) {
  const { type, onChange, zIndex } = props;
  const balance = useBalance(type);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(type);
  useEffect(() => {
    onChange(value);
  }, [value]);

  const items = useMemo(() => Object.values(CurrencyType).map((type) => {
    return {
      label: type,
      value: type
    };
  }), []);

  return (
      <View style={styles.container}>
          <DropDownPicker
              open={open}
              zIndex={zIndex}
              value={type}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
          />
          <Text style={styles.balanceText}>
              Balance: {balance.toFixed()}{CurrencySymbols[type]}
          </Text>
      </View>
  );
}

export default React.memo(WalletView);
