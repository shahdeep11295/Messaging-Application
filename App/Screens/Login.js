import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,ImageBackground,ScrollView,TouchableOpacity,
} from 'react-native';
import Expo, { Constants } from 'expo';
const firebase = require("firebase");
import Spinner from 'react-native-loading-spinner-overlay';

import { Colors, Styles } from '../Shared'

import TextField from '../Components/TextField';
import Button from '../Components/Button';
import Separator from '../Components/Separator';
import {Actions} from 'react-native-router-flux'
import {Permissions,Notifications} from 'expo'

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errorMessage: null,
            token:'',
            responseJSON: null,
            name:null,
            avatar:null
        }
        console.ignoredYellowBox = [
            'Setting a timer'
            ];

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
               Actions.task() //home
                this.setState({
                    loading: false
                })
            }
        });
    }
//  componentDidMount(){
//     if (user) {
//         this.getRef().child('friends').child(user.uid).set({
//             email: user.email,
//             uid: user.uid,
//             name: this.state.name,
//             avatar:(this.state.avatar)
//         })
//         Actions.home()
//         this.setState({
//             loading: false
//         })
//     }
//  }
    callGraph = async token => {
        /// Look at the fields... I don't have an `about` on my profile but everything else should get returned.
        let response = fetch(
          `https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,about,picture`).
          then(res=>
              res.json()).then(resp =>{
                 console.log(resp)
                  this.setState({
                      name:resp.name
                    
                                 
                }) 
              }).catch((error)=>{console.log(error)});
          
       
       
    //     const responseJSON = JSON.stringify(await response.json());
    //   console.log(responseJSON)
         
    //     this.setState({ responseJSON });
      };
      log = async () => {
        const id='302401847271344'
        const {
          type,
          token,
        } = await Expo.Facebook.logInWithReadPermissionsAsync(id, {
          permissions: ['public_profile', 'email', 'user_friends'],
        });
    
        if (type === 'success') {
          this.callGraph(token);
        //   console.log(this.state.responseJSON)
       
          this.firebaseLogin(token);
          console.log(this.state.name)
        }
      };
      firebaseLogin = token => {
        firebase.auth().signInWithCredential(token).catch((error) => {
            // Handle Errors here.
            console.warn("Add Error for login", error)
          });
      };
    
      renderButton = () => (
        <TouchableOpacity onPress={() => this.log()}>
          <View
            style={{
              width: '50%',
              alignSelf: 'center',
              borderRadius: 4,
              padding: 24,
              backgroundColor: '#3B5998',
            }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>
              Login to Facebook
            </Text>
          </View>
        </TouchableOpacity>
      );
      renderValue = value => (
        <Text key={value} style={styles.paragraph}>{value}</Text>
        
      );

   
    // static navigationOptions = ({ navigation }) => ({
    //     title: 'Login',
    //     headerTitleStyle: {
    //         fontWeight: 'bold',
    //         width:"100%"
    //       },

        
    // })
   

    login = () => {
        this.setState({
            errorMessage: null,
            loading: true 
        })
        const {email, password} = this.state;
        firebase.auth()
            .signInWithEmailAndPassword(email, password).then(user => {this.registerForPushNotifications(user)})
            .catch((error) => {
                
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                this.setState({
                    errorMessage,
                    loading: false
                })
            });
            this.setState({ email:'',password:''
        })
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
        
        
        //   firebase.database().ref("friends/");
        let userr =firebase.auth().currentUser.uid

        
         var updates = {}
         updates['/expoToken']=this.state.token
         firebase.database().ref('friends/'+userr).update(updates)
        
        



    }

    renderErrorMessage = () => {
        if(this.state.errorMessage)
            return <Text style={styles.error}>{this.state.errorMessage}</Text>
    }

    render() {
        
        return (
            <ImageBackground
				style={[ styles.container, styles.backgroundImage ]}
				source={require('../images/white.jpg')}>
            <View style={styles.container}>
                <TextField placeholder="Email"
               ref={input => { this.textInput = input }}
                    value={this.state.email}
                    onChangeText={email => this.setState({ email }) } />
                <TextField placeholder="Password"
                 secureTextEntry
                    value={this.state.password}
                    onChangeText={password => this.setState({ password }) } />
                <Button primary onPress={this.login}>Login</Button>
                {this.renderErrorMessage()}
                <Separator />
                <Button secondary onPress={() => {
                    Actions.signup()
                } }>Sign Up</Button>
                <Button secondary onPress={() => {
                   Actions.forgetpassword()
                } }>Forget Password</Button>

                <Spinner visible={this.state.loading} />
                
            </View>
            {/* <ScrollView style={styles.container}>
            
        
        {this.renderButton()}
      </ScrollView> */}
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        marginRight: 0,
        marginLeft: 0
    },
    error: {
        margin: 8,
        marginBottom: 0,
        color: 'red',
        textAlign: 'center'
    },
    // container: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     paddingTop: Constants.statusBarHeight,
    //     backgroundColor: '#ecf0f1',
    //   },
      paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
      },
})
