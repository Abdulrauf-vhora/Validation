import React from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from '../../component/Button/styles';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
const Button = (props) => {
  const textColor = props.color === 'white' ? '#7B859A' : 'white';
  return (
    <View style={styles.ButtonView}>
      <Pressable
        {...props}
        style={[
          styles.ButtonStyle,
          {
            borderRadius: props.allBorders,
            borderTopRightRadius: props.borderTop,
            borderTopLeftRadius: props.borderTop,
            borderBottomRightRadius: props.borderBottom,
            borderBottomLeftRadius: props.borderBottom,
            backgroundColor: props.color,
          },
        ]}>
        <Text style={[styles.ButtonText, {color: textColor}]}>
          {props.name}
        </Text>
      </Pressable>
    </View>
  );
};
export default Button;
