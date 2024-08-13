import React, { useEffect, useState, useRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const OTPInput = ({ length, onChange, reset }) => {
  const [otp, setOtp] = useState(Array(length).fill(''));
  const inputs = useRef([]);

  useEffect(() => {
    if (reset) {
      setOtp(Array(length).fill(''));
      inputs.current.forEach(input => input && input.clear());
      inputs.current[0] && inputs.current[0].focus();
    }
  }, [reset]);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    onChange(newOtp.join(''));

    if (text && index < length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (event, index) => {
    if (event.nativeEvent.key === 'Backspace' && index > 0 && !otp[index]) {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <View style={styles.otpContainer}>
      {otp.map((value, index) => (
        <TextInput
          key={index}
          style={styles.otpInput}
          value={value}
          onChangeText={(text) => handleChange(text, index)}
          onKeyPress={(event) => handleKeyPress(event, index)}
          keyboardType="numeric"
          maxLength={1}
          ref={(input) => inputs.current[index] = input}
        />
      ))}
    </View>
  );
};

export default OTPInput;

const styles = StyleSheet.create({
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 35,
    width:336
  },
  otpInput: {
    width: 69,
    height: 69,
    borderColor: '#ccc',
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 25,
    marginHorizontal: 10, // 30 total margin between boxes (15 on each side)
    borderRadius: 20, // Border radius for each box
    backgroundColor:'#F2F2F2'
  },
});
