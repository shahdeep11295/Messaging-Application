import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ListView,
    ImageBackground,Image,TouchableHighlight,Linking,CheckBox,Button
} from 'react-native';
const firebase = require("firebase");
import DialogManager,{ScaleAnimation,DialogContent} from 'react-native-dialog-component'
import {Icon} from 'react-native-elements';
var navigator;
// let time= new Time().toLocaleString();
import {Actions} from 'react-native-router-flux';


export default class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked:true,
            check:true
           
        }
    }
    
    render()
    {
       
        return(
            <ImageBackground
				style={[ styles.container, styles.backgroundImage ]}
				source={require('/home/automateio/Message/App/images/white.jpg')}>
                    <View style={{ alignItems:'center', padding:10, flexDirection:'row', borderBottomWidth:1, borderColor:'white',height:60,paddingTop:10}}>
             
             <View>
                <View style={{ flexDirection:'row', justifyContent:'space-between', width:'100%' }}>
                <Text style={styles.profileName}>Conversation tones</Text>
                
            </View>
            
            <View style={{ flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
              <Text style={{ fontWeight:'400', color:'#A9A9A9', fontSize:12, marginLeft:15 ,width:'70%'}}>Play sounds for incoming and outgoing messages</Text>
              <CheckBox
              
      value={this.state.checked}
      onChange={() => this.setState({ checked: !this.state.checked })}
    />
            </View>
            </View>
             </View>
             <View style={{ alignItems:'center', padding:10, flexDirection:'row', justifyContent:'space-between', width:'100%',height: 40,
             borderBottomWidth:1, borderColor:'white', }}>
              <Text style={styles.Nam}>Message settings</Text>
              </View>
              <View style={{ alignItems:'center', padding:10, flexDirection:'row', borderBottomWidth:1, borderColor:'#C0C0C0',height:70}}>
             
             <View>
                <View style={{ flexDirection:'row', justifyContent:'space-between', width:'100%' }}>
                <Text style={styles.profileName}>Notification tone</Text>
                
            </View>
            
            <View style={{ flexDirection:'row', alignItems:'center' }}>
              <Text style={{ fontWeight:'400', color:'#A9A9A9', fontSize:12, marginLeft:15 ,width:'100%'}}>Default</Text>
            </View>
            </View>
             </View>
             <View style={{ alignItems:'center', padding:10, flexDirection:'row', borderBottomWidth:1, borderColor:'#C0C0C0',height:70}}>
             
             <View>
                <View style={{ flexDirection:'row', justifyContent:'space-between', width:'100%' }}>
                <Text style={styles.profileName}>Vibrate</Text>
                
            </View>
            
            <View style={{ flexDirection:'row', alignItems:'center' }}>
              <Text style={{ fontWeight:'400', color:'#A9A9A9', fontSize:12, marginLeft:15 ,width:'100%'}}>Default</Text>
            </View>
            </View>
             </View>
             <View style={{ alignItems:'center', padding:10, flexDirection:'row', borderBottomWidth:1, borderColor:'#C0C0C0',height:70}}>
             
             <View>
                <View style={{ flexDirection:'row', justifyContent:'space-between', width:'100%' }}>
                <Text style={styles.profileName}>Pop-up Notication</Text>
                
            </View>
            
            <View style={{ flexDirection:'row', alignItems:'center' }}>
              <Text style={{ fontWeight:'400', color:'#A9A9A9', fontSize:12, marginLeft:15 ,width:'100%'}}>No popup</Text>
            </View>
            </View>
             </View>
             <View style={{ alignItems:'center', padding:10, flexDirection:'row', borderBottomWidth:1, borderColor:'#C0C0C0',height:70}}>
             
             <View>
                <View style={{ flexDirection:'row', justifyContent:'space-between', width:'100%' }}>
                <Text style={styles.profileName}>Light</Text>
                
            </View>
            
            <View style={{ flexDirection:'row', alignItems:'center' }}>
              <Text style={{ fontWeight:'400', color:'#A9A9A9', fontSize:12, marginLeft:15 ,width:'100%'}}>White</Text>
            </View>
            </View>
             </View>
             <View>
                <View style={{ flexDirection:'row', justifyContent:'space-between', width:'100%' }}>
                <Text style={styles.profileName}>Use high priority notifications</Text>
                
            </View>
            
            <View style={{ flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
              <Text style={{ fontWeight:'400', color:'#A9A9A9', fontSize:12, marginLeft:15 ,width:'70%'}}>Show previous of notification at the top of screen</Text>
              <CheckBox
              
      value={this.state.check}
      onChange={() => this.setState({ check: !this.state.check})}
    />
            </View>
            </View>
            <View style={{ alignItems:'center', padding:10, flexDirection:'row', justifyContent:'space-between', width:'100%',height: 40,
             borderBottomWidth:1, borderColor:'white', }}>
              <Text style={styles.Nam}>Group notifications</Text>
              </View>
              <View style={{ alignItems:'center', padding:10, flexDirection:'row', borderBottomWidth:1, borderColor:'#C0C0C0',height:70}}>
             
             <View>
                <View style={{ flexDirection:'row', justifyContent:'space-between', width:'100%' }}>
                <Text style={styles.profileName}>Notification tone</Text>
                
            </View>
            
            <View style={{ flexDirection:'row', alignItems:'center' }}>
              <Text style={{ fontWeight:'400', color:'#A9A9A9', fontSize:12, marginLeft:15 ,width:'100%'}}>free</Text>
            </View>
            </View>
             </View>
             <View style={{ alignItems:'center', padding:10, flexDirection:'row', borderBottomWidth:1, borderColor:'#C0C0C0',height:70}}>
             
             <View>
                <View style={{ flexDirection:'row', justifyContent:'space-between', width:'100%' }}>
                <Text style={styles.profileName}>Vibrate</Text>
                
            </View>
            
            <View style={{ flexDirection:'row', alignItems:'center' }}>
              <Text style={{ fontWeight:'400', color:'#A9A9A9', fontSize:12, marginLeft:15 ,width:'100%'}}>Default</Text>
            </View>
            </View>
             </View>


                </ImageBackground>)
    }}
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
        Nam:{
            marginLeft: 5,
            marginRight: 13,
            paddingTop:8,
            paddingBottom:0,
            color:'#128C7E',
            fontSize: 13,
            fontWeight:'bold',
            width:'100%',
            paddingLeft:5,
            paddingRight:5
          },  
          N:{
            marginLeft: 5,
            fontSize: 14,
            fontWeight:'normal',
            width:'100%',
            paddingLeft:5,
            color:"#808080"

          },    
        })