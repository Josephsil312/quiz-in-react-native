import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Home = ({navigation}) => {
  return (
    <>
    <View>

    
      <View style = {styles.logoContainer}>
        <Image
          style={styles.logo}
          source = {require('C:/Users/joseph.stallone/Documents/rnp/assets/logo.png')}
        resizeMode = "contain"
        />
      </View>
      <TouchableOpacity onPress = {() => navigation.navigate('Quiz')}>
        <Text>Start</Text>
      </TouchableOpacity>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  logo: {
    height:300,
    width:300,
    
  },
  logoContainer:{
    justifyContent:'center',
    alignItems:'center'
  }
});
