import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import Verification from './Verification'

const index = () => {
   // const SpalshBackground = require('../assets/images/SplashBackground.png')
    const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  return (
    <Link href='Verification' >
    <View style={{}} >
      <Image style={{height:screenHeight, width:screenWidth}} source={require('../assets/images/SplashBackground.png')} ></Image> 
      <Image style={{position:'absolute', height:280, width:280, alignSelf:'center',top:screenHeight/4}} source={require('../assets/images/SplashLogo.png')} ></Image>
    </View>
    </Link>
  )
}

export default index