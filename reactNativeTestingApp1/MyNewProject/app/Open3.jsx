import { View, Image, SafeAreaView, Dimensions,Text, ScrollView, StatusBar } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import Cart from './Cart';
const Open3 = () => {
  const screenWidth = Dimensions.get('window').width;
  
  const screenWidth1 = screenWidth-302
  const screenWidthBlackCircle = 302.51-30
  const screenWidthX = 302.51-16
  
  const screenWidth2 = screenWidth1/2
  
  const screenHeight = Dimensions.get('window').height;
  //const fullBoxHeight = 
  const screenHeight1 = screenHeight-357
  
  const screenHeight2 = screenHeight1/2
  
  return (
    
    
      <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={'#0B36F0'} />
        {/* Background Image */}
        <Image
          style={{ width:'100%', position: 'absolute', height:'100%' }}
          source={require('../assets/images/openBackground.png')}
        />
        <ScrollView style={{ flex: 1 }} vertical >
           <View style={{backgroundColor: 'transparent', height: 387+23.5, width: 302.51, marginLeft:screenWidth2, marginTop:screenHeight2, borderRadius:17}} >
            <View style={{zIndex:1}} >
       <Image style={{position:'absolute', left:screenWidthBlackCircle, backgroundColor:'black', borderRadius:50}} source={require('../assets/images/crossBackgroundOpen2.png')} ></Image>
       <Image source={require('../assets/images/xOpen2.png')} style={{position:'absolute', left:screenWidthX, top:13}} ></Image>
       </View>
        <View style={{backgroundColor: 'white', height: 387, width: 302.51, borderRadius:16, position:'absolute',bottom:0}}>
        
       <View style={{ borderTopLeftRadius:17, borderTopRightRadius:17}} >
            
        
            
            <View style={{display:'flex', flexDirection:'column', marginTop:15, alignItems:'center'}} >
                <Image style={{borderRadius:17}} source={require('../assets/images/burgerOpen2.png')} ></Image>
            </View>

            <View style={{display:'flex', flexDirection:'column', marginTop:10}} >
            <Text style={{color:'#302F2F', fontSize:18, fontWeight:600, width:277, alignSelf:'center'}} >Chicken Burger</Text>
            
            </View>

            <View style={{height:150, backgroundColor:'#FFFFFF', borderTopLeftRadius:17, borderTopRightRadius:17, marginTop:40, borderBottomLeftRadius:17, borderBottomRightRadius:17, shadowColor: "rgba(0, 0, 0, 0.08)", shadowOffset: { width: 1, height: 4}, shadowRadius: 8, shadowOpacity:8}} >
 
                <View style={{flexDirection:'row'}} >

                <View style={{flexDirection:'column', marginLeft:10}} >
                    <Text style={{fontSize:10, fontWeight:400, color:'#302F2F', marginTop:20}} >Price</Text>
                    <Text style={{fontSize:15, fontWeight:600, color:'#302F2F', marginTop:5}} >SAR 32.00</Text>
                </View>

                <View style={{flexDirection:'row', alignItems:'center',marginLeft:110}} >
                    <Image style={{borderRadius:50}} source={require('../assets/images/subtractOpen2.png')} ></Image>
                    <Text style={{color:'#777777', width:31, height:15, textAlign:'center', fontSize:13}} >1</Text>
                    <Image style={{borderRadius:50}} source={require('../assets/images/addOpen2.png')} ></Image>
                </View>
                
                </View>
                  <Link style={{ alignSelf:'center', marginTop:20, marginBottom:20}} href={'Cart'} >
                <View style={{width:278, height:48, borderRadius:24, backgroundColor:'#0B36F0', alignSelf:'center', marginTop:20, justifyContent:'center'}} >
                    <Text style={{color:'#FFFFFF', fontSize:18, textAlign:'center'}} >Add To Cart</Text>
                </View>
                </Link>

                </View>

        </View>





        </View>

      </View>

 </ScrollView>
      </View>
      
   
   
    
  );
};

export default Open3;
