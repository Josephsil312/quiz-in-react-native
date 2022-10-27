import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Quiz = ({navigation}) => {
  
  
  return (
    <SafeAreaView style = {{flexDirection:'column',flex:3,paddingHorizontal:10,paddingVertical:10}}>
    
      <Text>Imagine this is a real cool question</Text>
      <View>
        <TouchableOpacity><Text>Cool Option 1</Text></TouchableOpacity>
        <TouchableOpacity><Text>Cool Option 2</Text></TouchableOpacity>
        <TouchableOpacity><Text>Cool Option 3</Text></TouchableOpacity>
        <TouchableOpacity><Text>Cool Option 4</Text></TouchableOpacity>
      </View>
      <View style = {styles.bottomNav}>
        <TouchableOpacity><Text>Skip</Text></TouchableOpacity>
        <TouchableOpacity><Text>Next</Text></TouchableOpacity>
        <TouchableOpacity onPress = {() => navigation.navigate("Result")}><Text>End</Text></TouchableOpacity>
      </View>
    
    </SafeAreaView>
  )
}

export default Quiz;

const styles = StyleSheet.create({
  bottomNav:{
    flex:2,
    justifyContent:'space-between',
    flexDirection:'row',
    top:"170%"
  }
})