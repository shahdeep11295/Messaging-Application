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


export default class ChangeEmail extends Component {
    render()
    {
        return(
            <ImageBackground
				style={[ styles.container, styles.backgroundImage ]}
 				source={require('/home/automateio/Message/App/images/white.jpg')}>
                     <Image source={require('./././../../images/change.png')} style={{ width: "100%", height: 200}} />
                     <Text style={styles.text}>
                         Changing your Email will update your login Id,info,settings etc..
                     </Text>
                     <Text style={styles.text}>
                         Before proceeding,please confirm that you are able to access
                          your Email id at your new Email address
                     </Text>
                     








                </ImageBackground>)}}
 
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
    text:{
        padding:25,
        fontSize:18,
        fontWeight:'normal',
        paddingLeft:10,
        paddingRight:10

    }
    })