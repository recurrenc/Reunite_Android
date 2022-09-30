import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const NewPasswordScreen = () => {
  const {control, handleSubmit, watch} = useForm();
  const navigation = useNavigation();
  const pwd = watch('password');

  const onResetPressed = data => {
    console.log(data);
    navigation.navigate('Home');
  };

  const onSigninPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Set New Password</Text>
        <CustomInput
          name={`code`}
          placeholder={`Code`}
          control={control}
          rules={{required: 'Verification Code is required!'}}
        />
        <CustomInput
          name={`password`}
          placeholder="Create New Password"
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
          name={`cpassword`}
          placeholder="Confirm New Password"
          control={control}
          rules={{
            validate: value => value === pwd || 'Password do not match',
          }}
          secureTextEntry
        />

        <CustomButton text={'Reset'} onPress={handleSubmit(onResetPressed)} />

        <CustomButton
          text={`Back To Sign in`}
          onPress={onSigninPressed}
          type="SECONDARY"
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

export default NewPasswordScreen;
