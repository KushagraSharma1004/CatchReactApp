import { View, Text, ScrollView, Image, SafeAreaView,Dimensions } from 'react-native'
import React from 'react'
import { Link, useRouter } from 'expo-router'
import Order from './Order'
const OrderDetails = () => {

  const screenWidth = Dimensions.get('window').width;
  const screenWidthPending = screenWidth-218-15
  const screenWidthTime = screenWidth-217
  const screenHeight = Dimensions.get('window').height;

  const router = useRouter();

  const handleOrder = () => {
    router.push('./Order');
  };

  return (
  
    <ScrollView vertical >
    <View style={{flex:1}} >
      <View style={{flex:1}} >


      <View style={{height:94,width:screenWidth, backgroundColor:'#0B36F0', display:'flex', flexDirection:'row'}} >
     <Link href={'Order'} >
     <Image style={{marginTop:45, marginLeft:15}} source={require('../assets/images/arrowNotification.png')} ></Image>
    </Link>
    <View style={{ width:screenWidth-80, height:21, marginTop:51}} >
    <Text style={{color:'white', fontSize:18, fontWeight:'bold', textAlign:'center', height:21 }} >Order Details</Text>
    </View>
    </View>

    
    <View style={{flexDirection:'column', marginTop:30, marginLeft:15}}>
      <View style={{flexDirection:'row'}} >
        <Image source={require('../assets/images/chessOrderDetails.png')} ></Image>
        <View style={{flexDirection:'column'}} >
          <Text style={{fontSize:20, fontWeight:600, marginLeft:10}} >Jahez for AI khair</Text>         
          <View style={{flexDirection:'row', marginLeft:10, marginTop:10}} >
          <Image style={{}} source={require('../assets/images/locationOrderDetails.png')} ></Image>
        <Text style={{color:'#777777', width:260, marginLeft:5}} >Block-6, Nabard staff Quarters, Model Town</Text> 
        </View> 
        </View>
      </View> 
    </View>


    <View style={{marginTop:30, marginLeft:15}} >
      <View style={{flexDirection:'row'}} >
        <Text style={{fontSize:22, fontWeight:600, lineHeight:25.78, marginTop:5}} >#OT161408302840</Text>
        <View style={{width:screenWidthPending, height:36}} >
        <View style={{backgroundColor:'#FFA200', borderRadius:18, width:102, height:36, justifyContent:'center', position:'absolute', right:0}} >
          <Text style={{color:'white', textAlign:'center', fontSize:11, fontWeight:400, letterSpacing:2}} >PENDING</Text>
        </View>
        </View>
      </View>

      <View style={{flexDirection:'row'}} >
        <Image style={{marginTop:12.5}} source={require('../assets/images/calenderOrderDetails.png')} ></Image>
        <Text style={{color:'#777777', marginLeft:10, marginTop:11}} >04 Jan 2023 11:00 AM</Text>
        <View style={{flexDirection:'column', alignContent:'center', justifyContent:"center", width:screenWidthTime, height:36, marginTop:10}} >
          <View style={{position:'absolute', right:0}} >
          <Text style={{color:'#F12C4F', fontSize:22, fontWeight:600}} >03:59</Text>
          <Text style={{color:'#F12C4F', fontSize:9, fontWeight:400, letterSpacing:2, textAlign:'center'}} >TIME LEFT</Text>
          </View>
          </View>
      </View>
    </View>

      </View>


        <View>
            <View style={{width:screenWidth-30, height:97, shadowColor: "rgba(0, 0, 0, 0.15)", shadowOffset: { width: 1, height: 1}, shadowRadius: 8, alignSelf:'center', borderRadius:6, marginTop:30}} >
              <View style={{marginTop:15, marginLeft:15, marginBottom:15}} >
              <Text style={{color:'#D13F3F', fontSize:12, fontWeight:400}} >User Detail</Text>
              <Text style={{fontSize:16, fontWeight:400, marginTop:5}} >Himanshu</Text>
              <Text style={{fontSize:16, fontWeight:400, marginTop:5}} >+91-96688888888</Text>
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




        <View style={{width:screenWidth-30,height:331,marginTop:40,shadowColor: "rgba(0, 0, 0, 0.15)", shadowOffset: { width: 1, height: 1}, shadowRadius: 8, alignSelf:'center', borderRadius:6}} >
          <View style={{marginTop:30, marginLeft:20, flexDirection:'row'}} >
            <View>
            <View style={{height:23, width:23, borderRadius:50, backgroundColor:'#12E000', justifyContent:'center'}} >
              <Image style={{alignSelf:'center'}} source={require('../assets/images/tickOrderDetails.png')} ></Image>
            </View>

            <View style={{height:56,width:2, backgroundColor:'#12E000', marginLeft:10}} ></View>
            
            
            <View style={{height:23, width:23, borderRadius:50, backgroundColor:'#12E000', justifyContent:'center'}} >
              <Image style={{alignSelf:'center'}} source={require('../assets/images/tickOrderDetails.png')} ></Image>
            </View>


            <View style={{height:30,width:2, backgroundColor:'#12E000', marginLeft:10}} ></View>

            <View style={{height:30,width:2, backgroundColor:'#D9D9D9', marginLeft:10}} ></View>

            <View style={{height:23, width:23, borderRadius:50, backgroundColor:'#D9D9D9'}} ></View>

            <View style={{height:56,width:2, backgroundColor:'#D9D9D9', marginLeft:10}} ></View>

            <View style={{height:23, width:23, borderRadius:50, backgroundColor:'#D9D9D9'}} ></View>

</View>


              <View style={{marginLeft:20}} >
                <Image source={require('../assets/images/photo1OrderDetails.png')} ></Image>
                <Image style={{marginTop:40}} source={require('../assets/images/photo3OrderDetails.png')} ></Image>
                <Image style={{marginTop:55}} source={require('../assets/images/photo4OrderDetails.png')} ></Image>
                <Image style={{marginTop:47}} source={require('../assets/images/photo2OrderDetails.png')} ></Image>
              </View>



              <View style={{marginLeft:10}} >
              
              <Text style={{fontSize:13, fontWeight:400}} >Order Placed</Text>
              <Text style={{fontSize:10, fontWeight:400, color:'#777777', marginTop:3}} >Waiting to be accepted</Text>

              <Text style={{fontSize:13, fontWeight:400, marginTop:40}} >Accepted</Text>
              <Text style={{fontSize:10, fontWeight:400, color:'#777777', marginTop:3}} >Preparing your order</Text>

              <Text style={{fontSize:13, fontWeight:400, marginTop:55}} >Ready to pickup</Text>
              <Text style={{fontSize:10, fontWeight:400, color:'#777777', marginTop:3}} >Waiting for pickup</Text>

              <Text style={{fontSize:13, fontWeight:400, marginTop:55}} >Picked up</Text>
              

            </View>



    </View>
        </View>




        <View style={{marginTop:10}} >
          <View style={{marginTop:30, marginLeft:15}} >
            <Text style={{color:'#777777'}} >Subtotal</Text>
            <Text style={{color:'#777777', marginTop:10}} >Tax & Fees</Text>
          </View>

          <View style={{position:'absolute',top:30, right:15}} >
            <Text style={{color:'#777777'}} >139.00 SR</Text>
            <Text style={{color:'#777777', marginTop:10}} >  20.00 SR</Text>
          </View>

          <View style={{marginTop:20, marginLeft:15}} >
            <Text style={{fontWeight:600, fontSize:20}} >Total</Text>
            <View style={{position:'absolute', right:15}} >
          <Text style={{fontWeight:600, fontSize:20}} >159.00 SR</Text>
       </View> 
       </View>
            
       </View>



       <View style={{width:screenWidth-30, height:48, borderRadius:24, backgroundColor:'#0B36F0', alignSelf:'center', marginTop:25, justifyContent:'center', marginBottom:50}} >
                    <Text style={{color:'#FFFFFF', fontSize:18, textAlign:'center'}} >Cancel Order</Text>
                </View>



    </View>
    </ScrollView>
    
  )
}

export default OrderDetails