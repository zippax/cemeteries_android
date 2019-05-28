import React, {Component} from 'react'
import {StyleSheet, Text, View, WebView, YellowBox, Dimensions, NetInfo, TouchableWithoutFeedback, ActivityIndicator} from 'react-native'
YellowBox.ignoreWarnings(['WebView'])
YellowBox.ignoreWarnings(['NetInfo'])
import { Router, Stack, Scene, Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/Ionicons'

var width = Dimensions.get('window').width
var height = Dimensions.get('window').height

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = { visible: true }
  }

  hideSpinner() {
    this.setState({ visible: false })
  }
  render() {
    NetInfo.isConnected.fetch().then(isConnected => {
      if(isConnected)
      {
        console.log('Good Connection');
      }else{
       console.log('No Connection');
      }
    })
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableWithoutFeedback onPress={()=> Actions.home()}>
            <Icon name="md-home" size={30} color="#212121" />
          </TouchableWithoutFeedback>
        </View>
        <WebView
            onLoad={() => this.hideSpinner()}
            source={{uri: 'http://www.jabbanah.com/saihat/mobile'}}
            style={{marginTop: 0}}
            onError={()=> Actions.error()}
          />
          {
          this.state.visible && (
          <ActivityIndicator
            style={{ position: "absolute", top: height / 2, left: width / 2 - 15}}
            size="large"
          />
          )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
      backgroundColor: '#fff',
      paddingLeft: 20,
      paddingTop: 35,
      paddingBottom: 5,
  }
})
