import React from 'react';
import {TextInput, StyleSheet, View, Text, Image} from 'react-native';
import styles from './styles';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

const TextInputField = (props) => {
  const email = '../../assets/images/iconEmail.png';
  const pass = '../../assets/images/iconLock.png';
  const bdrWidth = props.border ? 2 : 0;
  const inputpress = props.color ? '#0F8FE3' : 'white';
  const borderTopRadius = props.TopRadius ? 20 : 0;
  const borderBottomRadius = props.BottomRadius ? 20 : 0;
  return (
    <View
      style={[
        // style.input,
        {
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',

          borderBottomWidth: bdrWidth,
          backgroundColor: props.bgColor,
          borderRadius: props.allBorders,
          borderTopEndRadius: borderTopRadius,
          borderTopStartRadius: borderTopRadius,
          borderBottomEndRadius: borderBottomRadius,
          borderBottomStartRadius: borderBottomRadius,
        },
      ]}>
      {props.data ? (
        <Image source={require(email)} style={styles.icon} />
      ) : (
        <Image source={require(pass)} style={styles.icon} />
      )}
      <TextInput {...props} style={styles.txtInput} />
      {props.tick ? (
        <Image
          source={require('../../assets/images/Green.png')}
          style={styles.iconSuccessTick}
        />
      ) : (
        <View style={styles.invalid}></View>
        // <Image source={require('../../assets/images/iconEmail.png')} />
        // <TextInput
        //   {...props}
        //   keyboardType={email}
        //   secureTextEntry={pass}
        //   style={styles.TextInputstyle}
        // />
        // <Image source={require('../../assets/images/iconVerified.png')} />
        //
      )}
    </View>
  );
};
export default TextInputField;
