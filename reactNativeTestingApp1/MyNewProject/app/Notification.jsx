import { View, Text, Image, Dimensions, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import {useRouter, Link} from 'expo-router';
import OrderScreen from './OrderScreen'
import Onboard_Screen_Banner from './Onboard_Screen_Banner'
import Profile from './Profile'
const Notification = () => {
    const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  //console.log(screenWidth)
  return (
    
    <View>

    {/* ---------------First--------------- */}

    <StatusBar backgroundColor={'#0B36F0'} />

    <View style={{height:94,width:screenWidth, backgroundColor:'#0B36F0', display:'flex', flexDirection:'row'}} >
    <Link href='Profile' style={{marginTop:40, marginLeft:15}} >
     <Image style={{marginTop:45, marginLeft:15}} source={require('../assets/images/arrowNotification.png')} ></Image>
   </Link>
    <View style={{ width:screenWidth-80, marginTop:51,}} >
    <Text style={{color:'white', fontSize:18, fontWeight:'bold', textAlign:'center'}} >Notification</Text>
    </View>
    </View>

    <ScrollView vertical >
    
    <View style={{marginTop:40, display:'flex', flexDirection:'column'}} >
        <View style={{display:'flex', flexDirection:'row'}} >
        <View style={{height:8, width:8, borderRadius:50, backgroundColor:'#0B36F0', marginTop:6, marginLeft:20}} >  
        </View>
        <Text style={{fontSize:18, fontWeight:'bold', marginLeft:10}} >Order picked up</Text>
    </View>
    <View>
        <Text style={{color:'#707070', marginLeft:38, marginTop:5}} >Your order has been picked up.</Text>
        <Text style={{color:'#F92A82', marginLeft:38, marginTop:10}} >Dec 18, 2022 at 12:08 AM</Text>
    </View>
</View>

<View style={{borderWidth:1,borderColor:'#DBDBDB', width:342, alignSelf:'center', marginTop:15}} ></View>



     {/* ---------------Second--------------- */}




    
    <View style={{marginTop:15, display:'flex', flexDirection:'column'}} >
        <View style={{display:'flex', flexDirection:'row'}} >
        <View style={{height:8, width:8, borderRadius:50, backgroundColor:'#0B36F0', marginTop:6, marginLeft:20}} >  
        </View>
        <Text style={{fontSize:18, fontWeight:'bold', marginLeft:10}} >Order picked up</Text>
    </View>
    <View>
        <Text style={{color:'#707070', marginLeft:38, marginTop:5}} >Your order has been picked up.</Text>
        <Text style={{color:'#F92A82', marginLeft:38, marginTop:10}} >Dec 18, 2022 at 12:08 AM</Text>
    </View>
</View>

<View style={{borderWidth:1,borderColor:'#DBDBDB', width:342, alignSelf:'center', marginTop:15}} ></View>





      {/* ---------------Third--------------- */}





      
    
    <View style={{marginTop:15, display:'flex', flexDirection:'column'}} >
        <View style={{display:'flex', flexDirection:'row'}} >
        <View style={{height:8, width:8, borderRadius:50, backgroundColor:'#0B36F0', marginTop:6, marginLeft:20}} >  
        </View>
        <Text style={{fontSize:18, fontWeight:'bold', marginLeft:10}} >Order picked up</Text>
    </View>
    <View>
        <Text style={{color:'#707070', marginLeft:38, marginTop:5}} >Your order has been picked up.</Text>
        <Text style={{color:'#F92A82', marginLeft:38, marginTop:10}} >Dec 18, 2022 at 12:08 AM</Text>
    </View>
</View>

<View style={{borderWidth:1,borderColor:'#DBDBDB', width:342, alignSelf:'center', marginTop:15}} ></View>






         {/* ---------------Fourth--------------- */}




         
    
    <View style={{marginTop:15, display:'flex', flexDirection:'column'}} >
        <View style={{display:'flex', flexDirection:'row'}} >
        <View style={{height:8, width:8, borderRadius:50, backgroundColor:'#0B36F0', marginTop:6, marginLeft:20}} >  
        </View>
        <Text style={{fontSize:18, fontWeight:'bold', marginLeft:10}} >Order picked up</Text>
    </View>
    <View>
        <Text style={{color:'#707070', marginLeft:38, marginTop:5}} >Your order has been picked up.</Text>
        <Text style={{color:'#F92A82', marginLeft:38, marginTop:10}} >Dec 18, 2022 at 12:08 AM</Text>
    </View>
</View>

<View style={{borderWidth:1,borderColor:'#DBDBDB', width:342, alignSelf:'center', marginTop:15}} ></View>





</ScrollView>
    </View>
  )
}

export default Notification