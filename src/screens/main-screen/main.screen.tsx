import React from 'react';
import {SafeAreaView, Text, View} from "react-native";
import styles from './styles';

function MainScreen () {
  return(
    <SafeAreaView>
        <View style={styles.container}>
            <Text>
                Main Screen
            </Text>
        </View>
    </SafeAreaView>
  )
}

export default React.memo(MainScreen);
