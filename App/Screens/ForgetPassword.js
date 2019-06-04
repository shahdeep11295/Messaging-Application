import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,TextInput,ImageBackground
} from 'react-native';
import { Colors, Styles } from '../Shared'
import {withNavigation} from 'react-navigation'
import TextField from '../Components/TextField';
import Button from '../Components/Button';
import Separator from '../Components/Separator';
const firebase = require("firebase");
export default class ForgetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
           
        }}

  
    
    forgot() {
        var emailAddress = this.state.email;
        firebase.auth().sendPasswordResetEmail(emailAddress).then(function(user){
            alert('check your email');
        }).catch(function(e){
            alert(e);
        })
    }

    render() {
        return (
            <ImageBackground
				style={[ styles.container, styles.backgroundImage ]}
				source={require('../images/white.jpg')}>
            <View style={styles.container}>
                  <TextField placeholder="email"
                    value={this.state.email}
                    onChangeText={email => this.setState({ email }) } />
                <Button primary onPress={this.forgot.bind(this)}>Forget Password</Button>
            </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        marginRight: 10,
        marginLeft: 10
    }
})
