import React, {Component} from 'react'
import {AppRegistry, StyleSheet, Text, View, WebView, YellowBox} from 'react-native'
YellowBox.ignoreWarnings(['WebView'])
import { Router, Stack, Scene } from 'react-native-router-flux'
import Search from './components/Search'
import Home from './components/Home'
import Map from './components/Map'
import Duaa from './components/Duaa'
import Quran from './components/Quran'
import Yaseen from './components/Yaseen'
import Kursi from './components/Kursi'
import Mulk from './components/Mulk'
import Qussar from './components/Qussar'
import Error from './components/Error'
import OurFingerPrint from './components/OurFingerPrint'

console.disableYellowBox = true
export default class App extends Component {
  render() {
    return (
        <Router>
            <Stack key="root" duration={0}>
            <Scene key="home" component={Home} hideNavBar={true} gesturesEnabled={false} initial/>
            <Scene key="map" component={Map} hideNavBar={true} gesturesEnabled={false}/>
            <Scene key="quran" component={Quran} hideNavBar={true} gesturesEnabled={false} />
            <Scene key="duaa" component={Duaa} hideNavBar={true} gesturesEnabled={false} />
            <Scene key="yaseen" component={Yaseen} hideNavBar={true} gesturesEnabled={false} />
            <Scene key="kursi" component={Kursi} hideNavBar={true} />
            <Scene key="mulk" component={Mulk} hideNavBar={true} gesturesEnabled={false}/>
            <Scene key="qussar" component={Qussar} hideNavBar={true} gesturesEnabled={false} />
            <Scene key="error" component={Error} hideNavBar={true} gesturesEnabled={false}/>
            <Scene key="OurFingerPrint" component={OurFingerPrint} hideNavBar={true} gesturesEnabled={false} />
            <Scene
                key="search"
                component={Search}
                hideNavBar={true}
                gesturesEnabled={false}
            />
            </Stack>
        </Router>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header:{
      backgroundColor: '#F2F2F2',
      padding: 50,
      paddingBottom: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#DDDDDD'
  }
})

AppRegistry.registerComponent('cemeteries', () => App)
