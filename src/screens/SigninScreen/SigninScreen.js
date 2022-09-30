import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../../assets/images/logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialAuthentication from '../../components/SocialAuthentication';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const SigninScreen = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSignInPress = data => {
    console.log(data);
    navigation.navigate('Home');
  };
  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };

  const onSignupPressed = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={(styles.logo, {height: height * 0.25})}
          resizeMode="contain"
        />
        <CustomInput
          placeholder="Username"
          name={`username`}
          control={control}
          rules={{required: 'Username is required!'}}
        />
        <CustomInput
          placeholder="Password"
          name={`password`}
          control={control}
          secureTextEntry
          rules={{
            required: 'Password is required!',
            minLength: {
              value: 8,
              message: 'Password should be atleast 8 character long',
            },
          }}
        />
        <CustomButton text={'Sign In'} onPress={handleSubmit(onSignInPress)} />
        <CustomButton
          text={'Forgot Password'}
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />
        <SocialAuthentication />
        <CustomButton
          text={`Don't have an Account? Create One`}
          onPress={onSignupPressed}
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
  logo: {
    maxWidth: 300,
    maxHeight: 300,
  },
});

export default SigninScreen;
