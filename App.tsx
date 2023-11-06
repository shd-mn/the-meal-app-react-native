/**
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View></View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
