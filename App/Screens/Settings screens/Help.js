import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ListView,
    ImageBackground,Image,TouchableHighlight,Linking
} from 'react-native';
const firebase = require("firebase");

import {Icon} from 'react-native-elements';
var navigator;
// let time= new Time().toLocaleString();
import {Actions} from 'react-native-router-flux';


export default class Help extends Component {
    render()
    {
        return(
            <ImageBackground
				style={[ styles.container, styles.backgroundImage ]}
				source={require('/home/automateio/Message/App/images/white.jpg')}>
                    <TouchableOpacity onPress={ ()=> Linking.openURL('https://faq.whatsapp.com/faq/web?lg=en') } >
            <View style={{ alignItems:'center', padding:10, flexDirection:'row', justifyContent:'space-between', width:'100%',height: 50,
             borderBottomWidth:1, borderColor:'#C0C0C0' }}>
              <Text style={styles.Name}>FAQ</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity >
              <View style={{ alignItems:'center', padding:10, flexDirection:'row', borderBottomWidth:1, borderColor:'white',height:70}}>
             
             <View>
                <View style={{ flexDirection:'row', justifyContent:'space-between', width:'100%' }}>
                <Text style={styles.profileName}>Contact us</Text>
                
            </View>
            
            <View style={{ flexDirection:'row', alignItems:'center' }}>
              <Text style={{ fontWeight:'400', color:'#A9A9A9', fontSize:12, marginLeft:15 ,width:'100%'}}>Questions? Need Help?</Text>
            </View>
            </View>
             </View>
             </TouchableOpacity>
             <TouchableOpacity  onPress={ ()=> Linking.openURL('https://www.whatsapp.com/legal/?lg=en') }>
            <View style={{ alignItems:'center', padding:10, flexDirection:'row', justifyContent:'space-between', width:'100%',height: 50,
             borderBottomWidth:1, borderColor:'#C0C0C0' }}>
              <Text style={styles.Name}>Terms and Privacy Policy</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={ ()=> Linking.openURL('https://en.wikipedia.org/wiki/WhatsApp') }>
            <View style={{ alignItems:'center', padding:10, flexDirection:'row', justifyContent:'space-between', width:'100%',height: 50,
             borderBottomWidth:1, borderColor:'#C0C0C0' }}>
              <Text style={styles.Name}>App info</Text>
              </View>
              </TouchableOpacity>
             



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
                    profileName: {
                        marginLeft: 13,
                        fontSize: 16,
                        fontWeight:'normal',
                        width:'100%',
                        color:'black'
                    },
                    })