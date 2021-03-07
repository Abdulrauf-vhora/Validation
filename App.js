import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Login from './screens/Login';
import UseStateExample from './component/hooks/UseStateExample';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* */}
      <Login />
      {/* <UseStateExample /> */}
      {/* <Text style={{fontFamily: 'Lato-Black'}}>KEvin</Text> */}
    </View>
  );
};
export default App;
