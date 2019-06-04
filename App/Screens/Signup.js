import React, {Component} from 'react';
import { 
    View,
    Text,
    StyleSheet,TouchableOpacity,Image,ImageBackground
} from 'react-native';
const firebase = require("firebase");
import Spinner from 'react-native-loading-spinner-overlay';

import { Colors, Styles } from '../Shared'
import { ImagePicker } from 'expo';
import TextField from '../Components/TextField';
import Button from '../Components/Button';
import Separator from '../Components/Separator';
import {Actions} from 'react-native-router-flux';
import {Permissions,Notifications} from 'expo'

 
// import PasswordStrengthChecker from 'react-native-password-strength-checker';
export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            avatarSource:'',
            image: null,
            pic:null,
           
            avatar:null,
            errorMessage: null,
            token:''
        }

        firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
    }
  

    onAuthStateChanged = (user) => {
       
        if(this.state.avatar===null)
        {this.setState({
            avatar:'https://lh5.ggpht.com/_S0f-AWxKVdM/S5TpU6kRmUI/AAAAAAAAL4Y/wrjx3_23kw4/s72-c/d_silhouette%5B2%5D.jpg?imgmax=800'
        })}
            if (user) {
                this.getRef().child('friends').child(user.uid).set({
                    email: user.email,
                    uid: user.uid,
                    name: this.state.name,
                    avatar:(this.state.avatar)
                })
                Actions.home()
                this.setState({
                    loading: false
                })
            }
        }
        registerForPushNotifications = async(user)=> {
            const { status: existingStatus } = await Permissions.getAsync(
              Permissions.NOTIFICATIONS
            );
            let finalStatus = existingStatus;
          
            // only ask if permissions have not already been determined, because
            // iOS won't necessarily prompt the user a second time.
            if (existingStatus !== 'granted') {
              // Android remote notification permissions are granted during the app
              // install, so this will only ask on iOS
              const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
              finalStatus = status;
            }
          
            // Stop here if the user did not grant permissions
            if (finalStatus !== 'granted') {
              return;
            }
          
            // Get the token that uniquely identifies this device
            let tok = await Notifications.getExpoPushTokenAsync();
           
              this.setState({
                    token: tok 
            })
            console.log(this.state.token)
            
            //   firebase.database().ref("friends/");
            let userr =firebase.auth().currentUser.uid
    
            
             var updates = {}
             updates['/expoToken']=this.state.token
             firebase.database().ref('friends/'+userr).update(updates)
            
            
    
    
    
        }

    getRef() {
        return firebase.database().ref();
    }

    // static route = {
    //     navigationBar: {
    //         title: 'SignUp',
    //         ... Styles.NavBarStyles
    //     }
    // }
    // static navigationOptions = ({ navigation }) => ({
    //     title: 'SignUp',
    //     })

    signup = () => {
        this.setState({
            errorMessage: null,
            loading: true 
        })
        const {email, password} = this.state;
        firebase.auth()
            .createUserWithEmailAndPassword(email, password).then(user =>{this.registerForPushNotifications(user)
            })
            .catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                this.setState({
                    errorMessage,
                    loading: false
                })
            });
    }

    renderErrorMessage = () => {
        if(this.state.errorMessage)
            return <Text style={styles.error}>{this.state.errorMessage}</Text>
    }
    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          aspect: [4, 3],
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          this.setState({ avatar : result.uri });
        }
      };
    
  
    render() {
        let { avatar } = this.state;
        return (
            <ImageBackground
				style={[ styles.container, styles.backgroundImage ]}
				source={require('../images/white.jpg')}>
            <View style={styles.container}>
                <TextField placeholder="Full Name" 
                    value={this.state.name}
                    onChangeText={name => this.setState({ name }) } />
                <TextField placeholder="Email" 
                    value={this.state.email}
                    onChangeText={email => this.setState({ email }) } />
                <TextField placeholder="Password" secureTextEntry 
                    value={this.state.password}
                    onChangeText={password => this.setState({ password }) } />



          
          <View style={{ flex: 1, alignItems: 'center' }}>
          <TouchableOpacity style={{backgroundColor:'green',margin:10,padding:10}}
        onPress={this._pickImage}>
          <Text style={{color:'#fff'}}>Select Image</Text>
        </TouchableOpacity>

        {avatar &&
          <Image source={{ uri: avatar }} style={{ width: 100, height: 100}} />}
      </View>





                     {/* <TextField placeholder="Upload your image url" 
                    value={this.state.avatar}
                    onChangeText={avatar => this.setState({ avatar}) } /> */}
                <Button secondary onPress={()=>this.signup()}>Sign Up</Button>
                {this.renderErrorMessage()}
                <Separator />
                <Button primary onPress={() => {
                    Actions.pop()
                }}>Login</Button>
                

                <Spinner visible={this.state.loading} />
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
    },
    inputWrapper: {
        marginTop: 30
      },
      inputLabel: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600'
      },
})
const strengthLevels = [
    {
      label: 'Weak',
      labelColor: '#fff',
      widthPercent: '33',
      innerBarColor: '#fe6c6c'
    },
    {
      label: 'Weak',
      labelColor: '#fff',
      widthPercent: '33',
      innerBarColor: '#fe6c6c'
    },
    {
      label: 'Fair',
      labelColor: '#fff',
      widthPercent: '67',
      innerBarColor: '#feb466'
    },
    {
      label: 'Fair',
      labelColor: '#fff',
      widthPercent: '67',
      innerBarColor: '#feb466'
    },
    {
      label: 'Strong',
      labelColor: '#fff',
      widthPercent: '100',
      innerBarColor: '#6cfeb5'
    }
];

// Define too short object
const tooShort = {
    enabled: true,
    label: 'Too short',
    labelColor: 'red'
};
console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
