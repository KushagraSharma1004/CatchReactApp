import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView , Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import OTPInput from './OTPInput';

const Verification = () => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const [otp, setOtp] = useState('');
  const [reset, setReset] = useState(false);
  const router = useRouter();

  const handleOtpChange = (newOtp) => {
    setOtp(newOtp);
    if (reset) {
      setReset(false);
    }
  };

  const handleVerify = () => {
    // Handle the OTP verification logic here
    console.log("OTP Entered:", otp);
    // Navigate to Onboard Screen-Banner
    router.push('/Onboard_Screen_Banner');
  };

  const handleResendCode = () => {
    // Reset OTP input
    setOtp('');
    setReset(true);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', padding: 20, backgroundColor:'white' }}>
      <ScrollView vertical >
      <View style={{ height: 100, width: 100, borderRadius: 50, backgroundColor: 'blue', marginTop:70, alignSelf: 'center' }}>
        <Image source={require('../assets/images/otp.png')} style={styles.image} />
      </View>
      <Text style={styles.vCText}>Verification Code</Text>

      <Text style={styles.rulesForOtpText}>Please enter the 4 digit code to verify your mobile number.</Text>

      <OTPInput length={4} onChange={handleOtpChange} reset={reset} />

      <Text style={styles.text1}>If you didn’t receive a code?</Text>

      <TouchableOpacity onPress={handleResendCode}>
        <Text style={styles.text2}>Resend Code</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#0B36F0',padding: 15,borderRadius: 100,marginTop: 50,width: screenWidth-54,marginBottom:200, alignSelf:'center'}} onPress={handleVerify}>
        <Text style={styles.verifyButtonText}>Verify</Text>
      </TouchableOpacity></ScrollView>
    </View>
  );
}

export default Verification;

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: 25,
    right: 25,
  },
  vCText: {
    fontWeight: '500',
    fontSize: 32,
    alignSelf: 'center',
    marginTop: 90,
    textAlign:'center'
  },
  rulesForOtpText: {
    color: '#777777',
    
    fontWeight: '400',
    fontSize: 15,
    
    alignSelf: 'center',
    marginTop: 20,
    textAlign: 'center',
    borderRadius: 6,
   
  },
  text1: {
    marginTop:35,
    
    fontWeight: '400',
    fontSize: 15,
    
    alignSelf: 'center',
    textAlign: 'center',
  },
  text2: {
    color: 'blue',
    width: 294,
    height: 34,
    
    fontWeight: '500',
    fontSize: 15,
    
    alignSelf: 'center',
    textAlign: 'center',
  },
  
  verifyButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    
  },
});
