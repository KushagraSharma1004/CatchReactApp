import React, { useState } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useRouter, Link} from 'expo-router';
import OrderScreen from './OrderScreen'
import Profile from './Profile'
import Onboard_Screen_Banner from './Onboard_Screen_Banner'

const Order = () => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const [activeButton, setActiveButton] = useState('Ongoing');

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
  const handleOngoing = () => {
    router.push('./Order');
  };
  const handleOrderDetails = () => {
    router.push('./OrderDetails');
  };



  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <ScrollView vertical>
      <View style={{backgroundColor:'#0B36F0', height:73, width:screenWidth, justifyContent:'center'}} >
        <Text style={{fontSize:18, fontWeight:900, color:'white', alignSelf:'center'}} >Order</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center',borderWidth:1,borderColor:'#F2F2F2', borderRadius: 20, padding: 5, marginTop: 40,height:46 }}>
            <TouchableOpacity
              style={{ paddingVertical: 10, paddingHorizontal: 20, borderRadius: 20, marginHorizontal: 1, backgroundColor: activeButton === 'Upcoming' ? '#3C00FF' : '#FFFFFF', height:34, width:100, justifyContent:'center', textAlign:'center', alignItems:'center', alignContent:'center' }}
              onPress={() => {
                setActiveButton('New')
                handleUpcoming();
            }}
            >
              <Text style={{ color: activeButton === 'New' ? 'white' : 'black' ,fontSize:15, alignSelf:'center', alignItems:'center', textAlign:'center'}}>New</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ paddingVertical: 10, paddingHorizontal: 20, borderRadius: 20, marginHorizontal: 1, backgroundColor: activeButton === 'Ongoing' ? '#3C00FF' : '#FFFFFF', height:34, width:100, justifyContent:'center', textAlign:'center', alignItems:'center', alignContent:'center' }}
              onPress={() => {
                setActiveButton('Ongoing')
                handleOngoing();
            }}
            >
              <Text style={{ color: activeButton === 'Ongoing' ? 'white' : 'black' ,fontSize:15, alignSelf:'center', alignItems:'center', textAlign:'center'}}>Ongoing</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ paddingVertical: 10, paddingHorizontal: 20, borderRadius: 20, marginHorizontal: 1, backgroundColor: activeButton === 'Past' ? '#3C00FF' : '#FFFFFF', height:34, width:100, justifyContent:'center', textAlign:'center', alignItems:'center', alignContent:'center'  }}
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



                <TouchableOpacity onPress={handleOrderDetails} >
            <View style={{ width:screenWidth-40, alignSelf:'center', borderRadius:15, marginTop:45, shadowColor: "rgba(0, 0, 0, 0.35)", shadowOffset: { width: 1, height: 1}, shadowRadius: 8}}>
           <View style={{display:'flex', flexDirection:'row', }} >
            <View style={{display:'flex', flexDirection:'column', }} >
            <Text style={{fontSize:10, color:'#777777',marginTop:15, marginLeft:10}} >Order ID</Text>
           <Text style={{marginTop:5, fontWeight:'bold', fontSize:12, lineHeight:12, marginLeft:10}} >OT161408302840</Text>
           </View>
           <View style={{ position:'absolute', right:20, flexDirection:'row', alignContent:'center', justifyContent:'center', top:15}} >
           <View style={{height:10, width:10, borderRadius:50, backgroundColor:'blue', alignSelf:'center'}} ></View>
              <Text style={{color:'blue', marginLeft:5, fontSize:8}} >PREPARING</Text>
           </View>
         </View>
         <View style={{marginTop:10, marginLeft:10, width:225}} >
          <Text style={{fontSize:10, color:'#777777'}} >Order Amount</Text>
            <Text style={{fontSize:15, marginTop:5}} >32.00 SR</Text>
            <View style={{position:'absolute', right:0}} >
            <Text style={{fontSize:10, color:'#777777'}} > Estimated Pickup Time</Text>
            <Text style={{fontSize:15, marginTop:5}} >1 Hour</Text>
            </View>
          </View>

          <View style={{marginTop:10, marginLeft:10, marginBottom:15}} >
          <Text style={{fontSize:10, color:'#777777'}} >Items</Text>
            <Text style={{fontSize:15, marginTop:5}} >Cheesy Pizza(1), Supreme Pizza(2)</Text>
          </View>
          
          
          <View>
          </View>
          </View>
                </TouchableOpacity>



          {/* --------------Second----------------- */}



          <TouchableOpacity onPress={handleOrderDetails} >
          <View style={{ width:screenWidth-40, alignSelf:'center', borderRadius:15, marginTop:45, shadowColor: "rgba(0, 0, 0, 0.35)", shadowOffset: { width: 1, height: 1}, shadowRadius: 8}}>
           <View style={{display:'flex', flexDirection:'row', }} >
            <View style={{display:'flex', flexDirection:'column', }} >
            <Text style={{fontSize:10, color:'#777777',marginTop:15, marginLeft:10}} >Order ID</Text>
           <Text style={{marginTop:5, fontWeight:'bold', fontSize:12, lineHeight:12, marginLeft:10}} >OT161408302840</Text>
           </View>
           <View style={{ position:'absolute', right:20, flexDirection:'row', alignContent:'center', justifyContent:'center', top:15}} >
           <View style={{height:10, width:10, borderRadius:50, backgroundColor:'#FFBF00', alignSelf:'center'}} ></View>
              <Text style={{color:'#FFBF00', marginLeft:5, fontSize:8}} >WAITING FOR PICKUP</Text>
           </View>
         </View>
         <View style={{marginTop:10, marginLeft:10, width:225}} >
          <Text style={{fontSize:10, color:'#777777'}} >Order Amount</Text>
            <Text style={{fontSize:15, marginTop:5}} >32.00 SR</Text>
            <View style={{position:'absolute', right:0}} >
            <Text style={{fontSize:10, color:'#777777'}} > Estimated Pickup Time</Text>
            <Text style={{fontSize:15, marginTop:5}} >1 Hour</Text>
            </View>
          </View>

          <View style={{marginTop:10, marginLeft:10, marginBottom:15}} >
          <Text style={{fontSize:10, color:'#777777'}} >Items</Text>
            <Text style={{fontSize:15, marginTop:5}} >Cheesy Pizza(1), Supreme Pizza(2)</Text>
          </View>
          
          
          <View>
          </View>
          </View>
          </TouchableOpacity>




          {/* --------------Third----------------- */}




          <TouchableOpacity onPress={handleOrderDetails} >
          <View style={{ width:screenWidth-40, alignSelf:'center', borderRadius:15, marginTop:45, shadowColor: "rgba(0, 0, 0, 0.35)", shadowOffset: { width: 1, height: 1}, shadowRadius: 8}}>
           <View style={{display:'flex', flexDirection:'row', }} >
            <View style={{display:'flex', flexDirection:'column', }} >
            <Text style={{fontSize:10, color:'#777777',marginTop:15, marginLeft:10}} >Order ID</Text>
           <Text style={{marginTop:5, fontWeight:'bold', fontSize:12, lineHeight:12, marginLeft:10}} >OT161408302840</Text>
           </View>
           <View style={{ position:'absolute', right:20, flexDirection:'row', alignContent:'center', justifyContent:'center', top:15}} >
           <View style={{height:10, width:10, borderRadius:50, backgroundColor:'blue', alignSelf:'center'}} ></View>
              <Text style={{color:'blue', marginLeft:5, fontSize:8}} >PREPARING</Text>
           </View>
         </View>
         <View style={{marginTop:10, marginLeft:10, width:225}} >
          <Text style={{fontSize:10, color:'#777777'}} >Order Amount</Text>
            <Text style={{fontSize:15, marginTop:5}} >32.00 SR</Text>
            <View style={{position:'absolute', right:0}} >
            <Text style={{fontSize:10, color:'#777777'}} > Estimated Pickup Time</Text>
            <Text style={{fontSize:15, marginTop:5}} >1 Hour</Text>
            </View>
          </View>

          <View style={{marginTop:10, marginLeft:10, marginBottom:15}} >
          <Text style={{fontSize:10, color:'#777777'}} >Items</Text>
            <Text style={{fontSize:15, marginTop:5}} >Cheesy Pizza(1), Supreme Pizza(2)</Text>
          </View>
          
          
          <View>
          </View>
          </View>
          </TouchableOpacity>






          <TouchableOpacity onPress={handleOrderDetails} >
          <View style={{ width:screenWidth-40, alignSelf:'center', borderRadius:15, marginTop:45, shadowColor: "rgba(0, 0, 0, 0.35)", shadowOffset: { width: 1, height: 1}, shadowRadius: 8}}>
           <View style={{display:'flex', flexDirection:'row', }} >
            <View style={{display:'flex', flexDirection:'column', }} >
            <Text style={{fontSize:10, color:'#777777',marginTop:15, marginLeft:10}} >Order ID</Text>
           <Text style={{marginTop:5, fontWeight:'bold', fontSize:12, lineHeight:12, marginLeft:10}} >OT161408302840</Text>
           </View>
           <View style={{ position:'absolute', right:20, flexDirection:'row', alignContent:'center', justifyContent:'center', top:15}} >
           <View style={{height:10, width:10, borderRadius:50, backgroundColor:'#FFBF00', alignSelf:'center'}} ></View>
              <Text style={{color:'#FFBF00', marginLeft:5, fontSize:8}} >WAITING FOR PICKUP</Text>
           </View>
         </View>
         <View style={{marginTop:10, marginLeft:10, width:225}} >
          <Text style={{fontSize:10, color:'#777777'}} >Order Amount</Text>
            <Text style={{fontSize:15, marginTop:5}} >32.00 SR</Text>
            <View style={{position:'absolute', right:0}} >
            <Text style={{fontSize:10, color:'#777777'}} > Estimated Pickup Time</Text>
            <Text style={{fontSize:15, marginTop:5}} >1 Hour</Text>
            </View>
          </View>

          <View style={{marginTop:10, marginLeft:10, marginBottom:15}} >
          <Text style={{fontSize:10, color:'#777777'}} >Items</Text>
            <Text style={{fontSize:15, marginTop:5}} >Cheesy Pizza(1), Supreme Pizza(2)</Text>
          </View>
          
          
          <View>
          </View>
          </View>
          </TouchableOpacity>











          <TouchableOpacity onPress={handleOrderDetails} >
          <View style={{ width:screenWidth-40, alignSelf:'center', borderRadius:15, marginTop:45, shadowColor: "rgba(0, 0, 0, 0.35)", shadowOffset: { width: 1, height: 1}, shadowRadius: 8, marginBottom:50}}>
           <View style={{display:'flex', flexDirection:'row', }} >
            <View style={{display:'flex', flexDirection:'column', }} >
            <Text style={{fontSize:10, color:'#777777',marginTop:15, marginLeft:10}} >Order ID</Text>
           <Text style={{marginTop:5, fontWeight:'bold', fontSize:12, lineHeight:12, marginLeft:10}} >OT161408302840</Text>
           </View>
           <View style={{ position:'absolute', right:20, flexDirection:'row', alignContent:'center', justifyContent:'center', top:15}} >
           <View style={{height:10, width:10, borderRadius:50, backgroundColor:'blue', alignSelf:'center'}} ></View>
              <Text style={{color:'blue', marginLeft:5, fontSize:8}} >PREPARING</Text>
           </View>
         </View>
         <View style={{marginTop:10, marginLeft:10, width:225}} >
          <Text style={{fontSize:10, color:'#777777'}} >Order Amount</Text>
            <Text style={{fontSize:15, marginTop:5}} >32.00 SR</Text>
            <View style={{position:'absolute', right:0}} >
            <Text style={{fontSize:10, color:'#777777'}} > Estimated Pickup Time</Text>
            <Text style={{fontSize:15, marginTop:5}} >1 Hour</Text>
            </View>
          </View>

          <View style={{marginTop:10, marginLeft:10, marginBottom:15}} >
          <Text style={{fontSize:10, color:'#777777'}} >Items</Text>
            <Text style={{fontSize:15, marginTop:5}} >Cheesy Pizza(1), Supreme Pizza(2)</Text>
          </View>
          
          
          <View>
          </View>
          </View>
          </TouchableOpacity>




         

      </ScrollView>

      <View style={{height:73, width:screenWidth, backgroundColor:'white', flexDirection:'row',alignItems:'center', shadowColor: "rgba(0, 0, 0, 0.35)", shadowOffset: { width: 1, height: 1}, shadowRadius: 8}} >
          <View style={{alignItems:'center', position:'absolute',left:10}} >
          <Link href='Onboard_Screen_Banner'><Image style={{ }} source={require('../assets/images/page2BattomNavBar1ImageInactive.png')} ></Image></Link>
          <Text>Catch</Text>
          </View>
          <View style={{alignItems:'center', position:'absolute',left:screenWidth/2.25}} >
          <Link href='OrderScreen'><Image style={{ }} source={require('../assets/images/page2BattomNavBar2ImageActive.png')} ></Image></Link>
          <Text style={{color:'blue'}} >Orders</Text>
          </View>
          <View style={{alignItems:'center', position:'absolute',right:10}} >
          <Link href='Profile'><Image style={{ }} source={require('../assets/images/page2BattomNavBar3ImageInactive.png')} ></Image></Link>
          <Text>Profile</Text>
          </View>
      </View>
    </View>
  );
};

export default Order;
