import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ListView,
    ImageBackground,Image,TouchableHighlight,Alert,Modal,
} from 'react-native';
const firebase = require("firebase");

import {Icon,CheckBox} from 'react-native-elements';
var navigator;
// let time= new Time().toLocaleString();
import {Actions} from 'react-native-router-flux';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,MenuProvider
  } from 'react-native-popup-menu';

export default class Privacy extends Component {
    constructor(props) {
        super(props);
        this.state = { lastseen: 'nobody',
        profilephoto: 'EveryOne',
        about: 'My Contacts',
        status: 'EveryOne',
        livelocation: 'nobody', 
        checked: false,              
    
    
    };
      }
    render()
    {
        return(
            <ImageBackground
				style={[ styles.container, styles.backgroundImage ]}
				source={require('/home/automateio/Message/App/images/white.jpg')}>
                <View style={{ alignItems:'center', padding:10, flexDirection:'row', justifyContent:'space-between', width:'100%',height: 30,
             borderBottomWidth:1, borderColor:'white' }}>
              <Text style={styles.Nam}>Who can see my personal info</Text>
              </View>
            <View style={{  padding:10, flexDirection:'row', justifyContent:'space-between', width:'100%',height: 105,
             borderBottomWidth:1, borderColor:'#C0C0C0' }}>
              <MenuProvider style={{flexDirection: 'column', padding: 20}}>
              <Text style={styles.Name}>Last seen</Text>
              <Menu onSelect={value => this.setState({ lastseen: value })} style={{ height: 50 }}>
          <MenuTrigger text={this.state.lastseen}  style={{paddingLeft:5}}/>
          <MenuOptions customStyles={{optionWrapper: { padding: 5}}}>
            <MenuOption value={"EveryOne"} text='EveryOne' />
            <MenuOption value={"My Contacts"} text="My Contacts" />
            <MenuOption value={"nobody"} text="nobody" />    
          </MenuOptions>
        </Menu>
      </MenuProvider>
             
              </View>
            
              <View style={{  padding:10, flexDirection:'row', justifyContent:'space-between', width:'100%',height: 105,
             borderBottomWidth:1, borderColor:'#C0C0C0' }}>
              <MenuProvider style={{flexDirection: 'column', padding: 20}}>
              <Text style={styles.Name}>Profile photo</Text>
              <Menu onSelect={value => this.setState({ profilephoto: value })}>
          <MenuTrigger text={this.state.profilephoto}  style={{paddingLeft:5}}/>
          <MenuOptions>
            <MenuOption value={"EveryOne"} text='EveryOne' />
            <MenuOption value={"My Contacts"} text="My Contacts" />
            <MenuOption value={"nobody"} text="nobody" />    
          </MenuOptions>
        </Menu>
      </MenuProvider>
             
              </View>
              <View style={{  padding:10, flexDirection:'row', justifyContent:'space-between', width:'100%',height: 105,
             borderBottomWidth:1, borderColor:'#C0C0C0' }}>
              <MenuProvider style={{flexDirection: 'column', padding: 20}}>
              <Text style={styles.Name}>About</Text>
              <Menu onSelect={value => this.setState({ about: value })}>
          <MenuTrigger text={this.state.about}  style={{paddingLeft:5}}/>
          <MenuOptions>
            <MenuOption value={"EveryOne"} text='EveryOne' />
            <MenuOption value={"My Contacts"} text="My Contacts" />
            <MenuOption value={"nobody"} text="nobody" />    
          </MenuOptions>
        </Menu>
      </MenuProvider>
             
              </View>
              <View style={{  padding:10, flexDirection:'row', justifyContent:'space-between', width:'100%',height: 105,
             borderBottomWidth:1, borderColor:'#C0C0C0' }}>
              <MenuProvider style={{flexDirection: 'column', padding: 20}}>
              <Text style={styles.Name}>Status</Text>
              <Menu onSelect={value => this.setState({ status: value })}>
          <MenuTrigger text={this.state.status}  style={{paddingLeft:5}}/>
          <MenuOptions>
            <MenuOption value={"EveryOne"} text='EveryOne' />
            <MenuOption value={"My Contacts"} text="My Contacts" />
            <MenuOption value={"nobody"} text="nobody" />    
          </MenuOptions>
        </Menu>
      </MenuProvider>
             
              </View>
              <View style={{  padding:10, flexDirection:'row', justifyContent:'space-between', width:'100%',height: 105,
             borderBottomWidth:1, borderColor:'#C0C0C0' }}>
              <MenuProvider style={{flexDirection: 'column', padding: 20}}>
              <Text style={styles.Name}>Live location</Text>
              <Menu onSelect={value => this.setState({ livelocation: value })}>
          <MenuTrigger text={this.state.livelocation}  style={{paddingLeft:5}}/>
          <MenuOptions>
            <MenuOption value={"EveryOne"} text='EveryOne' />
            <MenuOption value={"My Contacts"} text="My Contacts" />
            <MenuOption value={"nobody"} text="nobody" />    
          </MenuOptions>
        </Menu>
      </MenuProvider>
             
              </View>
              {/* <View style={{ alignItems:'center', padding:10, flexDirection:'row', justifyContent:'space-between', width:'100%',height: 30,
             borderBottomWidth:1, borderColor:'white' }}>
              <Text style={styles.Nam}>Messaging</Text>
              </View> */}
              <TouchableOpacity >
            <View style={{ alignItems:'center', padding:10, flexDirection:'row', justifyContent:'space-between', width:'100%',height: 25,paddingTop:5,
             borderBottomWidth:0, }}>
              <Text style={styles.Name}>Blocked contacts: 3</Text>
              </View>
              </TouchableOpacity>
             
           
             
             
           </ImageBackground>)
    }}
    const styles = StyleSheet.create({
        Name:{
            marginLeft: 5,
            marginRight: 13,
            paddingBottom:0,
            fontSize:20,
            fontWeight:'normal',
            width:'100%',
            paddingLeft:0,
            paddingRight:5
          },
          container: {
            flex: 1,
            alignItems: 'stretch',
            marginRight: 0,
            marginLeft: 0
        }, 
        Nam:{
            marginLeft: 5,
            marginRight: 13,
            paddingTop:8,
            paddingBottom:0,
            color:'#128C7E',
            fontSize: 15,
            fontWeight:'bold',
            width:'100%',
            paddingLeft:5,
            paddingRight:5
          },       
          Nae:{
            marginLeft: 5,
            marginRight: 13,
            paddingTop:10,
            paddingBottom:0,
            color:'black',
            fontSize: 20,
            fontWeight:'normal',
            width:'100%',
            paddingLeft:5,
            paddingRight:5,
            
            
          },       
        })