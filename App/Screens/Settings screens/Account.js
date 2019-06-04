import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ListView,
    ImageBackground,Image,TouchableHighlight
} from 'react-native';
const firebase = require("firebase");

import {Icon} from 'react-native-elements';
var navigator;
// let time= new Time().toLocaleString();
import {Actions} from 'react-native-router-flux';


export default class Account extends Component {
    render()
    {
        return(
            <ImageBackground
				style={[ styles.container, styles.backgroundImage ]}
				source={require('/home/automateio/Message/App/images/white.jpg')}>
                 <TouchableOpacity onPress={()=> {
    Actions.privacy()}} >
            <View style={{ alignItems:'center', padding:10, flexDirection:'row', justifyContent:'space-between', width:'100%',height: 50,
             borderBottomWidth:1, borderColor:'#C0C0C0' }}>
              <Text style={styles.Name}>privacy</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> {
    Actions.security()
    }} >
            <View style={{ alignItems:'center', padding:10, flexDirection:'row', justifyContent:'space-between', width:'100%',height: 50,
             borderBottomWidth:1, borderColor:'#C0C0C0' }}>
              <Text style={styles.Name}>Security</Text>
              </View>
              </TouchableOpacity>
             
              <TouchableOpacity  onPress={()=> {
    Actions.verification()}}>
            <View style={{ alignItems:'center', padding:10, flexDirection:'row', justifyContent:'space-between', width:'100%',height: 50,
             borderBottomWidth:1, borderColor:'#C0C0C0' }}>
              <Text style={styles.Name}>Two-step-Verification</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity  onPress={()=> {
    Actions.changeemail()}}>
            <View style={{ alignItems:'center', padding:10, flexDirection:'row', justifyContent:'space-between', width:'100%',height: 50,
             borderBottomWidth:1, borderColor:'#C0C0C0' }}>
              <Text style={styles.Name}>ChangeEmail</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity >
            <View style={{ alignItems:'center', padding:10, flexDirection:'row', justifyContent:'space-between', width:'100%',height: 50,
             borderBottomWidth:1, borderColor:'#C0C0C0' }}>
              <Text style={styles.Name}>Request account info</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity >
            <View style={{ alignItems:'center', padding:10, flexDirection:'row', justifyContent:'space-between', width:'100%',height: 50,
             borderBottomWidth:1, borderColor:'#C0C0C0' }}>
              <Text style={styles.Name}>Delete my account</Text>
              </View>
              </TouchableOpacity>
        </ImageBackground>
        
        )
    }
}
const styles = StyleSheet.create({
    Name:{
        marginLeft: 5,
        fontSize: 17,
        fontWeight:'normal',
        width:'100%',
        paddingLeft:5
      },
      container: {
        flex: 1,
        alignItems: 'stretch',
        marginRight: 0,
        marginLeft: 0
    },
    })