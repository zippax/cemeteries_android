import React, { Component } from 'react'
import { View, Text, ScrollView, ImageBackground, TouchableWithoutFeedback, Dimensions, StyleSheet, Math } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { Router, Stack, Scene, Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/Ionicons'
import FastImage from 'react-native-fast-image'

export default class OurFingerPrint extends Component {
  render(){
    return(
      <Animatable.View animation="slideInUp" duration={500} style={styles.container}>
        <ImageBackground source={require('../images/lightBg.png')} style={{ width: '100%', height: '100%', position: 'absolute'}} />
        <TouchableWithoutFeedback onPress={()=> Actions.home()}>
            <View style={ styles.close }>
              <Text style={styles.closeText}>عودة</Text>
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.messageBox}>
              <Icon name="md-quote" size={30} color="#5D493C" style={styles.quoteTop}/>
              <Text style={styles.messageText}>
              إيمانًا منّا بأن خدمة المجتمع هي من أسمى الأولويات، قمنا بتطوير هذا البرنامج الذي يهدف لتسهيل عملية زيارة المؤمنين لمقبرة سيهات، وتقديمه كهدية متواضعة منا للمجتمع. 
              </Text>
              <Icon name="md-quote" size={30} color="#5D493C" style={styles.quoteBottom}  />
          </View>
          <View style={styles.maedaHolder}>
            <FastImage
                    style={{ width: 77, height: 48, marginBottom: 10 }}
                    source={require('../images/maeda.png')}
                    resizeMode={FastImage.resizeMode.contain}
                />
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
    top: 60,
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
  messageBox:{
    backgroundColor: '#D4CCC9',
    marginTop: 100,
    marginHorizontal: 30,
    padding: 20,
    borderRadius: 10
  },
  messageText:{
    textAlign: 'right',
    fontFamily: 'NotoKufiArabic-Regular',
    textAlign: 'justify',
    marginBottom: 10
  },
  quoteTop:{
      position: 'absolute',
      right: 10,
      top: -15
  },
  quoteBottom:{
    position: 'absolute',
    left: 10,
    bottom: -15,
    transform: [
        {scaleX: -1}
      ],
},
maedaHolder:{
    marginTop: 25,
    alignItems: 'flex-start',
    marginHorizontal: 30
},  
maeda:{
    textAlign: 'right',
    fontFamily: 'NotoKufiArabic-Regular',
    fontSize: 12
}
})
