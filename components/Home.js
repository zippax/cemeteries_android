import React, {Component} from 'react'
import {StyleSheet, Text, View, WebView, ScrollView,Linking, YellowBox, TouchableWithoutFeedback, Dimensions, Image, ImageBackground, Share} from 'react-native'
import { Router, Stack, Scene, Actions } from 'react-native-router-flux'
import * as Animatable from 'react-native-animatable'
import Icon from 'react-native-vector-icons/Ionicons'

import FastImage from 'react-native-fast-image'


export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
      <ImageBackground source={require('../images/lightBg.png')} style={{ width: '100%', height: '100%', position: 'absolute'}}/>
        <Animatable.View style={styles.header} animation="slideInDown">
        <View style={styles.headerIconLeft}>
        <TouchableWithoutFeedback onPress={()=>Actions.OurFingerPrint()}>
          <Icon name="md-finger-print" size={30} color="#212121" />
        </TouchableWithoutFeedback>
        </View>
        <View style={styles.headerLogo}>
          <FastImage
              style={styles.logo}
              source={require('../images/logo_2.png')}
          />
        </View>
        
          <View style={styles.headerIconRight}>
          <TouchableWithoutFeedback onPress={this.shareIt}>
            <Icon name="md-share" size={25} color="#212121" />
          </TouchableWithoutFeedback>
          </View>
        

        </Animatable.View>

        <ScrollView>
            <Animatable.View animation="slideInUp">
              <TouchableWithoutFeedback onPress={()=> Actions.search()}>
                  <Animatable.View animation="pulse" iterationCount="infinite" duration={1400} style={styles.searchContainer}>
                      <Icon name="ios-search" size={30} color="#212121" />
                      <Text style={styles.searchText}>البحث عن متوفى</Text>
                  </Animatable.View>
              </TouchableWithoutFeedback>

              <View style={styles.boxesContainer}>
                <TouchableWithoutFeedback onPress={()=> Actions.map()}>
                    <View style={styles.box}>
                        <FastImage
                            style={styles.backgroundImage}
                            source={require('../images/map.jpg')}
                        />
                        <View style={styles.btnTextHolder}>
                            <View style={styles.btnHolder}>
                            <Text style={styles.btnText}>خارطة المقبرة</Text>
                            </View>
                        </View>
                    </View>
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback onPress={()=> Actions.quran()}>
                    <View style={styles.box}>
                    <FastImage
                        style={styles.backgroundImage}
                        source={require('../images/quran.jpg')}
                    />
                    <View style={styles.btnTextHolder}>
                        <View style={styles.btnHolder}>
                        <Text style={styles.btnText}>سور مستحبة</Text>
                        </View>
                    </View>
                    </View>
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback onPress={()=> Actions.duaa()}>
                    <View style={styles.box}>
                    <FastImage
                        style={styles.backgroundImage}
                        source={require('../images/duaa.jpg')}
                    />
                    <View style={styles.btnTextHolder}>
                        <View style={styles.btnHolder}>
                        <Text style={styles.btnText}>أدعية و زيارات</Text>
                        </View>
                    </View>
                    </View>
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback onPress={()=> Linking.openURL('mailto:saihat@jabbanah.com')} >
                    <View style={styles.box}>
                    <FastImage
                        style={styles.backgroundImage}
                        source={require('../images/contact.jpg')}
                    />
                      <View style={styles.btnTextHolder}>
                          <View style={styles.btnHolder}>
                            <Text style={styles.btnText}>تواصل معنا</Text>
                          </View>
                      </View>
                    </View>
                  </TouchableWithoutFeedback>
              </View>
            </Animatable.View>
        </ScrollView>
      </View>
    )
  }
  shareIt() {
    Share.share({
      message: 'حمل تطبيق جَبّانة سيهات من خلال الرابط',
      url: 'http://www.jabbanah.com/app',
      title: 'الجَبّانة'
    }, {
      // Android only:
      dialogTitle: 'الجَبّانة',
      // iOS only:
      excludedActivityTypes: [
        'com.apple.UIKit.activity.PostToTwitter'
      ]
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header:{
      flexDirection: 'row',
      padding: 20,
      paddingTop: 40,
      paddingBottom: 20,
      alignItems: 'center',
  },
  headerIconLeft:{
    flex: 1
  },
  headerIconRight:{
    flex: 1,
    alignItems: 'flex-end'
  },
  logo:{
    width: 100,
    height: 57
  },
  searchContainer:{
    padding: 30,
    backgroundColor: '#DED8D5',
    alignItems: 'center',
    margin: 20,
    borderRadius: 5
  },
  searchText:{
    fontFamily: 'NotoKufiArabic-Regular'
  },
  scrollViewContainer:{
    padding: 30,
    paddingTop: 60
  },
  boxesContainer:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 15
  },
  box:{
    flexBasis: Dimensions.get('window').width / 1 - 40,
    height: 130,
    margin: 5,
    backgroundColor: '#eee',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderColor: '#ccc',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 2
  },
  backgroundImage:{
    flex: 1,
    width: '100%',
    height: 'auto',
    resizeMode: 'cover',
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
    opacity: 0.8
  },
  btnTextHolder:{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 15,
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
