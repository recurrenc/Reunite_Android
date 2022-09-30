import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const ConfirmEmailScreen = () => {
  const {control, handleSubmit} = useForm();
  const navigation = useNavigation();

  const onVerifyPressed = data => {
    console.log(data);
    navigation.navigate('Home');
  };

  const onResendCode = () => {
    console.warn('onResendCode Pressed');
  };

  const onSigninPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Verify Your Email</Text>
        <CustomInput
          name={`code`}
          placeholder="Enter Your Confirmation Code"
          control={control}
          rules={{
            required: 'Confirmation code is required',
          }}
        />

        <CustomButton text={'Verify'} onPress={handleSubmit(onVerifyPressed)} />

        <CustomButton
          text={`Resend Code`}
          onPress={onResendCode}
          type="SECONDARY"
        />
        <CustomButton
          text={`Back To Sign In`}
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

export default ConfirmEmailScreen;
