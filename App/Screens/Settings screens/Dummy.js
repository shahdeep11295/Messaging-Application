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

import {Icon,Button} from 'react-native-elements';
var navigator;
// let time= new Time().toLocaleString();
import {Actions} from 'react-native-router-flux';
import TextField from '/home/automateio/Message/App/Components/TextField';

export default class Dummy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            email:""

        }}
    render()
    {
        return(
            <ImageBackground
				style={[ styles.container, styles.backgroundImage ]}
 				source={require('/home/automateio/Message/App/images/white.jpg')}>
                     
                     <View style={styles.container}>
                <TextField placeholder="Enter the current email address" 
                    value={this.state.name}
                    onChangeText={name => this.setState({ name }) } />
                <TextField placeholder="Enter the new Email address" 
                    value={this.state.email}
                    onChangeText={email => this.setState({ email }) } />
                    <View style={{paddingLeft:90,paddingTop:15}}>
                    <Button
  title="Update"
  titleStyle={{ fontWeight: "bold" }}
  buttonStyle={{
    backgroundColor: "#25D366",
    width: 100,
    height: 45,
    borderColor: "#25D366",
    borderWidth: 0,
    borderRadius: 5,
    
  }}
  
  containerStyle={{ marginTop: 20,paddingLeft:505 }}
/>
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

        
        marginRight: 10,
        marginLeft: 10
    },
    text:{
        padding:25,
        fontSize:18,
        fontWeight:'normal',
        paddingLeft:10,
        paddingRight:10

    }
    })