import React from 'react';
import { Text, TouchableOpacity, ViewStyle } from 'react-native';

interface Props {
    style?: ViewStyle,
    text: string,
    onClick: ()=> void
}
function Button (props: Props) {
  const {} = props;
  return (
    <TouchableOpacity>
        <Text>

        </Text>
    </TouchableOpacity>
  );
}

export default React.memo(Button);
