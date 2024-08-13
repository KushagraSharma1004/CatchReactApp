import React, { useState } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { useRouter, Link } from 'expo-router';
import Index from './Verification'
import Profile from './Profile'
import Onboard_Screen_Banner from './Onboard_Screen_Banner'

const OrderScreen = () => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const [activeButton, setActiveButton] = useState('Upcoming');

  const router = useRouter();

  const handleCatch = () => {
    router.push('./Onboard_Screen_Banner');
  };
  const handlePast = () => {
    router.push('./Past');
  };

  return (
    
    <View style={{ backgroundColor: 'white', flex: 1 }}>
        <StatusBar backgroundColor={'#0B36F0'} />
      <ScrollView vertical>
      <View style={{backgroundColor:'#0B36F0', height:57, width:screenWidth}} ></View>
        <View style={{ alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF', borderRadius: 20, padding: 5, marginTop: 40, width: 296,height:56, borderWidth:1,borderColor:'#F2F2F2' }}>
            <TouchableOpacity
              style={{ paddingVertical: 10, paddingHorizontal: 20, borderRadius: 20, marginHorizontal: 1, backgroundColor: activeButton === 'Upcoming' ? '#3C00FF' : '#FFFFFF', height:44, width:130, justifyContent:'center', textAlign:'center', alignItems:'center', alignContent:'center' }}
              onPress={() => setActiveButton('Upcoming')}
            >
              <Text style={{ color: activeButton === 'Upcoming' ? 'white' : 'black' ,fontSize:15, alignSelf:'center', alignItems:'center', textAlign:'center'}}>Upcoming</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ paddingVertical: 10, paddingHorizontal: 20, borderRadius: 20, marginHorizontal: 1, backgroundColor: activeButton === 'Past' ? '#3C00FF' : '#FFFFFF', height:44, width:130, justifyContent:'center', textAlign:'center', alignItems:'center', alignContent:'center'  }}
              onPress={() => {
                setActiveButton('Past');
                handlePast();
              }}
            >
              <Text style={{ color: activeButton === 'Past' ? 'white' : 'black',fontSize:15 }}>Past</Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 50 }}>
            <Image style={{ height: 398, width: screenWidth }} source={require('../assets/images/page4Image.png')} />
          </View>
              <Link href={'Onboard_Screen_Banner'} >
          <View style={{ alignItems: 'center', marginTop: 0 , marginBottom:100, width:360}}>
            <TouchableOpacity style={{ backgroundColor: '#0B36F0', paddingVertical: 15, paddingHorizontal: 50, borderRadius: 100, marginTop: 20 , width:360, marginBottom:100}} onPress={handleCatch}>
              <Text style={{ color: '#fff', fontSize: 18, textAlign: 'center' }}>Order Amazing Food</Text>
            </TouchableOpacity>
          </View>
              </Link>
        </View>
      </ScrollView>

      <View style={{height:73, width:screenWidth, backgroundColor:'white', flexDirection:'row',alignItems:'center', shadowColor: "rgba(0, 0, 0, 0.35)", shadowOffset: { width: 1, height: 1}, shadowRadius: 8}} >
          <View style={{alignItems:'center', position:'absolute',left:10}} >
          <Link  style={{height:50, width:37}}  href='./Onboard_Screen_Banner'><Image style={{height:37, width:37 }} source={require('../assets/images/page2BattomNavBar1ImageInactive.png')} ></Image></Link>
          <Text style={{ color:'#9E9E9E',fontSize:11, fontWeight:400}} >Catch</Text>
          </View>
          <View style={{alignItems:'center', position:'absolute',left:screenWidth/2.25}} >
          <Link style={{ height:50, width:37 }}  href='OrderScreen'><Image style={{ height:37, width:37 }} source={require('../assets/images/page2BattomNavBar2ImageActive.png')} ></Image></Link>
          <Text style={{fontSize:11, fontWeight:400, color:'blue'}} >Orders</Text>
          </View>
          <View style={{alignItems:'center', position:'absolute',right:10}} >
          <Link style={{ height:50, width:37 }} href='Profile'><Image style={{ height:37, width:37 }} source={require('../assets/images/page2BattomNavBar3ImageInactive.png')} ></Image></Link>
          <Text style={{fontSize:11, fontWeight:400, color:'#9E9E9E'}} >Profile</Text>
          </View>
      </View>
    </View>
  );
};

export default OrderScreen;
