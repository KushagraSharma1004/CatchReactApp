import { View, Image, SafeAreaView, Dimensions,Text, ScrollView } from 'react-native';
import React from 'react';

const Open2 = () => {
  const screenWidth = Dimensions.get('window').width;
  
  const screenWidth1 = screenWidth-302
  const screenWidthBlackCircle = 302.51-30
  const screenWidthX = 302.51-16
  
  const screenWidth2 = screenWidth1/2
  
  const screenHeight = Dimensions.get('window').height;
  //const fullBoxHeight = 
  const screenHeight1 = screenHeight-607
  
  const screenHeight2 = screenHeight1/2
  
  return (
    <ScrollView style={{ flex: 1 }} vertical >
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {/* Background Image */}
        <Image
          style={{ width: screenWidth, position: 'absolute', height:'100%' }}
          source={require('../assets/images/openBackground.png')}
        />
        
           <View style={{backgroundColor: 'transparent', height: 767+23.5, width: 302.51, marginLeft:screenWidth2, marginTop:screenHeight2, borderRadius:17, marginBottom:100}} >
            <View style={{zIndex:1}} >
       <Image style={{position:'absolute', left:screenWidthBlackCircle, backgroundColor:'black', borderRadius:50}} source={require('../assets/images/crossBackgroundOpen2.png')} ></Image>
       <Image source={require('../assets/images/xOpen2.png')} style={{position:'absolute', left:screenWidthX, top:13}} ></Image>
       </View>
        <View style={{backgroundColor: 'white', height: 767, width: 302.51, borderRadius:16, position:'absolute',bottom:0}}>
        
       <View style={{ borderTopLeftRadius:17, borderTopRightRadius:17}} >
            
        
            
            <View style={{display:'flex', flexDirection:'column', marginTop:15, alignItems:'center'}} >
                <Image style={{borderRadius:17}} source={require('../assets/images/burgerOpen2.png')} ></Image>
            </View>

            <View style={{display:'flex', flexDirection:'column', marginTop:10}} >
            <Text style={{color:'#302F2F', fontSize:18, fontWeight:600, width:277, alignSelf:'center'}} >Chicken Burger</Text>
            <Text style={{color:'blue', width:277, alignSelf:'center', marginTop:5}} >814 Cals</Text>
            </View>

            

            <View style={{ marginTop:20, marginLeft:10}} >
                <Text style={{ fontSize:12, fontWeight:400, color:'#D13F3F'}} >Description</Text>
                <View style={{width:227, marginTop:10, height:45}} >
                <Text style={{color:'#C2BDBD', fontSize:13}} >Bread crumbs and milk keep these chicken burgers unbelievably moist and flavourful. Try them at your next barbeque!</Text>
                </View>
            </View>
            <View style={{borderWidth:1,borderColor:'#DBDBDB', width:278, alignSelf:'center', marginTop:40}} ></View>
        </View>

        

        <View style={{ marginTop:10 }} >
            <View style={{width:35, height:14, marginTop:10, marginLeft:10}} >
            <Text style={{color:'#D13F3F', fontSize:12, fontWeight:500, lineHeight:14.06}} >Types</Text>
            </View>
                  
            <View>
                <View style={{marginTop:10, marginLeft:10, display:'flex', flexDirection:'row'}} >
                    <View style={{height:17, width:17, borderRadius:50, borderWidth:2,borderColor:'#DBDBDB'}}></View>
                    <Text style={{color:'#777777', marginLeft:15}} >Chicken Burger</Text>
                </View>
                <View style={{marginTop:10, marginLeft:10, display:'flex', flexDirection:'row'}} >
                    <Image source={require('../assets/images/checkOpen.png')} style={{height:17, width:17, borderRadius:50,borderColor:'#DBDBDB'}}></Image>
                    <Text style={{color:'#777777', marginLeft:15}} >Chicken Burger Extra Cheese</Text>
                </View>
            </View>
        </View>

        <View style={{borderWidth:1, borderColor:'#DBDBDB', width:278, alignSelf:'center', marginTop:20}} ></View>


        <View style={{backgroundColor:'white', marginTop:20}} >
            <View style={{width:35, height:14, marginTop:0, marginLeft:10}} >
            <Text style={{color:'#D13F3F', fontSize:12, fontWeight:500, lineHeight:14.06}} >Sizes</Text>
            </View>
            
            
            <View>
                <View style={{marginTop:10, marginLeft:10, display:'flex', flexDirection:'row'}} >
                    <View style={{height:17, width:17, borderRadius:50, borderWidth:2,borderColor:'#DBDBDB'}}></View>
                    <Text style={{color:'#777777', marginLeft:15}} >Regular</Text>
                    <Text style={{color:'#777777', fontSize:11, fontWeight:500, textAlign:'center', position:'absolute', right:10, top:2}} >SAR 32.00</Text>
                </View>
                <View style={{marginTop:10, marginLeft:10, display:'flex', flexDirection:'row'}} >
                    <Image source={require('../assets/images/checkOpen.png')} style={{height:17, width:17, borderRadius:50,borderColor:'#DBDBDB'}}></Image>
                    <Text style={{color:'#777777', marginLeft:15}} >Big</Text>
                    <Text style={{color:'#777777', fontSize:11, fontWeight:500, textAlign:'center', position:'absolute', right:10, top:2}} >SAR 32.00</Text>
                </View>
            </View>


        </View>

        <View style={{borderWidth:1,borderColor:'#DBDBDB', width:278, alignSelf:'center', marginTop:20}} ></View>



        <View style={{backgroundColor:'white', marginTop:20}} >
            <View style={{width:50, height:14, marginTop:0, marginLeft:10}} >
            <Text style={{color:'#D13F3F', fontSize:12, fontWeight:500, lineHeight:14.06}} >Choices</Text>
            </View>
            
            
            <View>
                <View style={{marginTop:10, marginLeft:10, display:'flex', flexDirection:'row'}} >
                    <View style={{height:17, width:17, borderRadius:0, borderWidth:2,borderColor:'#DBDBDB'}}></View>
                    <Text style={{color:'#777777', marginLeft:15}} >Without lettuce</Text>
                </View>
                <View style={{marginTop:10, marginLeft:10, display:'flex', flexDirection:'row'}} >
                <View style={{height:17, width:17, borderRadius:0, borderWidth:2,borderColor:'#DBDBDB'}}></View>
                    <Text style={{color:'#777777', marginLeft:15}} >Without lettuce</Text>
                </View>
            </View>

        </View>

        



        <View style={{height:150, backgroundColor:'#FFFFFF', borderTopLeftRadius:17, borderTopRightRadius:17, marginTop:40, borderBottomLeftRadius:17, borderBottomRightRadius:17, shadowColor: "rgba(0, 0, 0, 0.08)", shadowOffset: { width: 1, height: 4}, shadowRadius: 8, shadowOpacity:8}} >
                
                <View style={{flexDirection:'row'}} >

                <View style={{flexDirection:'column',marginLeft:10}} >
                    <Text style={{fontSize:10, fontWeight:400, color:'#302F2F', marginTop:20}} >Price</Text>
                    <Text style={{fontSize:15, fontWeight:600, color:'#302F2F', marginTop:5}} >SAR 32.00</Text>
                </View>

                <View style={{flexDirection:'row', alignItems:'center',marginLeft:110}} >
                    <Image style={{borderRadius:50}} source={require('../assets/images/subtractOpen2.png')} ></Image>
                    <Text style={{color:'#777777', width:31, height:15, textAlign:'center', fontSize:13}} >1</Text>
                    <Image style={{borderRadius:50}} source={require('../assets/images/addOpen2.png')} ></Image>
                </View>
                
                </View>

                <View style={{width:278, height:48, borderRadius:24, backgroundColor:'#0B36F0', alignSelf:'center', marginTop:20, justifyContent:'center'}} >
                    <Text style={{color:'#FFFFFF', fontSize:18, textAlign:'center'}} >Add To Cart</Text>
                </View>

        </View>





        </View>

      </View>


      </View>
      
    </SafeAreaView>
    </ScrollView>
    
  );
};

export default Open2;
