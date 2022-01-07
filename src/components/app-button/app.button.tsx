import React from 'react';
import { Text, TouchableOpacity, ViewStyle } from 'react-native';

interface Props {
    style?: ViewStyle,
    text: string,
    onPress: ()=> void
}
function AppButton (props: Props) {
  const { onPress, text, style } = props;
  return (
    <TouchableOpacity style={style} onPress={onPress}>
        <Text style={{ color: 'white' }}>
            {text}
        </Text>
    </TouchableOpacity>
  );
}

export default React.memo(AppButton);
