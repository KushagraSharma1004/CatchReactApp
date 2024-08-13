import { View, Image, SafeAreaView, Dimensions,Text, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import React from 'react';
import { Link, useRouter } from 'expo-router';
const Open = () => {
  const screenWidth = Dimensions.get('window').width;
  
  const screenWidth1 = screenWidth-302
  const screenWidthBurger = 302.51-71
  
  const screenWidth2 = screenWidth1/2
  
  const screenHeight = Dimensions.get('window').height;
  //const fullBoxHeight = 
  const screenHeight1 = screenHeight-607
  
  const screenHeight2 = screenHeight1/2

  const router = useRouter();

  const handleCart = () => {
    router.push('./Cart');
  };
  
  return (
    
        
    
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor={'#0B36F0'} />
        {/* Background Image */}
        <Image
          style={{ width:'100%', position: 'absolute', height:'100%' }}
          source={require('../assets/images/openBackground.png')}
        />
        <ScrollView vertical >
           <View style={{backgroundColor: 'transparent', height: 687+35.5, width: 302.51, marginLeft:screenWidth2, marginTop:screenHeight2, borderRadius:17, marginBottom:screenHeight2}} >
       <Image style={{position:'absolute', left:screenWidthBurger/2,zIndex:1, backgroundColor:'black', borderRadius:17}} source={require('../assets/images/openBurger.png')} ></Image>
        <View style={{backgroundColor: '#EAEEFF', height: 687, width: 302.51, borderRadius:16, position:'absolute',bottom:0}}>
        
       <View style={{backgroundColor:'white', borderTopLeftRadius:17, borderTopRightRadius:17, height:199}} >
            <View style={{display:'flex', flexDirection:'row', marginTop:20}} >
                <Text style={{color:'#777777', position:'absolute', left:15}} >814 Cals</Text>
                <Text style={{ position:'absolute', right:15}} >SAR 32.00</Text>
            </View>

            <View style={{ marginTop:50, justifyContent:'center', alignContent:'center', marginBottom:50}} >
                <Text style={{ fontSize:15, fontWeight:600,textAlign:'center'}} >Chicken Burger</Text>
                <View style={{width:227, alignSelf:'center', marginTop:10}} >
                <Text style={{color:'#777777', textAlign:'center', fontSize:13}} >Bread crumbs and milk keep these chicken burgers unbelievably moist and flavourful. Try them at your next barbeque!</Text>
                </View>
            </View>
        </View>

        <View style={{backgroundColor:'white', height:131, marginTop:5}} >
            <View style={{width:35, marginTop:10, marginLeft:10}} >
            <Text style={{color:'#D13F3F', fontSize:11, fontWeight:500, lineHeight:14.06}} >Types</Text>
            </View>
            <View style={{borderWidth:1,borderColor:'#DBDBDB', width:302.51, alignSelf:'center', marginTop:10}} ></View>
            
            
            <View>
                <View style={{marginTop:20, marginLeft:10, display:'flex', flexDirection:'row'}} >
                    <View style={{height:17, width:17, borderRadius:50, borderWidth:2,borderColor:'#DBDBDB'}}></View>
                    <Text style={{color:'#777777', marginLeft:15}} >Chicken Burger</Text>
                </View>
                <View style={{marginTop:10, marginLeft:10, display:'flex', flexDirection:'row',marginBottom:20}} >
                    <Image source={require('../assets/images/checkOpen.png')} style={{height:17, width:17, borderRadius:50,borderColor:'#DBDBDB'}}></Image>
                    <Text style={{color:'#777777', marginLeft:15}} >Chicken Burger Extra Cheese</Text>
                </View>
            </View>
        </View>


        <View style={{backgroundColor:'white', height:131, marginTop:5}} >
            <View style={{width:35, height:14, marginTop:10, marginLeft:10}} >
            <Text style={{color:'#D13F3F', fontSize:12, fontWeight:500, lineHeight:14.06}} >Sizes</Text>
            </View>
            <View style={{borderWidth:1,borderColor:'#DBDBDB', width:302.51, alignSelf:'center', marginTop:10}} ></View>
            
            <View style={{marginBottom:20}} >
                <View style={{marginTop:20, marginLeft:10, display:'flex', flexDirection:'row'}} >
                    <View style={{height:17, width:17, borderRadius:50, borderWidth:2,borderColor:'#DBDBDB'}}></View>
                    <Text style={{color:'#777777', marginLeft:15}} >Regular</Text>
                    <Text style={{color:'#777777', fontSize:11, fontWeight:500, textAlign:'center', position:'absolute', right:10, top:2}} >SAR 32.00</Text>
                </View>
                <View style={{marginTop:10, marginLeft:10, display:'flex', flexDirection:'row', marginBottom:20}} >
                    <Image source={require('../assets/images/checkOpen.png')} style={{height:17, width:17, borderRadius:50,borderColor:'#DBDBDB'}}></Image>
                    <Text style={{color:'#777777', marginLeft:15}} >Big</Text>
                    <Text style={{color:'#777777', fontSize:11, fontWeight:500, textAlign:'center', position:'absolute', right:10, top:2}} >SAR 32.00</Text>
                </View>
            </View>


        </View>




<View style={{backgroundColor:'white',borderBottomLeftRadius:16, borderBottomRightRadius:16}} >
        <View style={{backgroundColor:'white', height:111, marginTop:5}} >
            <View style={{width:50, height:14, marginTop:10, marginLeft:10}} >
            <Text style={{color:'#D13F3F', fontSize:12, fontWeight:500, lineHeight:14.06}} >Choices</Text>
            </View>
            <View style={{borderWidth:1,borderColor:'#DBDBDB', width:302.51, alignSelf:'center', marginTop:10}} ></View>
            
            <View>
                <View style={{marginTop:20, marginLeft:10, display:'flex', flexDirection:'row', alignItems:'center'}} >
                    <View style={{height:17, width:17, borderRadius:0, borderWidth:2,borderColor:'#DBDBDB'}}></View>
                    <Text style={{color:'#777777', marginLeft:15}} >Without lettuce</Text>
                </View>
                <View style={{marginTop:10, marginLeft:10, display:'flex', flexDirection:'row', alignItems:'center'}} >
                <View style={{height:17, width:17, borderRadius:0, borderWidth:2,borderColor:'#DBDBDB'}}></View>
                    <Text style={{color:'#777777', marginLeft:15}} >Without lettuce</Text>
                </View>
            </View>

        </View>

        



        <View style={{height:100, backgroundColor:'white', borderBottomLeftRadius:16, borderBottomRightRadius:16, flexDirection:'row'}} >
                
                <View style={{flexDirection:'row', width:'100%', justifyContent:'center', marginTop:50}} >
                    <View style={{flexDirection:'row', height:31, width:'46%'}} >
                    <Image style={{borderRadius:50, width:31, height:31}} source={require('../assets/images/subtractOpen2.png')} ></Image>
                    <Text style={{color:'#777777',width:31, textAlign:'center', fontSize:13, alignSelf:'center'}} >2</Text>
                    <Image style={{borderRadius:50, width:31, height:31}} source={require('../assets/images/addOpen2.png')} ></Image>
                </View>
                    
                <View style={{flexDirection:'row', height:31, width:'42%', alignItems:'center'}} >  
                    <TouchableOpacity onPress={handleCart} style={{flexDirection:'row', height:'100%', width:'100%', alignItems:'center'}} >
                        <Text style={{color:'#0B36F0', textAlign:'center', fontSize:14, fontWeight:700}} >Add To Cart</Text>
                    <Image style={{borderRadius:50, width:31, height:31, position:'absolute', right:0}} source={require('../assets/images/tickOpen.png')} ></Image>
                </TouchableOpacity>
                </View>
                
                </View>
                      </View>
               
                
        </View>





        </View>

      </View>

 </ScrollView>
      </View>
      
   
   
    
  );
};

export default Open;
