import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialAuthentication from '../../components/SocialAuthentication';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignupScreen = () => {
  const {control, handleSubmit, watch} = useForm();
  const pwd = watch('password');

  const navigation = useNavigation();

  const onRegisterPressed = () => {
    navigation.navigate('ConfirmEmail');
  };
  const onTermsOfUsePressed = () => {
    console.warn('onTermsOfUsePressed Pressed');
  };
  const onPrivacyPressed = () => {
    console.warn('onPrivacyPressed Pressed');
  };

  const onSigninPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an Account</Text>
        <CustomInput
          name="username"
          placeholder="Username"
          control={control}
          rules={{
            required: 'Username is required!',
            minLength: {
              value: 4,
              message: 'Username must be at least 4 character long.',
            },
            maxLength: {
              value: 20,
              message: 'Username should not be greater then 20 character.',
            },
          }}
        />
        <CustomInput
          name="email"
          placeholder="Email"
          control={control}
          rules={{
            required: 'Username is required!',
            pattern: {
              value: EMAIL_REGEX,
              message: 'Email is invalid!',
            },
          }}
        />
        <CustomInput
          name="password"
          placeholder="Password"
          control={control}
          rules={{
            required: 'Password is required!',
            minLength: {
              value: 8,
              message: 'Password should be atleast 8 character long',
            },
          }}
          secureTextEntry
        />
        <CustomInput
          name="cpassword"
          placeholder="Confirm Password"
          control={control}
          rules={{
            validate: value => value === pwd || 'Password do not match',
          }}
          secureTextEntry
        />
        <CustomButton
          text={'Register'}
          onPress={handleSubmit(onRegisterPressed)}
        />
        <Text style={styles.text}>
          By registering, you confirm that you accept our{' '}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            Terms of Use
          </Text>{' '}
          and{' '}
          <Text style={styles.link} onPress={onPrivacyPressed}>
            {' '}
            Privacy Policy
          </Text>
          .
        </Text>

        <SocialAuthentication />

        <CustomButton
          text={`Already have an Account? Sign In`}
          onPress={onSigninPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 28,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051c60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default SignupScreen;
