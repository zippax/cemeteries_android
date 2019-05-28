import React, {Component} from 'react'
import {StyleSheet, Text, View, WebView, YellowBox, NetInfo, ActivityIndicator, TouchableWithoutFeedback, ImageBackground, ScrollView, Dimensions, StatusBar} from 'react-native'
import { Router, Stack, Scene, Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/Ionicons'
import * as Animatable from 'react-native-animatable'
import Image from 'react-native-scalable-image'
import FastImage from 'react-native-fast-image'
import resolveAssetSource from 'resolveAssetSource'

var width = Dimensions.get('window').width
var height = Dimensions.get('window').height


export default class Mulk extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: true, calcImgHeight: 0 };
  }

  hideSpinner() {
    this.setState({ visible: false });
  }
  render() {
    let image =  require('../images/quran/yassen.png')
    let source = resolveAssetSource(image)
    const { calcImgHeight } = this.state
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <TouchableWithoutFeedback onPress={()=> Actions.quran()}>
              <Icon name="md-arrow-round-back" size={30} color="#212121"/>
            </TouchableWithoutFeedback>
          </View>
          {
            <ImageBackground source={require('../images/lightBg.png')} style={{ width: '100%', height: '100%', position: 'absolute'}}/>
          }
          <ScrollView style={{ flex: 1, width: Dimensions.get('window').width, height: Dimensions.get('window').height }}>
          <Animatable.View animation="slideInUp">
            <View style={styles.hadeethBox}>
              <Text style={styles.hadeethTextAuth}>روي عن ابن عباس عن النبي صلى الله عليه وآله:</Text>
              <Text style={styles.hadeethText}>"هي والله المنجية تنجي من عذاب القبر"</Text>
            </View>
            {
              // <Image onLoad={() => this.hideSpinner()} source={require('../images/quran/almulk.png')} width={Dimensions.get('window').width}  />
              <FastImage
              // style={{ width: 330  , height: 1600, alignSelf: 'center'}}
              style={{ width: width, height: calcImgHeight , marginBottom: 20}}
              source={require('../images/quran/almulk.png')}
              resizeMode={FastImage.resizeMode.contain}
              onLoad={evt =>
                this.setState({
                  calcImgHeight:
                    evt.nativeEvent.height / evt.nativeEvent.width * width, // By this, you keep the image ratio
                },
                this.hideSpinner()
                )}
            />
            }
            
          </Animatable.View>
          </ScrollView>
          {
          this.state.visible && (
          <ActivityIndicator
            style={{ position: "absolute", top: height / 2, left: width / 2 - 15}}
            size="large"
            color="#D9D2CF"
          />
          )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBar:{
      backgroundColor: '#fff',
      width: '100%',
      height: 40
  },
  header:{
      paddingLeft: 20,
      paddingTop: 35,
      paddingBottom: 5,
      zIndex: 1
  },
  hadeethBox:{
    backgroundColor: '#D9D2CF',
    margin: 10,
    padding: 15,
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  hadeethTextAuth:{
    fontSize: 15,
    marginBottom: 10,
    fontFamily: 'NotoKufiArabic-Regular',
    color: '#67341b'
  },
  hadeethText:{
    textAlign: 'right',
    fontSize: 18,
    fontFamily: 'NotoKufiArabic-Regular'
  }
})
