import { View, Text,StyleSheet} from 'react-native'
import React from 'react'

export default function Homepage() {
  return (
    <View style={{
      height:'100%', 
      width:'100%',}}>
      <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:'10%'}}>
        <View>
            <Text>Logo</Text>
        </View>
        <View>
            <Text>Save your journey....</Text>
        </View>
      </View>
      <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:'5%'}}>
        <View>
            <Text>OnWay</Text>
        </View>
        <View>
            <Text>UpComming</Text>
        </View>
        <View>
            <Text>Others</Text>
        </View>
      </View>

      <View style={{
        height:'15%',
        width:'90%',
        backgroundColor:'floralwhite',
        marginLeft:'5%',
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
	          width: 0,
	          height: 5,
          },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,}}>
        <Text style={{
          marginLeft:'35%'
        }}>Date:03.02.2023</Text>
        <View style={{
         flexDirection:'row',
         justifyContent:'space-between',
         padding:5
        }}>
          <View>
              <Text>BusName:</Text>
              <Text>From: DIU Smart city</Text>
              <Text>Price:330 TK</Text>
          </View>
          <View>
              <Text>02.30 pm</Text>
              <Text>To:Dhanmondi</Text>
              <View style={{
                height:'35%',
                width:'90%',
                marginTop:'5%',
                backgroundColor:'floralwhite',
                marginLeft:'5%',
                borderRadius:10,
                shadowColor: "#000",
                shadowOffset: {
	                width: 0,
	                height: 5,
                },
                shadowOpacity: 0.36,
                shadowRadius: 6.68,
                elevation: 11,
              }}>
                <Text>See Location</Text>
              </View>
          </View>
        </View>
      </View>
    </View>
  )
}