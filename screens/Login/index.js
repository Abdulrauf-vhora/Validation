import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView, Image, Keyboard, Pressable} from 'react-native';
import styles from './styles';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import TextInputField from '../../component/TextInputField';
import Button from '../../component/Button';

const Login = () => {
  const [remember, setRemeber] = useState(false);
  const [emailChecked, isEmailChecked] = useState(false);
  const [passChecked, isPassChecked] = useState(false);

  const [verify, isVerify] = useState(false);
  const [Focus, isFocus] = useState(1);
  // const [vhora, Abdul] = useState(1);

  // const inputPress = () => {
  //   // const backcolor = props.color === 'white' ? '#7B859A' : 'white';
  // };
  const rememberPress = () => {
    isVerify((previousState) => !previousState);
  };

  // Email Validation
  // let emailInput;
  const [emailInput, setEmailInput] = useState('');
  const emailValidation = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(emailInput) === false) {
      console.log('Emai not  Correct');
      isEmailChecked(false);
    } else {
      isEmailChecked(true);
      console.log('Email is Correct');
    }
  };

  // Password Validation
  let [passInput, isPassInput] = useState('');
  const passValidation = () => {
    var strongRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})');

    if (strongRegex.test(passInput) === false) {
      console.log('Password  Not Correct');
      isPassChecked(false);
    } else {
      isPassChecked(true);
      console.log('Password  Correct');
    }
  };
  // };
  useEffect(() => {
    emailValidation();
    passValidation();
  }, [emailInput, passInput]);

  return (
    <ScrollView style={styles.ScrollView}>
      {/* <View
        style={{
          backgroundColor: 'red',
          margin: 10,
          padding: 10,
          // justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Pressable onPress={() => Abdul(vhora + 2)}>
          <Text style={{color: 'white'}}>CLick me {vhora}</Text>
        </Pressable>
      </View> */}

      <View style={styles.MainView}>
        <View>
          <Text style={styles.TextKeep}>Keep Connected</Text>
          <Text style={styles.TextLearn}>
            Learn Graphic and UI/UX designing in Hindi for free with live
            projects.
          </Text>
          <Image
            style={styles.ImageTop}
            source={require('../../assets/images/topLogo.png')}
          />
          {/* source={require('../../assesets/images/logo.png')} */}
        </View>
      </View>
      <View style={styles.MiddleView}>
        <View>
          <TextInputField
            placeholder={'Email Address'}
            keyboard={'email'}
            style={styles.TextInputEmail}
            data={true}
            // bgColor={'#EBF0F4'}
            TopRadius={true}
            border={Focus == 1 ? true : false}
            tick={emailChecked}
            onChangeText={(e) => {
              setEmailInput(e);
            }}
            onBlur={() => {
              emailValidation();
            }}
            onFocus={() => isFocus(1)}
          />
          <TextInputField
            placeholder={'Password'}
            // textinput={'password'}
            BottomRadius={true}
            border={Focus == 2 ? true : false}
            tick={passChecked}
            onChangeText={(e) => {
              isPassInput(e);
            }}
            onFocus={() => {}}
            onBlur={() => {
              passValidation();
            }}
            onFocus={() => isFocus(2)}
          />
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <View style={{width: 15}}>
              {verify ? (
                // <View></View>>

                <Image
                  style={{height: 15, width: 15, marginLeft: 10}}
                  // style={{justifyContent: 'flex-start'}}
                  source={require('../../assets/images/iconVerify.png')}
                />
              ) : (
                <View>
                  <Image
                    style={{
                      height: 15,
                      width: 15,
                      backgroundColor: 'transparent',
                      marginLeft: 10,
                    }}
                    source={require('../../assets/images/Green.png')}
                  />
                </View>
              )}
            </View>

            <View style={styles.TextRemember}>
              <Text
                style={{fontWeight: 'normal', fontSize: 14, color: '#7B859A'}}
                // style={{textAlign: 'left'}}
                onPress={() => {
                  rememberPress();
                }}>
                {'  '}Remember Me
              </Text>
              <Text
                style={{fontWeight: 'normal', fontSize: 14, color: '#7B859A'}}>
                Forgot Password?
              </Text>
            </View>
          </View>
          <View style={{marginVertical: 20}}>
            <Button
              name={'Login'}
              borderTop={0}
              borderBottom={10}
              borderTop={10}
              color={'#0F8FE3'}
            />
            <Button
              name={'Create New Account'}
              borderTop={0}
              borderBottom={10}
              color={'white'}
            />
          </View>
        </View>
        <Text style={styles.TextLoginWith}>Or via social media</Text>
        <View style={styles.ImageSocial}>
          <Image source={require('../../assets/images/gmail.png')} />
          <Image source={require('../../assets/images/facebook.png')} />
          <Image source={require('../../assets/images/twitter.png')} />
        </View>
        <Text style={{fontSize: 12, textAlign: 'center', marginVertical: 15}}>
          By signing up, you are agree with our
          <Text style={styles.TextTerms}>Terms & Conditions</Text>
        </Text>
      </View>
    </ScrollView>
  );
};
export default Login;
