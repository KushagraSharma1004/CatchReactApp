import { View, Text, ScrollView, Image, SafeAreaView,Dimensions } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const OrderDetails2 = () => {

  const screenWidth = Dimensions.get('window').width;
  const screenWidthPending = screenWidth-218-15
  const screenWidthTime = screenWidth-130
  const screenHeight = Dimensions.get('window').height;

  return (
  
    <ScrollView vertical >
    <View style={{flex:1}} >
      <View style={{flex:1}} >


      <View style={{height:94,width:screenWidth, backgroundColor:'#0B36F0', display:'flex', flexDirection:'row'}} >
     <Image style={{marginTop:45, marginLeft:15}} source={require('../assets/images/arrowNotification.png')} ></Image>
    <View style={{ width:screenWidth-80, height:21, marginTop:51}} >
    <Text style={{color:'white', fontSize:18, fontWeight:'bold', textAlign:'center', height:21 }} >Order Details</Text>
    </View>
    </View>

    
    
    


    <View style={{marginTop:50, marginLeft:15}} >
      <View style={{flexDirection:'row'}} >
        <Text style={{fontSize:22, fontWeight:600, lineHeight:25.78, marginTop:5}} >#OT161408302840</Text>
        <View style={{width:screenWidthPending, height:36}} >
        <View style={{backgroundColor:'#FFA200', borderRadius:18, width:102, height:36, justifyContent:'center', position:'absolute', right:0}} >
          <Text style={{color:'white', textAlign:'center', fontSize:11, fontWeight:400, letterSpacing:2}} >PENDING</Text>
        </View>
        </View>
      </View>

      <View style={{flexDirection:'row'}} >
        <View style={{flexDirection:'column'}} >
        <Text style={{color:'#0B36F0', marginLeft:5, marginTop:10, fontSize:16, fontWeight:600}} >159.00 SR</Text>
        <Text style={{color:'#D13F3F', marginLeft:5, marginTop:10, fontSize:12, fontWeight:400}} >Pickup Time</Text>
        <Text style={{ marginLeft:5, marginTop:5, fontSize:16, fontWeight:400}} >ASAP</Text>
        </View>
        <View style={{flexDirection:'column', alignContent:'center', justifyContent:"center", width:screenWidthTime, height:36, marginTop:10}} >
          <View style={{position:'absolute', right:0}} >
          <Text style={{color:'#F12C4F', fontSize:22, fontWeight:600}} >05:00</Text>
          <Text style={{color:'#F12C4F', fontSize:9, fontWeight:400, letterSpacing:2, textAlign:'center'}} >TIME LEFT</Text>
          </View>
          </View>
      </View>
    </View>

      </View>


        <View>
            <View style={{width:screenWidth-30, height:131, shadowColor: "rgba(0, 0, 0, 0.35)", shadowOffset: { width: 1, height: 1}, shadowRadius: 8, alignSelf:'center', borderRadius:6, marginTop:30}} >
              <View style={{marginTop:10, marginLeft:15, marginBottom:15}} >
              <Text style={{color:'#D13F3F', fontSize:12, fontWeight:400}} >User Detail</Text>
              <Text style={{fontSize:16, fontWeight:400, marginTop:5}} >Himanshu</Text>
              <Text style={{fontSize:16, fontWeight:400, marginTop:5}} >+91-96688888888</Text>
              <Text style={{color:'#D13F3F', fontSize:12, fontWeight:400, marginTop:10}} >Car Detail</Text>
              <Text style={{fontSize:16, fontWeight:400, marginTop:3}} >Jeep Compass (1105 AAB)</Text>
            </View>
            </View>
        </View>


        <View>
          <View style={{marginLeft:15, marginTop:15}} >
            <Text style={{color:'#D13F3F', fontSize:12}} >Your Items</Text>
           
           
            <View style={{flexDirection:'row', marginTop:20}} >
              <Image source={require('../assets/images/coffeeOrderDetails.png')} ></Image>
              <View style={{flexDirection:'column', marginLeft:10}} >
                <Text style={{fontWeight:600,fontSize:15}} >Cappuccino</Text>
                <Text style={{fontWeight:400,fontSize:12, color:'#777777', marginTop:7}} >Medium</Text>
              </View>
              <View style={{flexDirection:'column', position:'absolute', right:15}} >
                <Text style={{fontWeight:600,fontSize:15}} >60.00SR</Text>
                <Text style={{fontWeight:400,fontSize:12, color:'#777777', marginTop:7}} >Qty: 1</Text>
              </View>
            </View>


            <View style={{flexDirection:'row', marginTop:20}} >
              <Image source={require('../assets/images/coffeeOrderDetails.png')} ></Image>
              <View style={{flexDirection:'column', marginLeft:10}} >
                <Text style={{fontWeight:600,fontSize:15}} >Hot Coffee</Text>
                <Text style={{fontWeight:400,fontSize:12, color:'#777777', marginTop:7}} >Small</Text>
              </View>
              <View style={{flexDirection:'column', position:'absolute', right:15}} >
                <Text style={{fontWeight:600,fontSize:15}} >80.00SR</Text>
                <Text style={{fontWeight:400,fontSize:12, color:'#777777', marginTop:7}} >Qty: 1</Text>
              </View>
            </View>


          </View>
        </View>


       <View style={{width:screenWidth-30, height:48, borderRadius:24, backgroundColor:'#0B36F0', alignSelf:'center', marginTop:50, justifyContent:'center', marginBottom:50}} >
                    <Text style={{color:'#FFFFFF', fontSize:18, textAlign:'center'}} >Cancel Order</Text>
                </View>



    </View>
    </ScrollView>
    
  )
}

export default OrderDetails2