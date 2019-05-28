import React, {Component} from 'react'
import {StyleSheet, Text, View, WebView, YellowBox, NetInfo,ActivityIndicator, TouchableWithoutFeedback, ImageBackground, ScrollView, Dimensions, StatusBar} from 'react-native'
import { Router, Stack, Scene, Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/Ionicons'
import * as Animatable from 'react-native-animatable'
import Image from 'react-native-scalable-image'

var width = Dimensions.get('window').width
var height = Dimensions.get('window').height

export default class Qussar extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }

  hideSpinner() {
    this.setState({ visible: false });
  }
  render() {
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
              <Text style={styles.hadeethTextAuth}>عن المفضل بن عُمر عن أبي عبد الله الصادق عليه السلام:</Text>
              <Text style={styles.hadeethText}>“مَنْ قرأ إنَّا أنزلناه في ليلة القدر عند قبر مؤمن سبع مرات بعث الله إليه مَلَكًا يعبد الله عند قبره ويُكتب للميت ثواب ما يعمل ذلك الملك فإذا بعثه الله من قبره لم يمر على هول إلا صرفه الله عنه بذلك الملك حتى يدخله الله به الجنة ويقرأ مع القدر سورة الحمد والمعوذتين وقل هو الله أحد والكرسي ثلاث مرات كل سورة والقدر سبع مرات”</Text>
              <Text style={styles.hadeethSource}>(كتاب كامل الزيارات لابن قولويه ص٣٢٢)</Text>
            </View>
            <Image source={require('../images/quran/alhamd.png')} width={Dimensions.get('window').width}  />
            <Image onLoad={() => this.hideSpinner()} source={require('../images/quran/alqadr_alekhlas_alfalaq_alnas.png')} width={Dimensions.get('window').width} style={{ marginBottom: 20 }} />
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
    backgroundColor: '#fff'
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
    color: '#67341b',
    textAlign: 'right'
  },
  hadeethText:{
    textAlign: 'right',
    fontSize: 18,
    fontFamily: 'NotoKufiArabic-Regular',
    marginBottom: 10
  },
  hadeethSource:{
    fontFamily: 'NotoKufiArabic-Regular',
    fontSize: 12,
    alignSelf: 'flex-start',
  }
})
