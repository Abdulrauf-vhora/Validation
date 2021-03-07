import React from 'react';
import {StyleSheet} from 'react-native';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
const styles = StyleSheet.create({
  //   ButtonLogin: {
  //     // backgroundColor: '#0F8FE3',

  //     borderRadius: 10,
  //     backgroundColor: '#0F8FE3',
  //     padding: 15,
  //     marginVertical: 5,
  //     alignItems: 'center',
  //     // backgroundColor: 'green',
  //     marginTop: 10,
  //   },
  ButtonView: {
    flex: 1,
    // padding: 5,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: moderateVerticalScale(55),
    // backgroundColor: 'red',
    // elevation: 6,
  },
  ButtonStyle: {
    marginVertical: moderateScale(5),
    flex: 1,
    width: '99%',
    alignItems: 'center',
    justifyContent: 'center',
    // elevation: 6,

    // borderWidth: 1,
  },
  ButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
export default styles;
