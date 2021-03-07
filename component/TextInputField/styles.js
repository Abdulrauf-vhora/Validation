import React from 'react';
import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  TextInputstyle: {
    flex: 2,
    // borderWidth: 1,
    // marginVertical: moderateScale(12),

    paddingLeft: moderateScale(20),
    padding: moderateScale(12),
  },
  inputView: {
    flex: 1,
    padding: 5,
    // borderWidth: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'blue',
  },
  icon: {
    flex: 1,
    // height: moderateScale(30),
    // width: moderateScale(30),
    resizeMode: 'contain',
  },
  txtInput: {
    flex: 2,
    height: moderateScale(50),
    // borderWidth: 1,
    paddingLeft: 2,
  },
  iconSuccessTick: {
    flex: 1,
    // height: 20,
    // width: 20,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  invalid: {flex: 1},
});
export default styles;
