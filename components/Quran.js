import React, {Component} from 'react'
import {StyleSheet, Text, View, WebView, YellowBox, NetInfo, TouchableWithoutFeedback, ImageBackground, ScrollView, Dimensions, StatusBar, Image} from 'react-native'
import { Router, Stack, Scene, Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/Ionicons'
import * as Animatable from 'react-native-animatable'

export default class Quran extends Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
          <View style={styles.leftIcon}>
              <TouchableWithoutFeedback onPress={()=> Actions.home()}>
              <Icon name="md-arrow-round-back" size={30} color="#212121"/>
            </TouchableWithoutFeedback>
            </View>
            <View style={styles.headerTitle}>
              <Text style={styles.titleText}>سور مستحبة</Text>
            </View>
          </View>
          {
            <ImageBackground source={require('../images/lightBg.png')} style={{ width: '100%', height: '100%', position: 'absolute'}}/>
          }
          <ScrollView style={{ flex: 1, width: Dimensions.get('window').width, height: Dimensions.get('window').height }}>
          <Animatable.View style={styles.boxesContainer} animation="slideInUp">
          <TouchableWithoutFeedback onPress={()=> Actions.kursi()}>
            <View style={[styles.box,{backgroundColor: '#222831'}]}>
              <View style={styles.btnTextHolder}>
              <Image source={require('../images/QuranIcon.png')} style={{ width: '70%', height: '70%', position: 'absolute', alignSelf: 'center', top: 30, opacity: 0.2}}/>
                <View style={styles.btnHolder}>
                  <Text style={styles.btnText}>آية الكرسي</Text>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={()=> Actions.qussar()}>
            <View style={[styles.box,{backgroundColor: '#393e46'}]}>
              <View style={styles.btnTextHolder}>
              <Image source={require('../images/QuranIcon.png')} style={{ width: '70%', height: '70%', position: 'absolute', alignSelf: 'center', top: 30, opacity: 0.2}}/>
                <View style={styles.btnHolder}>
                  <Text style={styles.btnText}>قصار السور</Text>
                </View>
              </View>
            </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={()=> Actions.yaseen()}>
              <View style={[styles.box,{backgroundColor: '#00adb5'}]}>
                <View style={styles.btnTextHolder}>
                <Image source={require('../images/QuranIcon.png')} style={{ width: '70%', height: '70%', position: 'absolute', alignSelf: 'center', top: 30, opacity: 0.2}}/>
                  <View style={styles.btnHolder}>
                    <Text style={styles.btnText}>سورة يس</Text>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={()=> Actions.mulk()}>
              <View style={[styles.box,{backgroundColor: '#D4CCC9'}]}>
                <View style={styles.btnTextHolder}>
                <Image source={require('../images/QuranIcon.png')} style={{ width: '70%', height: '70%', position: 'absolute', alignSelf: 'center', top: 30, opacity: 0.2}}/>
                  <View style={styles.btnHolder}>
                    <Text style={styles.btnText}>سورة الملك</Text>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Animatable.View>
          </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  statusBar:{
      backgroundColor: '#fff',
      width: '100%',
      height: 40
  },
  header:{
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 45,
      paddingBottom: 5,
      zIndex: 1,
      flexDirection: 'row'
  },
  leftIcon:{
    flex: 1
  },
  headerTitle:{
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  titleText:{
    fontFamily: 'NotoKufiArabic-Regular',
    fontSize: 18
  },
  headerRight:{
    flex: 1
  },
  boxesContainer:{
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 15,
    },
    box:{
      flexBasis: Dimensions.get('window').width / 2 - 25,
      height: Dimensions.get('window').width / 2,
      margin: 5,
      backgroundColor: '#eee',
      justifyContent: 'flex-end',
      alignItems: 'center',
      borderColor: '#ccc',
    },
    backgroundImage:{
      flex: 1,
      width: '100%',
      height: 'auto'
    },
    btnHolder:{
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      backgroundColor: '#fff',
      borderRadius: 50,
      paddingBottom: 3,
      paddingTop: 1,

    },
    btnTextHolder:{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 20,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    btnText:{
      padding: 5,
      paddingLeft: 10,
      paddingRight: 10,
      fontFamily: 'NotoKufiArabic-Regular'
  }
})
