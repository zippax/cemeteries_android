import React, { Component } from 'react'
import { View, Text, ScrollView, ImageBackground, TouchableWithoutFeedback, Dimensions, StyleSheet, Math } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { Router, Stack, Scene, Actions } from 'react-native-router-flux'


export default class Map extends Component {
  render(){
    return(
      <Animatable.View animation="slideInUp" duration={500} style={styles.container}>
      <ImageBackground source={require('../images/lightBg.png')} style={{ width: '100%', height: '100%', position: 'absolute'}}/>
        <ImageBackground source={require('../images/easyMap_2.png')} resizeMode={'contain'} style={styles.backgroundImage}>
          <TouchableWithoutFeedback onPress={()=> Actions.home()}>
            <View style={ styles.close }>
              <Text style={styles.closeText}>اغلاق</Text>
            </View>
          </TouchableWithoutFeedback>
        </ImageBackground>
      </Animatable.View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: null,
    height: null,
    backgroundColor: '#fff'
  },
  backgroundImage:{
    width: '99%',
    height: '100%',
    margin: 10
  },
  close:{
    top: 40,
    left: 20,
    width: 60,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 50
  },
  closeText:{
    fontFamily: 'NotoKufiArabic-Regular'
  }
})
