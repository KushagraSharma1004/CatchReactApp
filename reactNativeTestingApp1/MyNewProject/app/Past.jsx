import React, { useState } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, ScrollView, SafeAreaView, StatusBar } from 'react-native';
// import {Shadow} from 'react-native-shadow'
import { useRouter, Link} from 'expo-router';
import OrderScreen from './OrderScreen'
import Profile from './Profile'
import Onboard_Screen_Banner from './Onboard_Screen_Banner'

const Past = () => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const [activeButton, setActiveButton] = useState('Past');

  const router = useRouter();

  const handleCatch = () => {
    router.push('./Onboard_Screen_Banner');
  };
  const handlePast = () => {
    router.push('./Past');
  };
  const handleUpcoming = () => {
    router.push('./OrderScreen');
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
              onPress={() => {
                setActiveButton('Upcoming')
                handleUpcoming();
            }}
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

          
        </View>




            {/* --------------First----------------- */}




                 {/* <Shadow> */}
            <View style={{height:225, width:360, alignSelf:'center', borderRadius:15, marginTop:45}}>
           <View style={{display:'flex', flexDirection:'row', }} >
           <Text style={{marginTop:20, fontWeight:'bold', fontSize:12, lineHeight:12, marginLeft:30}} >#OT161408302840</Text>
           <View style={{height:20, width:76, backgroundColor:'#DC0000', borderRadius:18, justifyContent:'center', position:'absolute', right:30,top:15}} >
              <Text style={{color:'white', fontSize:7, textAlign:'center'}} >CANCELLED</Text>
           </View>
         </View>
         <View style={{display:'flex', flexDirection:'row', alignItems:'center'}} >
          <Image style={{marginLeft:18, marginTop:5}} source={require('../assets/images/clockProfile.png')} ></Image>
          <Text style={{fontSize:10, color:'#777777', marginLeft:5}} >3 Hours</Text>
          </View>
          <Text style={{fontSize:12, marginLeft:30, fontWeight:'bold'}} >159.00 SR</Text>
          <Text style={{color:'#D13F3F', marginLeft:30, marginTop:15}} >Items</Text>
          <Text  style={{fontSize:12, marginLeft:30, marginTop:5}} >Cheesy Pizza (1), Supreme Pizza (2)</Text>
          <View style={{borderWidth:1,borderColor:'#DBDBDB', width:342, alignSelf:'center', marginTop:15}} ></View>
          <View style={{display:'flex', flexDirection:'row', marginTop:10}} >
            <Image style={{height:45, width:45, borderRadius:6, marginLeft:15}} source={require('../assets/images/sweets.png')} ></Image>
            <Text style={{fontSize:10, fontWeight:'bold', marginLeft:15}} >Jahez for AI khair</Text>
          <View  style={{position:'absolute', left:75, top:17}} >
          <Image style={{height:10, width:6}} source={require('../assets/images/location.png')} ></Image>
            </View>
          <View style={{position:'absolute', left:85, top:17}}>
          <Text style={{fontSize:8,color:'#777777'}} >Block-6, Nabard staff Quarters, Model Town</Text>
          </View>
          </View>
          <View>
          </View>
          </View> 
          {/* </Shadow>  */}




          {/* --------------Second----------------- */}




          <View style={{height:206, width:360, alignSelf:'center', borderRadius:15, marginTop:25, shadowColor: "rgba(0, 0, 0, 0.14)", shadowOffset: { width: 1, height: 1}, shadowRadius: 8, shadowOpacity:8}}>
           <View style={{display:'flex', flexDirection:'row', }} >
           <Text style={{marginTop:20, fontWeight:'bold', fontSize:12, lineHeight:12, marginLeft:30}} >#OT161408302840</Text>
           <View style={{height:20, width:76, backgroundColor:'#DC0000', borderRadius:18, justifyContent:'center', position:'absolute', right:30,top:15}} >
              <Text style={{color:'white', fontSize:7, textAlign:'center'}} >CANCELLED</Text>
           </View>
         </View>
         <View style={{display:'flex', flexDirection:'row', alignItems:'center'}} >
          <Image style={{marginLeft:18, marginTop:5}} source={require('../assets/images/clockProfile.png')} ></Image>
          <Text style={{fontSize:10, color:'#777777', marginLeft:5}} >3 Hours</Text>
          </View>
          <Text style={{fontSize:12, marginLeft:30, fontWeight:'bold'}} >159.00 SR</Text>
          <Text style={{color:'#D13F3F', marginLeft:30, marginTop:15}} >Items</Text>
          <Text  style={{fontSize:12, marginLeft:30, marginTop:5}} >Cheesy Pizza (1), Supreme Pizza (2)</Text>
          <View style={{borderWidth:1,borderColor:'#DBDBDB', width:342, alignSelf:'center', marginTop:15}} ></View>
          <View style={{display:'flex', flexDirection:'row', marginTop:10}} >
            <Image style={{height:45, width:45, borderRadius:6, marginLeft:15}} source={require('../assets/images/sweets.png')} ></Image>
            <Text style={{fontSize:10, fontWeight:'bold', marginLeft:15}} >Jahez for AI khair</Text>
          <View  style={{position:'absolute', left:75, top:17}} >
          <Image style={{height:10, width:6}} source={require('../assets/images/location.png')} ></Image>
            </View>
          <View style={{position:'absolute', left:85, top:17}}>
          <Text style={{fontSize:8,color:'#777777'}} >Block-6, Nabard staff Quarters, Model Town</Text>
          </View>
          </View>
          <View>
          </View>
          </View>






          {/* --------------Third----------------- */}





          <View style={{height:206, width:360, alignSelf:'center', borderRadius:15, marginTop:25, marginBottom:60, shadowColor: "rgba(0, 0, 0, 0.14)", shadowOffset: { width: 1, height: 1}, shadowRadius: 8, shadowOpacity:8}}>
           <View style={{display:'flex', flexDirection:'row', }} >
           <Text style={{marginTop:20, fontWeight:'bold', fontSize:12, lineHeight:12, marginLeft:30}} >#OT161408302840</Text>
           <View style={{height:20, width:76, backgroundColor:'#DC0000', borderRadius:18, justifyContent:'center', position:'absolute', right:30,top:15}} >
              <Text style={{color:'white', fontSize:7, textAlign:'center'}} >CANCELLED</Text>
           </View>
         </View>
         <View style={{display:'flex', flexDirection:'row', alignItems:'center'}} >
          <Image style={{marginLeft:18, marginTop:5}} source={require('../assets/images/clockProfile.png')} ></Image>
          <Text style={{fontSize:10, color:'#777777', marginLeft:5}} >3 Hours</Text>
          </View>
          <Text style={{fontSize:12, marginLeft:30, fontWeight:'bold'}} >159.00 SR</Text>
          <Text style={{color:'#D13F3F', marginLeft:30, marginTop:15}} >Items</Text>
          <Text  style={{fontSize:12, marginLeft:30, marginTop:5}} >Cheesy Pizza (1), Supreme Pizza (2)</Text>
          <View style={{borderWidth:1,borderColor:'#DBDBDB', width:342, alignSelf:'center', marginTop:15}} ></View>
          <View style={{display:'flex', flexDirection:'row', marginTop:10}} >
            <Image style={{height:45, width:45, borderRadius:6, marginLeft:15}} source={require('../assets/images/sweets.png')} ></Image>
            <Text style={{fontSize:10, fontWeight:'bold', marginLeft:15}} >Jahez for AI khair</Text>
          <View  style={{position:'absolute', left:75, top:17}} >
          <Image style={{height:10, width:6}} source={require('../assets/images/location.png')} ></Image>
            </View>
          <View style={{position:'absolute', left:85, top:17}}>
          <Text style={{fontSize:8,color:'#777777'}} >Block-6, Nabard staff Quarters, Model Town</Text>
          </View>
          </View>
          <View>
          </View>
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

export default Past;
