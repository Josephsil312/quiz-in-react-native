import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Result = ({navigation}) => {
  return (
    <View>
      <Text>Result</Text>
      <Image
          style={styles.Resultlogo}
          source = {require('C:/Users/joseph.stallone/Documents/rnp/assets/question.png')}
          resizeMode = "contain"
        />
        <TouchableOpacity onPress = {() => navigation.navigate("Home")}><Text>Home</Text></TouchableOpacity>
    </View>
  )
}

export default Result

const styles = StyleSheet.create({
  Resultlogo:{
    height:300,
    width:300
  }
})