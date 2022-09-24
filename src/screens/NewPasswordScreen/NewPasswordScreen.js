import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const NewPasswordScreen = () => {
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');
  const navigation = useNavigation();

  const onResetPressed = () => {
    navigation.navigate('Home');
  };

  const onSigninPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Set New Password</Text>
        <CustomInput placeholder={`Code`} value={code} setValue={setCode} />
        <CustomInput
          placeholder="Create New Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomInput
          placeholder="Confirm New Password"
          value={cPassword}
          setValue={setCPassword}
          secureTextEntry
        />

        <CustomButton text={'Reset'} onPress={onResetPressed} />

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
