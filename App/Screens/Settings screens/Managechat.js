import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ListView,
    ImageBackground,Image,TouchableHighlight,Alert,Modal,CheckBox
} from 'react-native';
const firebase = require("firebase");

import {Icon,} from 'react-native-elements';
var navigator;
// let time= new Time().toLocaleString();
import {Actions} from 'react-native-router-flux';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,MenuProvider
  } from 'react-native-popup-menu';

export default class Managechat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked:true,
            about: 'My Contacts',
            check:true
        }
    }
    render()
    {
        return(
         <ImageBackground
            style={[ styles.container, styles.backgroundImage ]}
            source={require('/home/automateio/Message/App/images/white.jpg')}>
             <View style={{ alignItems:'center', padding:10, flexDirection:'row', borderBottomWidth:1, borderColor:'white',height:70}}>
             
             <View>
                <View style={{ flexDirection:'row', justifyContent:'space-between', width:'100%' }}>
                <Text style={styles.profileName}>App Language</Text>
                
            </View>
            
            <View style={{ flexDirection:'row', alignItems:'center' }}>
              <Text style={{ fontWeight:'400', color:'#A9A9A9', fontSize:12, marginLeft:15 ,width:'100%'}}>Phones language(English)</Text>
            </View>
            </View>
             </View>
             <View style={{ alignItems:'center', padding:10, flexDirection:'row', justifyContent:'space-between', width:'100%',height: 40,
             borderBottomWidth:1, borderColor:'white' }}>
              <Text style={styles.Nam}>Chat settings</Text>
              </View>
              <View style={{ alignItems:'center', padding:10, flexDirection:'row', borderBottomWidth:1, borderColor:'#A9A9A9',height:60}}>
             
             <View>
                <View style={{ flexDirection:'row', justifyContent:'space-between', width:'100%' }}>
                <Text style={styles.profileName}>Enter is send</Text>
                
            </View>
            
            <View style={{ flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
              <Text style={{ fontWeight:'400', color:'#A9A9A9', fontSize:12, marginLeft:15 ,width:'50%'}}>Enter key will add a new line</Text>
              <CheckBox
              
      value={this.state.checked}
      onChange={() => this.setState({ checked: !this.state.checked })}
    />
            </View>
            </View>
             </View>
             {/* <View style={{  padding:10, flexDirection:'row', alignItems:"flex-start",justifyContent:"space-around", width:'100%',height: 60,
             borderBottomWidth:1, borderColor:'#C0C0C0' }}>
              <MenuProvider style={{flexDirection: 'column', padding: 10}}>
              <Text style={styles.Nam}>Fontsize</Text>
              <Menu onSelect={value => this.setState({ about: value })}>
          <MenuTrigger text={this.state.about}  style={{paddingLeft:5}}/>
          <MenuOptions>
            <MenuOption value={"small"} text='small' />
            <MenuOption value={"Medium"} text="Medium" />
            <MenuOption value={"Large"} text="Large" />    
          </MenuOptions>
        </Menu>
      </MenuProvider>
             
              </View> */}
                 <TouchableOpacity >
            <View style={{ alignItems:'center', padding:10, flexDirection:'row', justifyContent:'space-between', width:'100%',height: 50,
             borderBottomWidth:1, borderColor:'#C0C0C0' ,marginLeft:15}}>
              <Text style={styles.Name}>Wallpaper</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity >
            <View style={{ alignItems:'center', padding:10, flexDirection:'row', justifyContent:'space-between', width:'100%',height: 50,
             borderBottomWidth:1, borderColor:'#C0C0C0' ,marginLeft:15}}>
              <Text style={styles.Name}>Chat Backup</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity >
            <View style={{ alignItems:'center', padding:10, flexDirection:'row', justifyContent:'space-between', width:'100%',height: 50,
             borderBottomWidth:1, borderColor:'#C0C0C0' ,marginLeft:15}}>
              <Text style={styles.Name}>Chat history</Text>
              </View>
              </TouchableOpacity>
              <View style={{ alignItems:'center', padding:10, flexDirection:'row', justifyContent:'space-between', width:'100%',height: 40,
             borderBottomWidth:1, borderColor:'white', }}>
              <Text style={styles.Nam}>Chat settings</Text>
              </View>
              <View style={{ alignItems:'center', padding:10, flexDirection:'row', borderBottomWidth:1, borderColor:'#A9A9A9',height:60}}>
             
             <View>
                <View style={{ flexDirection:'row', justifyContent:'space-between', width:'100%' }}>
                <Text style={styles.profileName}>Show media in gallery</Text>
                
            </View>
            
            <View style={{ flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
              <Text style={{ fontWeight:'400', color:'#A9A9A9', fontSize:12, marginLeft:15 ,width:'50%'}}>Show newly downloaded media in your gallery</Text>
              <CheckBox
              
      value={this.state.check}
      onChange={() => this.setState({ checked: !this.state.check })}
    />
            </View>
            </View>
             </View>
             
            </ImageBackground>)

        
}}
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'stretch',
           
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
    })