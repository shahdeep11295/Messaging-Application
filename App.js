import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,TouchableHighlight,TouchableOpacity,BackHandler
} from 'react-native';

import Call from './App/Screens/Call.js'
import {Icon,Button} from 'react-native-elements'

import ProfileView from "./App/Screens/ProfileView"
import Status from "./App/Screens/Status";
import Login from "./App/Screens/Login.js";
import Signup from "./App/Screens/Signup.js";
import ForgetPassword from "./App/Screens/ForgetPassword.js";
import FriendsList from "./App/Screens/FriendsList.js";
import Chat from "./App/Screens/Chat.js";
import ContactList from "./App/Screens/contacts.js";
import OptionsMenu from 'react-native-options-menu';
import Settings from './App/Screens/Settings.js';
import Callbox from './App/Screens/Callbox.js'
import Account from './App/Screens/Settings screens/Account'
import Security from './App/Screens/Settings screens/Security'
import Verification from './App/Screens/Settings screens/Verification'
import {Router,Scene, Actions} from 'react-native-router-flux'
import Privacy from './App/Screens/Settings screens/Privacy.js';
import Dummy from './App/Screens/Settings screens/Dummy';
import ChangeEmail from './App/Screens/Settings screens/ChangeEmail.js';
import Managechat from './App/Screens/Settings screens/Managechat';
import Help from './App/Screens/Settings screens/Help';
import Dasusage from './App/Screens/Settings screens/Dasusage'
import Notification from './App/Screens/Settings screens/Notification'
import Profile from './App/Screens/Settings screens/Profile'
import Task from "./App/Screens/Task";
const firebase = require("firebase");
var config = {
  apiKey: "AIzaSyCPpvTIQUuoCsdwovoHBc_oQv8EmzqsWRw",
authDomain: "chat-22607.firebaseapp.com",
databaseURL: "https://chat-22607.firebaseio.com",
projectId: "chat-22607",
storageBucket: "chat-22607.appspot.com",
messagingSenderId: "958591471882"
};
firebase.initializeApp(config);
const myIcon = (<Icon name="dots-three-vertical" type="entypo" color="white" iconStyle={{ marginRight: 10 }} />);


export default class Firechat extends React.Component {
//   constructor(props) {
//     super(props);
//     this.backPressed=this.backPressed.bind(this)
//   }
//   componentDidMount() {
//     BackHandler.addEventListener('hardwareBackPress', this.backPressed);
// }

// componentWillUnmount() {
//     BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
// }

// backPressed = async() => {
  
//     Actions.pop();

//     return true;
// }

  render() {
   
    
    return (
      <Router navigationBarStyle={styles.navBar} titleStyle={styles.navTitle}>
             <Scene key="root" >
             <Scene 
             key="login"
             component={Login}
             title="Login"
             initial  />
            <Scene 
             key="account"
             component={Account}
             title="Account"
               />
                <Scene 
             key="profileview"
             component={ProfileView}
             title="---"
             hideNavBar
               />
                <Scene 
             key="security"
             component={Security}
             title="Security"
               />
                <Scene 
             key="task"
             component={Task}
             title=""
               />
                <Scene 
             key="verification"
             component={Verification}
             title="Two-step verification"
             titleStyle={styles.navTitle}
               />
             
                <Scene 
             key="profile"
             component={Profile}
             title="Profile"
             titleStyle={styles.navTitle}
               />
               <Scene 
             key="privacy"
             component={Privacy}
             title="Privacy"
             titleStyle={styles.navTitle}
               />
               <Scene 
             key="notification"
             component={Notification}
             title="Notifications"
             titleStyle={styles.navTitle}
             renderRightButton={()=>(<View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <OptionsMenu
                 customButton={myIcon}            
                 destructiveIndex={1}
                 options={['Reset notification settings']}
                 actions={[note]}
                 
                 />
             </View>)}
               />
                <Scene 
             key="help"
             component={Help}
             title="Help"
             titleStyle={styles.navTitle}
               />
               <Scene 
             key="dasusage"
             component={Dasusage}
             title="Data and storage usage"
             titleStyle={styles.navTitle}
               />
               <Scene 
             key="managechat"
             component={Managechat}
             title="Chats"
             titleStyle={styles.navTitle}
               />
                <Scene 
             key="dummy"
             component={Dummy}
             title="ChangeEmail"
             titleStyle={styles.navTitle}
               />
              <Scene 
             key="changeemail"
             component={ChangeEmail}
             title="ChangeEmail"
             titleStyle={styles.navTitle}
             renderRightButton ={()=>(<Button
              icon={
                {
                  name:'arrow-right',
                  type:'font-awesome',
                  size:15,
                  color:'white'
                
              }}
              buttonStyle={{backgroundColor:"#075E54",
              borderWidth: 1,
              borderLeftWidth:2,
              borderLeftColor:'white',
              borderRightColor:'#075E54',
                borderBottomColor:"#075E54",
                borderTopColor:'#075E54',
              borderRadius: 0}}
              title='Next'
              onPress={()=> {
                Actions.dummy()}}
            />)}
               />

              <Scene 
             key="signup"
             component={Signup}
             title="Signup"
               />
               <Scene 
             key="settings"
             component={Settings}
             title="Settings"
             
             
              />
              <Scene 
             key="callbox"
             component={Callbox}
             hideNavBar
            //  title="WHATSAPP VOICE CALL"
             titleStyle={styles.tit}
             renderLeftButton={()=>(
              <TouchableOpacity  onPress={() => Actions.pop()}>
               <Icon name="keyboard-arrow-down" type="material-icons" size={15} color="white" />
               </TouchableOpacity>
           
             )}
            
               />
                <Scene 
             key="contacts"
             component={ContactList}
             title="Contactlist"
             
             
               />
            <Scene 
             key="chat"
             component={Chat}
             title='chat'
             hideNavBar
             renderRightButton={()=>(<View style={{ flexDirection: 'row', alignItems: 'center' }}>
             <TouchableOpacity>
             <Icon name="video-camera" type="font-awesome" color="#fff" size={20} style={{ padding: 5, paddingRight: 15 }} />
           </TouchableOpacity>
             <Text style={{ color: '#075E54' }}>MAg</Text>
             <TouchableOpacity>
             <Icon name="call" color="#fff" size={23} style={{ padding: 5, paddingRight: 15 }} />
           </TouchableOpacity>
             <Text style={{ color: '#075E54' }}>MAg</Text>
             <TouchableOpacity>
             <Icon name="attach-file" color="#fff" size={23} style={{ padding: 15 }} />
           </TouchableOpacity>
             <Text style={{ color: '#075E54' }}>MAg</Text>
   
           </View>)}
             hideTabBar/> 

                <Scene 
             key="forgetpassword"
             component={ForgetPassword}
             title="Forget Password"
             titleStyle={styles.title}
               />
               <Scene
                 key="home"
                 tabs
                 tabBarPosition='top'
                 title="WhatsApp"
               tabStyle={styles.tabBar}
               labelStyle={styles.labelStyle}
               tabBarStyle={styles.taa}
               titleStyle={styles.title}
               renderLeftButton={()=>(null)}
               renderRightButton={()=>(<View style={{ flexDirection: 'row', alignItems: 'center' }}>
               <TouchableOpacity>
                 <Icon name="search" type="font-awesome" color="#fff" size={20} style={{ padding: 5, paddingRight: 15 }} />
               </TouchableOpacity>
               <Text style={{ color: '#075E54' }}>MAg</Text>
               <OptionsMenu
                 customButton={myIcon}            
                 destructiveIndex={1}
                 options={['Settings', 'WhatsApp Web', 'Logout']}
                 actions={[settings, web,logout]}
                 />
     
             </View>
     )}
                 >





              <Scene  title="Calls" tabBarLabel="Calls">
              <Scene 
             key="call"
             component={Call}
             
             hideNavBar
             
               />
              
                 </Scene>
                 <Scene  title="Chats" initial >
                 <Scene 
             key="friends"
             component={FriendsList}
             title="friendslist"
             hideNavBar
             initial
             
               />
               
              
             
                 </Scene>
                 <Scene  title="status" tabStyle={styles.tabBar} tabBarLabel="Status">
              <Scene 
             key="status"
             component={Status}
             title="status"
       
             hideNavBar
             
              />
                 </Scene>
                 </Scene>

         </Scene>
      </Router>
      
  
               
      // // <Navigator/>
     
     
        
    );
  }
}
const styles = StyleSheet.create({
navBar:{
  backgroundColor: '#075E54',

  elevation: 0,
},
navTitle:{
  fontWeight: 'bold',
        width: '100%',
        color: 'white'
},
tabBar:{
  
  marginTop:0,
borderWidth:2,

borderBottomColor:"white",
borderRightColor:'#075E54',
borderTopColor:'#075E54',
borderLeftColor:'#075E54',
  width: 130,
  height:'70%',
  backgroundColor: '#075E54',
  

},
labelStyle:{
  
  fontSize: 13,
  fontWeight:'bold',
  color:'white',
  borderColor:'white',
  borderEndColor:'white',
  borderTopColor:'white',
  backgroundColor: '#075E54'

},
taa:{
  backgroundColor:'#075E54',
  
},
title:{
  color:'white',
  width:"100%"
  
  
},
tit:{
  color:'white',
  paddingLeft:"15%",
  width:"100%"
  
  
},


})
function logout() {
  return (
    firebase.auth().signOut(), function (error) {
      // An error happened.
    });
}
function web() {
  return (alert('Whatsapp Web is currently disabled'));
}


function settings() {
  return (
    console.log('hjhj'),
   
  Actions.settings()
    // this.props.navigation.navigate('Settings')
  );
}
function note(){
  return(alert('Notifications has been reset!!'));
}
