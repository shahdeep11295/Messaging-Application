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
import { Switch } from 'react-native-switch';
import {Icon} from 'react-native-elements';
import ToggleSwitch from 'toggle-switch-react-native'
var navigator;
// let time= new Time().toLocaleString();
import {Actions} from 'react-native-router-flux';


export default class Security extends Component {
    render()
    {
        return(
            <ImageBackground
				style={[ styles.container, styles.backgroundImage ]}
				source={require('/home/automateio/Message/App/images/white.jpg')}>
                 <View style={{ alignItems:'center', padding:10,paddingBottom:20,paddingTop:20,paddingLeft:"28%", flexDirection:'row', borderBottomWidth:1, borderColor:'#f7f7f7' }}>
             <TouchableOpacity >
                <Image source={ require('/home/automateio/Message/App/images/lock.jpg')}  style={{ borderRadius:100, width:200, height:200, paddingTop:15}}
                resizeMode="cover"/>
                
                </TouchableOpacity>
                </View>
                <Text style={styles.Name}> Your messages and calls
                 are secured with end-to-end encryption,which 
                 means WhatsApp and third parties can't read
                  or listen to them.</Text>
                  <View style={{borderBottomWidth:1,paddingBottom:20, borderColor:'#C0C0C0'}}>
                  <TouchableOpacity onPress={() => Linking.openURL('https://www.whatsapp.com/security?lg=en&lc=US&eea=0')}>
  <Text style={{color: '#128C7E',paddingLeft:25, }}>
    Learn more about WhatsApp security
  </Text>
</TouchableOpacity>
</View>
<View style={{ alignItems:'center', padding:10,  width:'100%',height: 100,
             borderBottomWidth:1, borderColor:'#C0C0C0' }}>
              <Text style={styles.tagName}>Show security notifications</Text>
              {/* <Text style={styles.tagName}>Turn on this setting to receive notifications
                   when a contact's security code has changed.
                   Your messages and 
                  call are encrypted regardless of this setting </Text> */}
                   <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
              <Text style={{ fontWeight:'400', color:'#666', fontSize:12, paddingTop:5,paddingLeft:5,marginLeft:5 ,marginRight:0,width:'80%'}}>Turn on this setting to receive notifications
                   when a contact's security code has changed.
                   Your messages and 
                  call are encrypted regardless of this setting</Text>
                  
                    
                  <Switch
    value={false}
    onValueChange={(val) => console.log(val)}
    disabled={false}
    activeText={'On'}
    inActiveText={'Off'}
   
  />

        
      
            </View>
              </View>
            







                </ImageBackground>)
    }
}
const styles = StyleSheet.create({
    Name:{
        marginLeft: 13,
        marginRight: 13,
        paddingBottom:10,
        fontSize: 17,
        fontWeight:'normal',
        width:'100%',
        paddingLeft:15,
        paddingRight:5
      },
      tagName:{
        marginLeft: 10,
        marginRight: 13,
        paddingBottom:0,
        fontSize: 17,
        fontWeight:'normal',
        width:'100%',
        paddingLeft:10,
        paddingRight:5
      },
      container: {
        flex: 1,
        alignItems: 'stretch',
        marginRight: 0,
        marginLeft: 0
    },
    })