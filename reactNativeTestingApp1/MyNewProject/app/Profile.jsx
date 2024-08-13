import React, { useState } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { Link, useRouter } from 'expo-router';
import Verification from './Verification';
import OrderScreen from './OrderScreen'
import Onboard_Screen_Banner from './Onboard_Screen_Banner'
import Notification from './Notification'
import Cart from './Cart';


const Profile = () => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
 

  const router = useRouter();

  const handleNotification = () => {
    router.push('/Notification');
  };

  const handleVerification = () => {
    router.push('/Verification');
  };
  const handleCart = () => {
    router.push('/Cart');
  };
  const handleOrderScreen = () => {
    router.push('/OrderScreen');
  };



  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <StatusBar backgroundColor={'#0B36F0'} />
      <ScrollView vertical>
      <View style={{backgroundColor:'#0B36F0', height:57, width:screenWidth}} >
      </View>


      <View style={{height:85, width:85, borderRadius:50, backgroundColor:'#EAEEFF',alignSelf:'center', marginTop:30, alignItems:'center', justifyContent:'center', alignContent:'center'}} >
      <Image style={{}} source={'../assets/images/idProfile.png'} ></Image>
        </View>

        <View style={{alignSelf:'center', marginTop:15}} >
        <Text style={{fontSize:26}} >John Smith</Text>
        <Text style={{fontSize:16, color:'blue', marginTop:15}} >+91 4578965412</Text>
        </View>

          {/* --------------First----------------- */}

        <TouchableOpacity onPress={handleCart} >
        <View style={{display:'flex', flexDirection:'row',marginLeft:15, marginTop:30}} >
          <Image style={{height:20.86, width:21}} source={require('../assets/images/cartProfle.png')} ></Image>
          <Text style={{fontSize:13, marginLeft:20, alignSelf:'center'}} >My Cart</Text>
          <Image style={{alignSelf:'center', position:'absolute', right:10}} source={require('../assets/images/arrowProfile.png')} ></Image>
        
        </View>
        </TouchableOpacity>


          {/* --------------Second----------------- */}
        <View style={{display:'flex', flexDirection:'row',marginLeft:18, marginTop:30}} >
          <Image style={{height:14, width:15}} source={require('../assets/images/car.png')} ></Image>
          <Text style={{fontSize:13, marginLeft:20, alignSelf:'center'}} >My Cars</Text>
          <Image style={{alignSelf:'center', position:'absolute', right:10}} source={require('../assets/images/arrowProfile.png')} ></Image>
        </View>


          {/* --------------Third----------------- */}

        <TouchableOpacity onPress={handleOrderScreen} >

        <View style={{display:'flex', flexDirection:'row',marginLeft:17, marginTop:30}} >
          <Image style={{height:20, width:17}} source={require('../assets/images/pageProfile.png')} ></Image>
          <Text style={{fontSize:13, marginLeft:20, alignSelf:'center'}} >My Orders</Text>
          <Image style={{alignSelf:'center', position:'absolute', right:10}} source={require('../assets/images/arrowProfile.png')} ></Image>
        </View>

            </TouchableOpacity>



              {/* --------------Fourth----------------- */}
        
        
        


        
        <TouchableOpacity onPress={handleNotification} >
        <View style={{display:'flex', flexDirection:'row',marginLeft:15, marginTop:30}} >
          
          <Image style={{height:20.86, width:21}} source={require('../assets/images/bellProfile.png')} ></Image>
          <Text style={{fontSize:13, marginLeft:20, alignSelf:'center'}} >Notification</Text>
          <Image style={{alignSelf:'center', position:'absolute', right:10}} source={require('../assets/images/arrowProfile.png')} ></Image>
        
        </View></TouchableOpacity>
    

          {/* --------------Fifth----------------- */}
        <View style={{display:'flex', flexDirection:'row',marginLeft:15, marginTop:30}} >
          <Image style={{height:19.5, width:21}} source={require('../assets/images/phoneProfile.png')} ></Image>
          <Text style={{fontSize:13, marginLeft:20, alignSelf:'center'}} >Help & Support</Text>
          <Image style={{alignSelf:'center', position:'absolute', right:10}} source={require('../assets/images/arrowProfile.png')} ></Image>
        </View>

        
        {/* --------------Sixth----------------- */}
        <View style={{display:'flex', flexDirection:'row',marginLeft:15, marginTop:30}} >
          <Image style={{height:20, width:21}} source={require('../assets/images/logoProfile.png')} ></Image>
          <Text style={{fontSize:13, marginLeft:20, alignSelf:'center'}} >About CATCH</Text>
          <Image style={{alignSelf:'center', position:'absolute', right:10}} source={require('../assets/images/arrowProfile.png')} ></Image>
        </View>

        
        {/* --------------Seventh----------------- */}
        <View style={{display:'flex', flexDirection:'row',marginLeft:17, marginTop:30, marginBottom:30, alignContent:'center', alignItems:'center'}} >
          <Image style={{}} source={require('../assets/images/iProfile.png')} ></Image>
          <Text style={{fontSize:13, marginLeft:20, alignSelf:'center'}} >Terms & Conditions</Text>
          <Image style={{alignSelf:'center', position:'absolute', right:10}} source={require('../assets/images/arrowProfile.png')} ></Image>
        </View>


      
      <View style={{marginBottom:100}} >
          <TouchableOpacity style={{backgroundColor:'blue', borderRadius:24, width:screenWidth-30, alignSelf:'center', height:48, justifyContent:'center'}} onPress={handleVerification} >
            <View style={{flexDirection:'row', alignSelf:'center', justifyContent:'center', alignContent:'center'}} >
              <Image style={{alignSelf:'center'}} source={require('../assets/images/logoutProfile.png')} ></Image>
              <Text style={{color:'white', fontSize:18, fontWeight:400, alignSelf:'center', marginLeft:5, textAlign:'center'}} >Logout</Text>
            </View>
          </TouchableOpacity>
        {/*  */}
        
      </View>




      </ScrollView>






      <View style={{height:73, width:screenWidth, backgroundColor:'white', flexDirection:'row',alignItems:'center', shadowColor: "rgba(0, 0, 0, 0.35)", shadowOffset: { width: 1, height: 1}, shadowRadius: 8}} >
          <View style={{alignItems:'center', position:'absolute',left:10}} >
          <Link  style={{height:50, width:37}}  href='./Onboard_Screen_Banner'><Image style={{height:37, width:37 }} source={require('../assets/images/page2BattomNavBar1ImageInactive.png')} ></Image></Link>
          <Text style={{ color:'#9E9E9E',fontSize:11, fontWeight:400}} >Catch</Text>
          </View>
          <View style={{alignItems:'center', position:'absolute',left:screenWidth/2.25}} >
          <Link style={{ height:50, width:37 }}  href='OrderScreen'><Image style={{ height:37, width:37 }} source={require('../assets/images/page2BattomNavBar2ImageInactive.png')} ></Image></Link>
          <Text style={{fontSize:11, fontWeight:400, color:'#9E9E9E'}} >Orders</Text>
          </View>
          <View style={{alignItems:'center', position:'absolute',right:10}} >
          <Link style={{ height:50, width:37 }} href='Profile'><Image style={{ height:37, width:37 }} source={require('../assets/images/page2BattomNavBar3ImageActive.png')} ></Image></Link>
          <Text style={{fontSize:11, fontWeight:400, color:'blue'}} >Profile</Text>
          </View>
      </View>
    </View>
  );
};

export default Profile;
