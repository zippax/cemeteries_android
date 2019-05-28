import React, {Component} from 'react'
import {StyleSheet, Text, View, WebView, YellowBox, NetInfo, TouchableWithoutFeedback, ImageBackground, Image, ScrollView, Dimensions, StatusBar} from 'react-native'
import { Router, Stack, Scene, Actions, Reducer } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/Ionicons'
import * as Animatable from 'react-native-animatable'

export default class Duaa extends Component {
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
              <Text style={styles.titleText}>الأدعية و الزيارات</Text>
            </View>
          </View>
          <ImageBackground source={require('../images/lightBg.png')} style={{ width: '100%', height: '100%', position: 'absolute'}}/>
          <ScrollView style={{ flex: 1, width: Dimensions.get('window').width, height: Dimensions.get('window').height }}>
            <Animatable.View animation="slideInUp">
              <View style={styles.hadeethBox}>
                <Text style={styles.hadeethTextAuth}>عن عليّ (عليه السلام) قال: من دخل المقابر فقال:</Text>
                <Text style={styles.hadeethText}>" بِسْمِ اللهِ الرَّحْمنِ الرَّحيمِ، اَلسَّلامُ عَلى اَهْلِ لا اِلـهَ اِلاَّ اللهُ، مِنْ اَهْلِ لا اِلـهَ اِلاَّ اللهُ، يا اَهْلَ لا اِلـهَ اِلاَّ اللهُ، بِحَقِّ لا اِلـهَ اِلاَّ اللهُ، كَيْفَ وَجَدْتُمْ قَوْلَ لا اِلـهَ اِلاَّ اللهُ، مِنْ لا اِلـهَ اِلاَّ اللهُ، يا لا اِلـهَ اِلاَّ اللهُ، بِحَقِّ لا اِلـهَ اِلاَّ اللهُ، اغْفِرْ لِمَنْ قالَ لا اِلـهَ اِلاَّ اللهُ، وَاحْشُرْنا فى زُمْرَةِ مَنْ قالَ لا اِلـهَ اِلاَّ اللهُ، مُحَمَّدٌ رَسُولُ اللهِ عَلِىٌّ وَلِىُّ اللهِ،</Text>
                <Text style={[styles.hadeethTextAuth, {textAlign: 'right'}]}>أعطاه الله سبحانه وتعالى ثواب خمسين سنة وكفّر عنه وعن أبويه سيّئات خمسين سنة."</Text>
              </View>
              <View style={styles.hadeethBox}>
                <Text style={styles.hadeethTextAuth}>وفي رواية اخرى انّ أحسن ما يقال في المقابر اذا مررت عليه أن تقف وتقول:</Text>
                <Text style={styles.hadeethText}>"اَللّـهُمَّ وَلِّهِمْ ما تَوَلَّوْا وَاحْشُرْهُمْ مَعَ مَنْ اَحَبُّوا."</Text>
              </View>
              <View style={styles.hadeethBox}>
                <Text style={styles.hadeethTextAuth}>وقال السّيد ابن طاووس في مصباح الزّائر: اذا أردت زيارة المؤمنين فينبغي أن يكون يوم الخميس والاّ ففي أيّ وقت شئت وصفتها أن تستقبل القبلة وتضع يدك على القبر وتقول:</Text>
                <Text style={styles.hadeethText}>"اَللّـهُمَّ ارْحَمْ غُرْبَتَهُ وَصِلْ وَحْدَتَهُ وَآنِسْ وَحْشَتَهُ وَآمِنْ رَوْعَتَهُ، وَاَسْكِنْ اِلَيْهِ مِنْ رَحْمَتِكَ رَحْمَةً يَسْتَغْنى بِها عَنْ رَحْمَةِ مَنْ سِواكَ، وَاَلْحِقْهُ بِمَنْ كانَ يَتَوَلاّهُ"</Text>
                <Text style={[styles.hadeethTextAuth, {textAlign: 'right'}]}>ثمّ اقرأ (اِنّا اَنْزَلْناهُ فى لَيْلَةِ الْقَدْرِ) سبع مرّات.</Text>
              </View>
              <View style={styles.hadeethBox}>
                <Text style={styles.hadeethTextAuth}>وروي أيضاً في صفة زيارتهم رواية أخرى عن محمّد بن مسلم قال: قلت للصّادق صلوات الله وسلامه عليه نزور الموتى قال: نعم ، قلت: فيعلمون بنا اذا أتيناهم ، قال: اي والله ليعلمون بكم ويفرحون بكم وليستأنسون اليكم ، قال: قلت: فأيّ شيء نقول اذا أتيناهم ؟ قال: قُل:</Text>
                <Text style={styles.hadeethText}>"اَللّـهُمَّ جافِ الاَْرْضَ عَنْ جُنُوبِهِمْ، وَصاعِدْ اِلَيْكَ اَرْواحَهُمْ، وَلَقِّهِمْ مِنْكَ رِضْواناً، وَاَسْكِنْ اِلَيْهِمْ مِنْ رَحْمَتِكَ ما تَصِلُ بِهِ وَحْدَتَهُمْ وَتُونِسُ بِهِ وَحْشَتَهُمْ، اِنَّكَ عَلى كُلِّ شَىْء قَديرٌ"</Text>
              </View>
              <View style={styles.hadeethBox}>
                <Text style={styles.hadeethTextAuth}>وروي في كامل الزّيارة عن الصّادق (عليه السلام) قال:</Text>
                <Text style={styles.hadeethText}>"اذا زُرتم موتاكم قبل طلوع الشمس سمعوا وأجابوكم واذا زُرتموهم بعد طلوع الشمس سمعوا ولم يجيبوكم."</Text>
              </View>
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
  header:{
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 45,
    paddingBottom: 10,
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
  block:{
    padding: 30,
    paddingTop: 20,
    alignItems: 'flex-end',
  },
  title:{
    marginBottom: 10
  },
  paragraph:{
    textAlign: 'justify',
    fontSize: 22,
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
    fontSize: 18,
    marginBottom: 10,
    fontFamily: 'NotoKufiArabic-Regular',
    color: '#67341b',
    textAlign: 'right',
    alignSelf: 'flex-end'
  },
  hadeethText:{
    textAlign: 'right',
    fontSize: 18,
    fontFamily: 'NotoKufiArabic-Regular',
    marginBottom: 10
  },
  hadeethSource:{
    fontFamily: 'NotoKufiArabic-Regular',
    fontSize: 18,
    alignSelf: 'flex-start',
  }
})
