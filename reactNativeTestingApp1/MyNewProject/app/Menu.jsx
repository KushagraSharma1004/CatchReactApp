import { View, Text, Dimensions, Image, TextInput, ScrollView, StatusBar } from 'react-native';
import React from 'react';
import { Link } from 'expo-router'
import Open from './Open';
import Cart from './Cart'
import Onboard_Screen_Banner from './Onboard_Screen_Banner';
const Menu = () => {
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
  return (
    
    <View style={{ flex: 1, backgroundColor:'#EAEEFF' }}>
      <StatusBar backgroundColor={'#0B36F0'} />


      



      <View style={{height:94,width:screenWidth, backgroundColor:'#0B36F0', display:'flex', flexDirection:'row'}} >
    <Link href='Onboard_Screen_Banner' style={{marginTop:40, marginLeft:5}} >
     <Image style={{marginTop:45, marginLeft:5}} source={require('../assets/images/arrowNotification.png')} ></Image>
     <Image style={{}} source={require('../assets/images/SearchMenu.png')} />
   </Link>
    <View style={{ width:screenWidth-80, marginTop:51, width: screenWidth-127}} >
    <Text style={{color:'white', fontSize:18, fontWeight:'bold', textAlign:'center'}} >Menu</Text>
    </View>
    <Image style={{marginTop:51}} source={require('../assets/images/CartMenu.png')} />
    </View>

      <ScrollView vertical>
        <View style={{ marginTop: 10, alignItems: 'center' }}>
          <View style={{ height: 93, backgroundColor: 'white', borderRadius: 10, width: 360 }}>
            <View style={{ flexDirection: 'row' }}>
              <Image source={require('../assets/images/chessOrderDetails.png')} style={{ marginLeft: 15, height: 73, width: 73, borderRadius: 10, marginTop: 10, marginBottom: 10 }} />
              <Text style={{ fontWeight: '600', fontSize: 15, marginLeft: 5, marginTop: 10 }}>Jahez for AI khair</Text>
              <Text style={{ position: 'absolute', bottom: 24, left: 92, color: '#777777', fontSize: 13, marginBottom: 10, fontWeight:400 }}>American</Text>
              <Text style={{ color: '#3F9E54', position: 'absolute', bottom: 0, left: 88, marginLeft: 5, marginBottom: 10, fontSize:12, fontWeight:400 }}>OPEN</Text>
              <View style={{ flexDirection: 'row', right: 1, position: 'absolute' }}>
                <Image style={{ height: 10, width: 6, top: 5.5, marginTop: 10 }} source={require('../assets/images/location.png')} />
                <Text style={{ color: '#777777', marginLeft: 5, marginRight: 15, marginTop: 10, fontSize:11 }}>0.9 Kms</Text>
              </View>
              <View style={{ position: 'absolute', bottom: 0, right: 0 }}>
                <Text style={{ color: '#777777', fontWeight: '400', marginRight: 15, marginBottom: 10, fontSize:11 }}>05:00 AM - 05:00 AM</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <View style={{ alignItems: 'center' }}>
            <TextInput style={{ width: 360, height: 38, borderRadius: 10, backgroundColor: 'white', paddingHorizontal: 15 }} placeholder='What are you looking for?' placeholderTextColor='#C4C4C4' />
          </View>
        </View>
        {/* ----------------First------------- */}
        <View style={{alignSelf:'center'}} >
     <Link href='Open' >
     <View>
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <View style={{ width: 362, alignItems: 'center' }}>
            <Image style={{ height: 177, width: 352, borderTopLeftRadius: 5, borderTopRightRadius: 5 }} source={require('../assets/images/BurgerMenu.png')} />
          </View>
        </View>
        <View style={{ backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', height: 40, width: 352, borderBottomLeftRadius: 5, borderBottomRightRadius: 5, alignSelf: 'center' }}>
          <Text style={{ fontSize: 19, fontWeight: 'bold', marginLeft: 15 }}>Chicken Burger</Text>
          <Text style={{ color: '#0B36F0', position: 'absolute', right: 15 }}>SAR 32.00</Text>
        </View></View>
        </Link></View>
        
        {/* ----------------Second--------------- */}
        <View style={{alignSelf:'center'}} >
     <Link href='Open' >
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <View style={{ width: 362, alignItems: 'center' }}>
            <Image style={{ height: 177, width: 352, borderTopLeftRadius: 5, borderTopRightRadius: 5 }} source={require('../assets/images/Burger2Menu.png')} />
          </View>
        </View>
        <View style={{ backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', height: 40, width: 352, borderBottomLeftRadius: 5, borderBottomRightRadius: 5, alignSelf: 'center' }}>
          <Text style={{ fontSize: 19, fontWeight: 'bold', marginLeft: 15 }}>Cheesy Burger</Text>
          <Text style={{ color: '#0B36F0', position: 'absolute', right: 15 }}>SAR 32.00</Text>
        </View>
        </Link></View>
        {/* ------------------Third----------------- */}
        <View style={{alignSelf:'center',marginBottom: 90}} >
     <Link href='Open' >
        <View style={{ marginBottom: 90 }}>
          <View style={{ alignItems: 'center', marginTop: 10 }}>
            <View style={{ width: 362, alignItems: 'center' }}>
              <Image style={{ height: 177, width: 352, borderTopLeftRadius: 5, borderTopRightRadius: 5 }} source={require('../assets/images/BurgerMenu.png')} />
            </View>
          </View>
          <View style={{ backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', height: 40, width: 352, borderBottomLeftRadius: 5, borderBottomRightRadius: 5, alignSelf: 'center' }}>
            <Text style={{ fontSize: 19, fontWeight: 'bold', marginLeft: 15 }}>Chicken Burger</Text>
            <Text style={{ color: '#0B36F0', position: 'absolute', right: 15 }}>SAR 32.00</Text>
          </View>
        </View>
        </Link></View>
      </ScrollView>
      <ScrollView style={{ backgroundColor: '#0B36F0',height: 73,}} horizontal>
  <View style={{ height: 63, flexDirection: 'row' ,backgroundColor: '#0B36F0'}}>
    
    
    {/* ----------------First------------- */}


    <View style={{ backgroundColor: '#0B36F0', width: 114, height: 53, alignItems: 'center', justifyContent:'center'}}>
      <Text style={{ color: 'white'}}>All</Text>
    </View>


    {/* ----------------Second------------- */}



    <View style={{ backgroundColor: 'white', width: 114, height: 53, alignItems: 'center', justifyContent:'center'}}>
    <View style={{height:53,width:90, justifyContent:'center', alignItems: 'center'}} >
      <Text style={{ color: '#0B36F0', textAlign:'center', fontSize:14, fontWeight:500}}>Limited Time Offers</Text>
      </View>
    </View>



    {/* ----------------Third------------- */}




    <View style={{ backgroundColor: '#0B36F0', width: 114, height: 53, alignItems: 'center', justifyContent:'center'}}>
        <View style={{height:53,width:78, justifyContent:'center', alignItems: 'center'}} >
      <Text style={{ color: 'white',textAlign:'center'}}>Pizza & Burger</Text>
      </View>
    </View>






     {/* ----------------Fourth------------- */}




     <View style={{ backgroundColor: '#0B36F0', width: 114, height: 53, alignItems: 'center', justifyContent:'center'}}>
        <View style={{height:53,width:78, justifyContent:'center', alignItems: 'center'}} >
      <Text style={{ color: 'white',textAlign:'center'}}>Pizza & Burger</Text>
      </View>
    </View>







  </View>
</ScrollView>

    </View>
   
  );
}

export default Menu;
