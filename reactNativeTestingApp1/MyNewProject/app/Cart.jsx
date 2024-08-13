import { View, Text, ScrollView, Dimensions, Image, TextInput, Button, StatusBar } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
import Open3 from './Open3';
// import Onboard_Screen_Banner from './Onboard_Screen_Banner';
const Cart = () => {

  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  const screenWidthApply = screenWidth-178

  return (
    <View style={{flex:1}} >
       <StatusBar backgroundColor={'#0B36F0'} />
       <View style={{height:94,width:screenWidth, backgroundColor:'#0B36F0', display:'flex', flexDirection:'row'}} >
    <Link href='Onboard_Screen_Banner' style={{marginTop:40, marginLeft:15}} >
     <Image style={{marginTop:45, marginLeft:15}} source={require('../assets/images/arrowNotification.png')} ></Image>
   </Link>
    <View style={{ width:screenWidth-85, marginTop:51}} >
    <Text style={{color:'white', fontSize:18, fontWeight:'bold', textAlign:'center'}} >My Cart</Text>
    </View>
    <View style={{marginTop:55}} >
      <Image source={require('../assets/images/binCart.png')} ></Image>
    </View>
    </View>



    <ScrollView style={{flex:1}} vertical >
      <View>



      
          
          
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


    <View>
          <View style={{marginLeft:15, marginTop:40}} >
            <Text style={{color:'#D13F3F', fontSize:12}} >Your Items</Text>
           
           
            <View style={{flexDirection:'row', marginTop:20}} >
              <Image source={require('../assets/images/coffeeOrderDetails.png')} ></Image>
              <View style={{flexDirection:'column', marginLeft:10}} >
                <Text style={{fontWeight:600,fontSize:15}} >Cappuccino</Text>
                <Text style={{fontWeight:400,fontSize:12, color:'#777777', marginTop:7}} >Medium</Text>
              </View>
              <View style={{flexDirection:'column', position:'absolute', right:15}} >
              <View style={{flexDirection:'column',marginLeft:110}} >
              <View style={{flexDirection:'row', alignItems:'center',marginLeft:110}} >
                    <Image style={{borderRadius:50, width:24, height:24}} source={require('../assets/images/subtractOpen2.png')} ></Image>
                    <Text style={{color:'#777777', width:31, height:15, textAlign:'center', fontSize:13}} >1</Text>
                    <Image style={{borderRadius:50, width:24, height:24}} source={require('../assets/images/addOpen2.png')} ></Image>
                </View>
                <Text style={{fontWeight:600,fontSize:15, marginTop:10, position:'absolute', right:15, top:25}} >60.00SR</Text>
                </View>
                
              </View>
            </View>


            <View style={{flexDirection:'row', marginTop:20}} >
              <Image source={require('../assets/images/coffeeOrderDetails.png')} ></Image>
              <View style={{flexDirection:'column', marginLeft:10}} >
                <Text style={{fontWeight:600,fontSize:15}} >Hot Coffee</Text>
                <Text style={{fontWeight:400,fontSize:12, color:'#777777', marginTop:7}} >Small</Text>
              </View>
              <View style={{flexDirection:'column', position:'absolute', right:15}} >
              <View style={{flexDirection:'column',marginLeft:110}} >
              <View style={{flexDirection:'row', alignItems:'center',marginLeft:110}} >
                    <Image style={{borderRadius:50, width:24, height:24}} source={require('../assets/images/subtractOpen2.png')} ></Image>
                    <Text style={{color:'#777777', width:31, height:15, textAlign:'center', fontSize:13}} >1</Text>
                    <Image style={{borderRadius:50, width:24, height:24}} source={require('../assets/images/addOpen2.png')} ></Image>
                </View>
                <Text style={{fontWeight:600,fontSize:15, marginTop:10, position:'absolute', right:15, top:25}} >80.00SR</Text>
                </View>
                </View>
            </View>
           </View>
        </View>


            <Link href={'Onboard_Screen_Banner'} style={{ alignSelf:'center', marginTop:40}}>
        <View style={{width:screenWidth-30, height:40, borderRadius:6, backgroundColor:'#FFFFFF', alignSelf:'center', marginTop:40, justifyContent:'center',borderWidth:1, borderColor:'#0B36F0'}} >
                    <Text style={{color:'#0B36F0', fontSize:15, textAlign:'center', fontWeight:600}} >+ Add More Items</Text>
                </View>
                </Link>



                <View style={{marginLeft:15}} >
                  <Text style={{color:'#D13F3F', fontSize:12, fontWeight:400, marginTop:30}} >Add Special Request</Text>
                  <TextInput style={{backgroundColor:'#F2F2F2', borderRadius:20, marginTop:10, height:81, width:screenWidth-30, borderWidth:1, borderColor:'#E4E4E4', paddingLeft:10, fontSize:12}} placeholder='Add instruction' placeholderTextColor={'#B9B9B9'} ></TextInput>
                </View>


          
          <View style={{height:309, marginTop:70, borderTopLeftRadius:30,borderTopRightRadius:30, shadowColor: "rgba(0, 0, 0, 0.08)", shadowOffset: { width: 1, height: 4}, shadowRadius: 8, shadowOpacity:8}} >
            <View style={{flexDirection:'row'}} >
              <View style={{height:48, width:247, marginLeft:15, marginTop:30}} >
              <TextInput style={{ marginTop:0,borderRadius:40.5, backgroundColor:'#F2F2F2', borderWidth:1, borderColor:'#E4E4E4', width:247, height:48, paddingLeft:15, fontSize:12}} placeholder='Promo Code' placeholderTextColor={'#B9B9B9'} ></TextInput>
              <Text style={{fontSize:12, fontWeight:400, textDecorationLine:'underline', textDecorationColor:'#0B36F0', color:'#0B36F0', position:'absolute', right:15, top:14}} >Get Code</Text>
              </View>

              <View style={{width:screenWidthApply/2, position:'absolute', right:15}} >
              <View style={{backgroundColor:'#0B36F0', width:178/2, height:48, borderRadius:40.5, alignContent:'center', justifyContent:'center', marginTop:30, alignSelf:'center'}} >
                <Text style={{fontSize:15, fontWeight:400, textAlign:'center', color:'white'}} >Apply</Text>
             </View>
             </View>


             </View>

             <View style={{}} >
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
                    <Text style={{color:'#FFFFFF', fontSize:18, textAlign:'center'}} >Checkout</Text>
                </View>
             
          </View>


          
          
          </View>

          
          
    </ScrollView>
     
    </View>
  )
}

export default Cart