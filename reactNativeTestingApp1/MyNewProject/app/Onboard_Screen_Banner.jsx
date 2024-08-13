import { Text, View, TextInput, Image, ScrollView, FlatList, Dimensions, linearGradient, Touchable, TouchableOpacity, StatusBar } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import { Link,useRouter } from "expo-router";
import OrderScreen from './OrderScreen'
import Profile from './Profile'
import Map from './Map'
// import BottomNav from './BottomNav';

const Onboard_Screen_Banner = () => {
  const flatListRef = useRef();
  const screenWidth = Dimensions.get('window').width;
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  const handleMenu = () => {
    router.push('/Menu');
  };

  useEffect(() => {
    let interval = setInterval(() => {
      if (activeIndex === carouselData.length - 1) {
        flatListRef.current.scrollToIndex({
          index: 0,
          animated: true,
        });
      } else {
        flatListRef.current.scrollToIndex({
          index: activeIndex + 1,
          animated: true,
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const getItemLayout = (data, index) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index: index,
  });

  const carouselData = [
    {
      id: '01',
      image: require('../assets/images/pageFirstNavBarImage.png'),
    },
    {
      id: '02',
      image: require('../assets/images/pageFirstNavBarImage.png'),
    },
    {
      id: '03',
      image: require('../assets/images/pageFirstNavBarImage.png'),
    },
    {
      id: '04',
      image: require('../assets/images/pageFirstNavBarImage.png'),
    },
    {
      id: '05',
      image: require('../assets/images/pageFirstNavBarImage.png'),
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <View>
        <Image source={item.image} style={{ height: 200, width: screenWidth }} />
      </View>
    );
  };

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / screenWidth);
    setActiveIndex(index);
  };

  const renderDotIndicators = () => {
    return carouselData.map((dot, index) => {
      if (activeIndex === index) {
        return (
          <View key={index} style={{ backgroundColor: 'black', height: 15, width: 15, borderRadius: 50, marginHorizontal: 6 }}></View>
        );
      } else {
        return (
          <View key={index} style={{ backgroundColor: 'grey', height: 10, width: 10, borderRadius: 5, marginHorizontal: 6 }}></View>
        );
      }
    });
  };




  
  return (
    <View style={{ flex: 1 , backgroundColor:'white'}}>
      <StatusBar backgroundColor={'#0B36F0'} />
      <ScrollView vertical>
        <View style={{ height: 94, backgroundColor: '#0B36F0', paddingHorizontal: 10 }}>
          <View style={{ height: 27, backgroundColor: '#0B36F0', alignItems: 'center', paddingHorizontal: 10, borderWidth: 0.5, borderColor:'#d6d6d6', display:'flex', flexDirection:'row', marginTop:51, width:315, alignSelf:'center', borderRadius:3}}>
           <Image style={{}} source={require('../assets/images/searchImage.png')} ></Image>
           <TextInput style={{ height: 23, paddingHorizontal: 10, width: '90%', color:'#d6d6d6',marginLeft:10, fontSize:8, borderWidth:0, alignSelf:'center'}} placeholder="Search for dishes, restaurants" placeholderTextColor={'#d6d6d6'}/>
          </View>
        </View>

        <View>
          <FlatList
            getItemLayout={getItemLayout}
            ref={flatListRef}
            keyExtractor={(item) => item.id}
            data={carouselData}
            renderItem={renderItem}
            horizontal
            pagingEnabled
            onScroll={handleScroll}
            showsHorizontalScrollIndicator={false}
          />
          <View style={{ alignSelf: 'center', position: 'absolute', bottom: 10, flexDirection: 'row', justifyContent: 'center' }}>
            {renderDotIndicators()}
            
          </View>
          <Image style={{ width:137, position:'absolute',right:0, top:68/2}} source={require('../assets/images/20Discount.png')} ></Image>
        </View>

        <ScrollView horizontal style={{ marginTop: 40, width:screenWidth }}>
          <View style={{justifyContent:'space-evenly', width:screenWidth, flexDirection:'row' }} >
         
          <View style={{ alignItems: 'center', height: 105, flexDirection:'horizontal' }}>
            <View style={{backgroundColor: '#EAEEFF', borderRadius:15, height:66, width:66, alignItems:'center', justifyContent:'center'}} >
              <Image style={{ height: 40, width: 60, marginBottom: 5 , alignSelf:'center'}} source={require('../assets/images/page2Food1.png')} /> 
            </View>  
              <View>
              <Text style={{ fontSize: 11, color: '#000', textAlign: 'center' }}>European</Text>
              </View>
          </View>

          <View style={{ alignItems: 'center', height: 105, flexDirection:'horizontal', width:66 }}>
          <View style={{backgroundColor: '#EAEEFF', borderRadius:15, height:66, width:66, alignItems:'center', justifyContent:'center'}} >
            <Image style={{ height: 43, width: 56, marginBottom: 5, alignContent: 'center' }} source={require('../assets/images/page2Food2.png')} />
            </View>
            <View>
            <Text style={{ fontSize: 11, color: '#000', textAlign: 'center' }}>Arabic Traditional</Text>
            </View>
          </View>

          <View style={{ alignItems: 'center', height: 105, flexDirection:'horizontal' }}>
            <View style={{backgroundColor: '#EAEEFF', borderRadius:15, height:66, width:66, alignItems:'center', justifyContent:'center'}} >
            <Image style={{ height: 40, width: 59, marginBottom: 5 }} source={require('../assets/images/page2Food3.png')} />
            </View>
            <View>
            <Text style={{ fontSize: 11, color: '#000', textAlign: 'center' }}>Fast Food</Text>
          </View>
          </View>

          <View style={{ alignItems: 'center', height: 105, flexDirection:'horizontal' }}>
            <View style={{backgroundColor: '#EAEEFF', borderRadius:15, height:66, width:66, alignItems:'center', justifyContent:'center'}} >
            <Image style={{ height: 39, width: 60, marginBottom: 5 }} source={require('../assets/images/page2Food4.png')} />
            </View>
            <View>
            <Text style={{ fontSize: 11, color: '#000', textAlign: 'center' }}>Indian</Text>
          </View>
          </View>

          <View style={{ alignItems: 'center', height: 105, flexDirection:'horizontal' }}>
            <View style={{backgroundColor: '#EAEEFF', borderRadius:15, height:66, width:66, alignItems:'center', justifyContent:'center'}} >
            <Image style={{ height: 43, width: 66, marginBottom: 5 }} source={require('../assets/images/page2Food5.png')} />
            </View>
            <View>
            <Text style={{ fontSize: 11, color: '#000', textAlign: 'center' }}>American</Text>
          </View>
          </View>
          </View>
        </ScrollView>



          {/* -------------First------------ */}


            <TouchableOpacity onPress={handleMenu}>
        <View style={{ height:90, marginTop:10,}}>
          <View style={{flexDirection:'row'}} >
            <Image source={require('../assets/images/sweets.png')} style={{ marginLeft:15, height: 73, width: 73, borderRadius:10, marginTop:15}}></Image>
            <Image source={require('../assets/images/tickOnboard_Screen_Banner.png')} style={{position:'absolute', marginLeft:15/2, marginTop:5}}></Image>
            
            <Text style={{fontWeight:'bold', fontSize:20, marginLeft:5, marginTop:10}} >Dunkin' Donuts</Text>
            <Image style={{position:'absolute', bottom:27, left:88}} source={require('../assets/images/resImage.png')} ></Image>
            <Image style={{position:'absolute', bottom:29, left:92}} source={require('../assets/images/Delivery with 13.png')} ></Image>
            <Text style={{color:'green', position:'absolute',bottom:0, left:88, marginLeft:5  }} >OPEN</Text>
            <View style={{flexDirection:'row',right:1, position: 'absolute' }} >
              <Image style={{height:10, width:6, top:18}} source={require('../assets/images/location.png')} ></Image>
              <Text style={{color:'#777777', marginLeft:5, marginRight:15, marginTop:15}} >0.9 Kms</Text>
            </View>
            <View style={{position: 'absolute', bottom:0,right:0}} >
              <Text style={{color:'#777777',fontWeight:400, marginRight:15}} >05:00 AM - 05:00 AM</Text>
            </View>
          </View>
        </View></TouchableOpacity>


        <View style={{borderWidth:1,borderColor:'#DBDBDB', width:screenWidth, alignSelf:'center', marginTop:5}} ></View>


           {/* -------------Second------------ */}







           <TouchableOpacity onPress={handleMenu}>
        <View style={{ height:75, marginTop:5}}>
          <View style={{flexDirection:'row'}} >
            <Image source={require('../assets/images/BaskinRobins.png')} style={{ marginLeft:15, height: 73, width: 73, borderRadius:10, marginTop:5}}></Image>
            <Text style={{fontWeight:'bold', fontSize:20, marginLeft:5}} >Baskin Robins</Text>
            <Text style={{position:'absolute', bottom:29, left:92, color:'#777777', fontSize:13}} >JahezCharity</Text>
            <Text style={{color:'#D13F3F', position:'absolute',bottom:0, left:88, marginLeft:5  }} >CLOSED</Text>
            <View style={{flexDirection:'row',right:1, position: 'absolute' }} >
              <Image style={{height:10, width:6, top:3.5}} source={require('../assets/images/location.png')} ></Image>
              <Text style={{color:'#777777', marginLeft:5, marginRight:15}} >0.9 Kms</Text>
            </View>
            <View style={{position: 'absolute', bottom:0,right:0}} >
              <Text style={{color:'#777777',fontWeight:400, marginRight:15}} >05:00 AM - 05:00 AM</Text>
            </View>
          </View>
        </View>
        </TouchableOpacity>

        <View style={{borderWidth:1,borderColor:'#DBDBDB', width:screenWidth, alignSelf:'center', marginTop:10}} ></View>



           {/* -------------Third------------ */}





           <TouchableOpacity onPress={handleMenu}>
        <View style={{ height:75, marginTop:5}}>
          <View style={{flexDirection:'row'}} >
            <Image source={require('../assets/images/ALBAIK.png')} style={{ marginLeft:15, height: 73, width: 73, borderRadius:10, marginTop:5}}></Image>
            <Text style={{fontWeight:'bold', fontSize:20, marginLeft:5}} >ALBAIK</Text>
            <Text style={{position:'absolute', bottom:29, left:92, color:'#777777', fontSize:13}} >JahezCharity</Text>
            <Text style={{color:'green', position:'absolute',bottom:0, left:88, marginLeft:5  }} >OPEN</Text>
            <View style={{flexDirection:'row',right:1, position: 'absolute' }} >
              <Image style={{height:10, width:6, top:3.5}} source={require('../assets/images/location.png')} ></Image>
              <Text style={{color:'#777777', marginLeft:5, marginRight:15}} >0.9 Kms</Text>
            </View>
            <View style={{position: 'absolute', bottom:0,right:0}} >
              <Text style={{color:'#777777',fontWeight:400, marginRight:15}} >05:00 AM - 05:00 AM</Text>
            </View>
          </View>
        </View>
        </TouchableOpacity>

        <View style={{borderWidth:1,borderColor:'#DBDBDB', width:screenWidth, alignSelf:'center', marginTop:10}} ></View>





          {/* -------------Fourth------------ */}


          <TouchableOpacity onPress={handleMenu}>
          <View style={{ height:90, marginTop:0,}}>
          <View style={{flexDirection:'row'}} >
            <Image source={require('../assets/images/AITazaj.png')} style={{ marginLeft:15, height: 73, width: 73, borderRadius:10, marginTop:15}}></Image>
            <Image source={require('../assets/images/tickOnboard_Screen_Banner.png')} style={{position:'absolute', marginLeft:15/2, marginTop:5}}></Image>
            
            <Text style={{fontWeight:'bold', fontSize:20, marginLeft:5, marginTop:10}} >AITazaj</Text>
            <Image style={{position:'absolute', bottom:27, left:88}} source={require('../assets/images/resImage.png')} ></Image>
            <Image style={{position:'absolute', bottom:29, left:92}} source={require('../assets/images/Delivery with 13.png')} ></Image>
            <Text style={{color:'green', position:'absolute',bottom:0, left:88, marginLeft:5  }} >OPEN</Text>
            <View style={{flexDirection:'row',right:1, position: 'absolute' }} >
              <Image style={{height:10, width:6, top:18}} source={require('../assets/images/location.png')} ></Image>
              <Text style={{color:'#777777', marginLeft:5, marginRight:15, marginTop:15}} >0.9 Kms</Text>
            </View>
            <View style={{position: 'absolute', bottom:0,right:0}} >
              <Text style={{color:'#777777',fontWeight:400, marginRight:15}} >05:00 AM - 05:00 AM</Text>
            </View>
          </View>
        </View>
        </TouchableOpacity>


        <View style={{borderWidth:1,borderColor:'#DBDBDB', width:screenWidth, alignSelf:'center', marginTop:5}} ></View>


           {/* -------------Fifth------------ */}







           <TouchableOpacity onPress={handleMenu}>
           <View style={{ height:90, marginTop:0,}}>
          <View style={{flexDirection:'row'}} >
            <Image source={require('../assets/images/Jahez for AI khair.png')} style={{ marginLeft:15, height: 73, width: 73, borderRadius:10, marginTop:15}}></Image>
            <Image source={require('../assets/images/tickOnboard_Screen_Banner.png')} style={{position:'absolute', marginLeft:15/2, marginTop:5}}></Image>
            
            <Text style={{fontWeight:'bold', fontSize:20, marginLeft:5, marginTop:10}} >Jahez for AI khair</Text>
            <Image style={{position:'absolute', bottom:27, left:88}} source={require('../assets/images/resImage.png')} ></Image>
            <Image style={{position:'absolute', bottom:29, left:92}} source={require('../assets/images/Delivery with 13.png')} ></Image>
            <Text style={{color:'green', position:'absolute',bottom:0, left:88, marginLeft:5  }} >OPEN</Text>
            <View style={{flexDirection:'row',right:1, position: 'absolute' }} >
              <Image style={{height:10, width:6, top:18}} source={require('../assets/images/location.png')} ></Image>
              <Text style={{color:'#777777', marginLeft:5, marginRight:15, marginTop:15}} >0.9 Kms</Text>
            </View>
            <View style={{position: 'absolute', bottom:0,right:0}} >
              <Text style={{color:'#777777',fontWeight:400, marginRight:15}} >05:00 AM - 05:00 AM</Text>
            </View>
          </View>
        </View>
        </TouchableOpacity>

        <View style={{borderWidth:1,borderColor:'#DBDBDB', width:screenWidth, alignSelf:'center', marginTop:5}} ></View>



           {/* -------------Sixth------------ */}





           <TouchableOpacity onPress={handleMenu}>
        <View style={{ height:75, marginTop:5, marginBottom:70}}>
          <View style={{flexDirection:'row'}} >
            <Image source={require('../assets/images/Jahez for AI khair2.png')} style={{ marginLeft:15, height: 73, width: 73, borderRadius:10, marginTop:5}}></Image>
            <Text style={{fontWeight:'bold', fontSize:20, marginLeft:5}} >Jahez for AI khair</Text>
            <Text style={{position:'absolute', bottom:29, left:92, color:'#777777', fontSize:13}} >JahezCharity</Text>
            <Text style={{color:'#D13F3F', position:'absolute',bottom:0, left:88, marginLeft:5  }} >CLOSED</Text>
            <View style={{flexDirection:'row',right:1, position: 'absolute' ,}} >
              <Image style={{height:10, width:6, top:3.5}} source={require('../assets/images/location.png')} ></Image>
              <Text style={{color:'#777777', marginLeft:5, marginRight:15}} >0.9 Kms</Text>
            </View>
            <View style={{position: 'absolute', bottom:0,right:0}} >
              <Text style={{color:'#777777',fontWeight:400, marginRight:15}} >05:00 AM - 05:00 AM</Text>
            </View>
          </View><View style={{borderWidth:1,borderColor:'#DBDBDB', width:screenWidth, alignSelf:'center', marginTop:10}} ></View>
        </View>
        </TouchableOpacity>

        






      </ScrollView>


      <View style={{height:73, width:screenWidth, backgroundColor:'white', flexDirection:'row',alignItems:'center', shadowColor: "rgba(0, 0, 0, 0.35)", shadowOffset: { width: 1, height: 1}, shadowRadius: 8}} >
          <View style={{alignItems:'center', position:'absolute',left:10}} >
          <Link  style={{height:50, width:37}}  href='./Onboard_Screen_Banner'><Image style={{height:37, width:37 }} source={require('../assets/images/page2BattomNavBar1ImageActive.png')} ></Image></Link>
          <Text style={{color:'blue',fontSize:11, fontWeight:400}} >Catch</Text>
          </View>
          <View style={{alignItems:'center', position:'absolute',left:screenWidth/2.25}} >
          <Link style={{ height:50, width:37 }}  href='OrderScreen'><Image style={{ height:37, width:37 }} source={require('../assets/images/page2BattomNavBar2ImageInactive.png')} ></Image></Link>
          <Text style={{fontSize:11, fontWeight:400, color:'#9E9E9E'}} >Orders</Text>
          </View>
          <View style={{alignItems:'center', position:'absolute',right:10}} >
          <Link style={{ height:50, width:37 }} href='Profile'><Image style={{ height:37, width:37 }} source={require('../assets/images/page2BattomNavBar3ImageInactive.png')} ></Image></Link>
          <Text style={{fontSize:11, fontWeight:400, color:'#9E9E9E'}} >Profile</Text>
          </View>
      </View>


            {/* <BottomNav></BottomNav> */}




    </View>
  );
};

export default Onboard_Screen_Banner;
