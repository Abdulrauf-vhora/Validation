import React from 'react';
import {StyleSheet} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
const styles = StyleSheet.create({
  ScrollStyle: {
    backgroundColor: '#F7F8F9',
  },
  MainView: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: 'green',
    alignItems: 'center',
    alignContent: 'center',
    padding: moderateScale(35),
  },
  TextKeep: {
    // fontWeight: 'bold',
    fontSize: 22,
    justifyContent: 'flex-start',
    marginVertical: moderateScale(5),
    // fontFamily: 'Bold',
    fontFamily: 'Roboto-Bold',
  },
  TextLearn: {
    fontSize: 14,
    fontFamily: 'Bold.ttf',
    // fontFamily: 'Lato-Black',
  },
  ImageTop: {
    marginHorizontal: moderateScale(10),

    resizeMode: 'contain',
    marginTop: moderateScale(30),
    // backgroundColor: 'red',
  },
  MiddleView: {
    // backgroundColor: 'orange',
    flex: 1,

    marginHorizontal: moderateScale(30),
  },
  TextInputEmail: {
    // backgroundColor: 'red',
    borderTopLeftRadius: moderateScale(5),
    borderTopRightRadius: moderateScale(5),
  },

  TextRemember: {
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: 12,
    flexDirection: 'row',
  },

  TextLoginWith: {
    alignItems: 'center',
    textAlign: 'center',
    color: '#7B859A',
    fontSize: 12,
  },
  ImageSocial: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    justifyContent: 'space-evenly',
    // bagroundColor: 'red',
    marginHorizontal: 75,
    marginVertical: 15,
    // marginVertical: '8%',
    marginBottom: 25,
  },
  TextTerms: {
    color: '#1F59B6',
    textDecorationLine: 'underline',
  },
});
export default styles;
