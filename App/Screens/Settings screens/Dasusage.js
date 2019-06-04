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


export default class Dasusage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked:true,
            about: 'My Contacts',
            check:true,
            audio:true,
            video:true,
            document:false,
            photo:true,
        }
    }
    
    render()
    {
       
        return(
            <ImageBackground
				style={[ styles.container, styles.backgroundImage ]}
				source={require('/home/automateio/Message/App/images/white.jpg')}>
                  <TouchableOpacity  >
            <View style={{ alignItems:'center', padding:10, flexDirection:'row', justifyContent:'space-between', width:'100%',height: 50,
             borderBottomWidth:1, borderColor:'#C0C0C0' }}>
              <Text style={styles.Name}>Network</Text>
              </View>
              </TouchableOpacity>
            
            <View style={{ alignItems:'center', padding:10, flexDirection:'row', justifyContent:'space-between', width:'100%',height: 70,
             borderBottomWidth:20, borderColor:'#C0C0C0',shadowOpacity:0}}>
              <Text style={styles.Name}>Storage usage</Text>
              </View>
              <View style={{ alignItems:'center', padding:10, flexDirection:'row', justifyContent:'space-between', width:'100%',height: 40,
             borderBottomWidth:1, borderColor:'white' }}>
              <Text style={styles.Nam}>Media auto-Download</Text>
              </View>
              <View style={{ alignItems:'center', padding:10, flexDirection:'row', borderBottomWidth:1, borderColor:'#C0C0C0',height:70}}>
             
             <View>
                <View style={{ flexDirection:'row', justifyContent:'space-between', width:'100%' }}>
                <Text style={styles.profileName}>When using mobile data</Text>
                
            </View>
            
            <View style={{ flexDirection:'row', alignItems:'center' }}>
              <Text style={{ fontWeight:'400', color:'#A9A9A9', fontSize:12, marginLeft:15 ,width:'100%'}}>Photos</Text>
            </View>
            </View>
             </View>
             <TouchableOpacity  onPress={()=> { DialogManager.show({
        title: 'When connected on Wi-Fi',
        titleAlign: 'center',
        animationDuration: 200,
        ScaleAnimation: new ScaleAnimation(),
        children: (
          <DialogContent>
            <View style={{ flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
             
              <CheckBox
              
      value={this.state.photo}
      onChange={() => this.setState({ photo: !this.state.photo })}
    />
     <Text style={{ fontWeight:'400', color:'black', fontSize:14, marginLeft:15 ,width:'90%'}}>Photos</Text>
            </View>
            <View style={{ flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
             
              <CheckBox
              
      value={this.state.audio}
      onChange={() => this.setState({ audio: !this.state.audio })}
    />
     <Text style={{ fontWeight:'400', color:'black', fontSize:14, marginLeft:15 ,width:'90%'}}>Audio</Text>
            </View>
            <View style={{ flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
             
              <CheckBox
              
      value={this.state.video}
      onChange={() => this.setState({ video: !this.state.video })}
    />
     <Text style={{ fontWeight:'400', color:'black', fontSize:14, marginLeft:15 ,width:'90%'}}>Videos</Text>
            </View>
            <View style={{ flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
             
              <CheckBox
              
      value={this.state.document}
      onChange={() => this.setState({ document: !this.state.document })}
    />
     <Text style={{ fontWeight:'400', color:'black', fontSize:14, marginLeft:15 ,width:'90%'}}>Documents</Text>
            </View>
            
          </DialogContent>
        ),
      }, () => {
        console.log('callback - show');
      });}} >
             <View style={{ alignItems:'center', padding:10, flexDirection:'row', borderBottomWidth:1, borderColor:'#C0C0C0',height:70}}>
             
             <View>
                <View style={{ flexDirection:'row', justifyContent:'space-between', width:'100%' }}>
                <Text style={styles.profileName}>When connected on Wi-Fi</Text>
                
            </View>
            <View style={{ flexDirection:'row', alignItems:'center' }}>
              <Text style={{ fontWeight:'400', color:'#A9A9A9', fontSize:12, marginLeft:15 ,width:'100%'}}>All media</Text>
            </View>
            </View>
             </View>
             </TouchableOpacity>
             <View style={{ alignItems:'center', padding:10, flexDirection:'row', borderBottomWidth:1, borderColor:'#C0C0C0',height:70}}>
             
             <View>
                <View style={{ flexDirection:'row', justifyContent:'space-between', width:'100%' }}>
                <Text style={styles.profileName}>When roaming</Text>
                
            </View>
            
            <View style={{ flexDirection:'row', alignItems:'center' }}>
              <Text style={{ fontWeight:'400', color:'#A9A9A9', fontSize:12, marginLeft:15 ,width:'100%'}}>No media</Text>
            </View>
            </View>
             </View>
             <View style={{ alignItems:'center', padding:10, flexDirection:'row', justifyContent:'space-between', width:'100%',height: 50,
             borderBottomWidth:1, borderColor:'#C0C0C0',backgroundColor:'#D3D3D3' }}>
              <Text style={styles.N}>NOTE: Voice messages are always automatically downloaded for the best communication experience</Text>
              </View>
              <View style={{ alignItems:'center', padding:10, flexDirection:'row', justifyContent:'space-between', width:'100%',height: 30,
             borderBottomWidth:1, borderColor:'white' }}>
              <Text style={styles.Nam}>Call settings</Text>
              </View>
              <View style={{ alignItems:'center', padding:10, flexDirection:'row', borderBottomWidth:1, borderColor:'#A9A9A9',height:60}}>
             
             <View>
                <View style={{ flexDirection:'row', justifyContent:'space-between', width:'100%' }}>
                <Text style={styles.profileName}>Low data usage</Text>
                
            </View>
            
            <View style={{ flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
              <Text style={{ fontWeight:'400', color:'#A9A9A9', fontSize:12, marginLeft:15 ,width:'70%'}}>Lower the amount of data used during a WhatsApp call when using mobile data</Text>
              <CheckBox
              
      value={this.state.checked}
      onChange={() => this.setState({ checked: !this.state.checked })}
    />
            </View>
            </View>
             </View>



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