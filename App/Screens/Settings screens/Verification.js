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
import { Button } from 'react-native-elements';

export default class Security extends Component {
    constructor(props) {
        super(props);
        this.state={
            update:'Enable'
        }
       
      }
    render()
    {
        return(
            <ImageBackground
				style={[ styles.container, styles.backgroundImage ]}
				source={require('/home/automateio/Message/App/images/white.jpg')}>
                   <View style={{ alignItems:'center', padding:10,paddingTop:'30%',paddingLeft:"30%", flexDirection:'row', }}>
             
                <Image source={ require('/home/automateio/Message/App/images/lock.jpg')}  style={{ borderRadius:100, width:200, height:200, paddingTop:15}}
                resizeMode="cover"/>
                
                
                </View>
                <View style={{ alignItems:'center', padding:10,paddingTop:'50%',paddingLeft:"35%", flexDirection:'row', }}>
                <Button
  title={this.state.update}
  titleStyle={{ fontWeight: "700" }}
  buttonStyle={{
    backgroundColor: "#25D366",
    width: 100,
    height: 45,
    borderColor: "#25D366",
    borderWidth: 0,
    borderRadius: 5
  }}
  containerStyle={{ marginTop: 20 }}
  onPress={() => this.setState({ update:'Enabled' })}
/>
                </View>




                </ImageBackground>)}}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        marginRight: 0,
        marginLeft: 0
    },
    })