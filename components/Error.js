import React, { Component } from 'react'
import { View, Text, ScrollView, ImageBackground, TouchableWithoutFeedback, Dimensions, StyleSheet, Math } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { Router, Stack, Scene, Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/Ionicons'
import FastImage from 'react-native-fast-image'

export default class Map extends Component {
  render(){
    return(
      <Animatable.View  duration={500} style={styles.container}>
      <ImageBackground source={require('../images/lightBg.png')} style={{ width: '100%', height: '100%', position: 'absolute'}}/>
          <View style={styles.messageContainer}>
            <FastImage
                    style={{ width: '50%', height: 120, alignSelf: 'center', marginTop: 180 }}
                    source={require('../images/disconnect.png')}
                    resizeMode={FastImage.resizeMode.contain}
                />
                <Text style={{ textAlign: 'center', fontFamily: 'NotoKufiArabic-Regular', color: '#5D493C' }}>الرجاء الاتصال بالانترنت لتتمكن من البحث</Text>
                <TouchableWithoutFeedback onPress={()=>Actions.home()}>
                    <View style={styles.btnHolder}>
                        <Text style={styles.btnText}>العودة للرئيسية</Text>
                    </View>
                </TouchableWithoutFeedback>
          </View>
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
  },
  btnHolder:{
      alignSelf: 'center',
      backgroundColor: '#5D493C',
      padding: 15,
      paddingVertical: 8,
      borderRadius: 50,
      marginTop: 20
  },
  btnText:{
    fontFamily: 'NotoKufiArabic-Regular',
    color: '#fff'
  }
})
