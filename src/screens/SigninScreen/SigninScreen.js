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

const SigninScreen = () => {
  const {height} = useWindowDimensions();
  const {username, setUsername} = useState('');
  const {password, setPassword} = useState('');
  const navigation = useNavigation();

  const onSignInPress = () => {
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
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomButton text={'Sign In'} onPress={onSignInPress} />
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
