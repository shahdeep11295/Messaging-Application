import React, { Component } from 'react';
import { Text, View,TouchableOpacity } from 'react-native';
import FriendsList from "./FriendsList.js";
import Status from "./Status";
import Call from './Call';
import Chat from "./Chat.js";
import ContactList from "./contacts.js";

import OptionsMenu from 'react-native-options-menu';
import {Icon} from 'react-native-elements'
import { StackNavigator,SafeAreaView ,TabNavigator,
    createStackNavigator,createMaterialTopTabNavigator,NavigationActions,StackActions} from 'react-navigation';

    const myIcon = (<Icon name="dots-three-vertical" type="entypo" color="white" iconStyle={{ marginRight: 10 }} />);
    const Oops =()=>{return(<OptionsMenu
        customButton={myIcon}            
        destructiveIndex={1}
        options={['Settings', 'WhatsApp Web', 'Logout']}
        actions={[setting,web,logout]}
        />)}
 export default class Whatsapp extends Component {
    
     
   
   
  render() {
    return (
      <Homestack/>
    );
  }
}
const friendstack = createStackNavigator({
  chats: { screen: FriendsList,
    navigationOptions:{
      header:null
    } },
  chat: { screen: Chat ,
    navigationOptions:{tabBarVisible:false}
   },
  });
const Homestack=createMaterialTopTabNavigator({

    Calls:{screen:Call},
    chats:{screen:friendstack
    },
    Status:{screen:Status,
  
    },
   
   
  } ,{
    initialRouteName:'chats',
  activeTintColor:'white',
  navigationOptions:{tabBarVisible:true},
  
  
    tabBarOptions: {
      showLabel:true,
      activeTintColor:'white',
      activeBackgroundColor:'white',
  
  
      labelStyle: {
  
        fontSize: 13,
        fontWeight:'bold',
        color:'white',
        borderColor:'white',
        borderEndColor:'white',
        borderTopColor:'white'
  
  
      },
  
      tabStyle: {
  
         marginTop:0,
  
        width: 130,
        height:'70%'
  
      },
      style: {
        backgroundColor: '#075E54',
  
      },
  
  
    }})
