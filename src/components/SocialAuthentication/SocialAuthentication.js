import {View, Text} from 'react-native';
import React from 'react';
import CustomButton from '../CustomButton';

const SocialAuthentication = () => {
  const onSignInGoogle = () => {
    console.warn('onSignInGoogle Pressed');
  };
  const onSignInFacebook = () => {
    console.warn('onSignInFacebook Pressed');
  };
  const onSignInLinkedIn = () => {
    console.warn('onSignInLinkedIn Pressed');
  };
  return (
    <>
      <CustomButton
        text={'Sign In With Facebook'}
        onPress={onSignInFacebook}
        type="SECONDRY"
        bgColor={'#e7eaf4'}
        fgColor={'#4765a9'}
      />
      <CustomButton
        text={'Sign In With Google'}
        onPress={onSignInGoogle}
        type="SECONDRY"
        bgColor={'#fae9ea'}
        fgColor={'#dd4d44'}
      />
      <CustomButton
        text={'Sign In With LinkedIn'}
        onPress={onSignInLinkedIn}
        type="SECONDRY"
        bgColor={'#e3e3e3'}
        fgColor={'#363636'}
      />
    </>
  );
};

export default SocialAuthentication;
