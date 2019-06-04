import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ListView,
    ImageBackground, Image, TouchableHighlight, BackHandler
} from 'react-native';
const firebase = require("firebase");
import Spinner from 'react-native-loading-spinner-overlay';
import { Permissions, Notifications } from 'expo'

import { Colors, Styles } from '../Shared'
import { NavigationActions, withNavigation } from 'react-navigation'

import TextField from '../Components/TextField';
import Button from '../Components/Button';
import Separator from '../Components/Separator';
import { Time } from 'react-native-gifted-chat';
import ActionButton from 'react-native-action-button';
import { Icon } from 'react-native-elements';

var navigator;
// let time= new Time().toLocaleString();
import { Actions } from 'react-native-router-flux';
import Login from './Login';

export default class FriendsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loading: true,
            recent: [],
        };
        this.friendsRef = this.getRef().child('friends');
        this.backPressed = this.backPressed.bind(this)

        // navigator = this.props.navigator
    }

    getRef() {
        return firebase.database().ref();
    }


    listenForItems(friendsRef) {


        var ok = [];
        var user = firebase.auth().currentUser;



        firebase.database().ref('recentchats/').child(user.uid).orderByChild("order").on("value", (snapshot) => {
            var items = [];
            snapshot.forEach((child) => {
                items.push({
                    name: child.val().name,
                    uid: child.val().uid,
                    avatar: child.val().avatar,
                    text: child.val().text,
                    date: child.val().date



                });
                console.log(child.val().uid)
            })

            // firebase.database().ref('recentmessages/').child(user.uid).on("value", (snap) => {
            //     var item = [];
            //     snap.forEach((children) => {
            //         items.push({
            //                   text:children.val().Text
            //         })

            //     })  

            // })
            //    items[0].push({ text: this.state.recent})



            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(items),
                loading: false
            });
        })














    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
    }

    backPressed = async () => {

        Actions.pop();

        return true;
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.backPressed);
        this.listenForItems();
        firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                Actions.login()
            }

        });
        //   this.registerForPushNotifications();
    }
    //      registerForPushNotifications =async(user)=> {
    //     const { status: existingStatus } = await Permissions.getAsync(
    //       Permissions.NOTIFICATIONS
    //     );
    //     let finalStatus = existingStatus;

    //     // only ask if permissions have not already been determined, because
    //     // iOS won't necessarily prompt the user a second time.
    //     if (existingStatus !== 'granted') {
    //       // Android remote notification permissions are granted during the app
    //       // install, so this will only ask on iOS
    //       const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    //       finalStatus = status;
    //     }

    //     // Stop here if the user did not grant permissions
    //     if (finalStatus !== 'granted') {
    //       return;
    //     }

    //     // Get the token that uniquely identifies this device
    //     let token = await Notifications.getExpoPushTokenAsync();
    //       console.log(token)
    //      var updates = {}
    //      updates['/expoToken']=token
    //      firebase.database().ref('friends').child(user.uid).update(updates)




    // }




    renderRow = (rowData) => {
        //     var user = firebase.auth().currentUser;

        // firebase.database().ref('recentmessages/').child(user.uid).on("value", (snap) => {

        //     snap.forEach(child =>{ 
        //         var mes=[]
        //       mes.push({
        //           text:child.val().Text
        //       })
        //       var thus = Array.from(mes)
        //       this.setState({
        //           recent:thus.text
        //       })
        //       console.log(this.state.recent)
        //     })


        // })  

        return (




            <TouchableOpacity onPress={() => Actions.chat({ friend: rowData })}>


                <View style={{ alignItems: 'center', padding: 10, flexDirection: 'row', borderBottomWidth: 1, borderColor: '#f7f7f7' }}>
                    <TouchableOpacity onPress={() => Actions.profileview({ friend: rowData })}>
                        <Image source={{ uri: rowData.avatar }} style={{ borderRadius: 30, width: 60, height: 60 }}
                            resizeMode="cover" />
                    </TouchableOpacity>
                    {/* <View>
                <View style={{ flexDirection:'row', justifyContent:'space-between', width:'100%' }}>
                <Text style={styles.profileName}>{rowData.name}</Text>
                
            </View>
            
            <View style={{ flexDirection:'row', alignItems:'center' }}>
              <Text style={{ fontWeight:'400', color:'#666', fontSize:12, marginLeft:15 ,width:'100%'}}>{rowData.text}</Text>
            </View>
            
            </View> */}
                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', }}>
                            <Text style={{ marginLeft: 15, fontWeight: '600', width: '40%' }}>{rowData.name}</Text>
                            <Text style={{ color: '#25D366', fontSize: 10, marginLeft: 85 }}>{rowData.date}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontWeight: '400', color: '#333', marginLeft: 15, width: '100%' }}>{rowData.text}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>);

    }

    render() {
        return (
            <ImageBackground
                style={[styles.container, styles.backgroundImage]}
                source={require('../images/white.jpg')}>
                <View style={styles.container}>
                    {/* <View style={styles.topGroup}> */}

                    {/* <TouchableOpacity>
                        <Text style={styles.inviteFriends}>Invite More Freinds</Text>
                    </TouchableOpacity> */}
                    {/* </View> */}
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this.renderRow} />
                    <Spinner visible={this.state.loading} />
                </View>
                <TouchableOpacity style={styles.addButton}
                    underlayColor='#25D366' onPress={() => {
                        Actions.contacts()
                    }}>
                    {/* <Text style={{fontSize: 30, color: 'white'}}>+</Text> */}
                    <Icon name="message" color="#fff" size={25} style={{ padding: 5, paddingRight: 100 }} />

                </TouchableOpacity>
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
    rightButton: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 10,
        padding: 0,
    },
    topGroup: {
        flexDirection: 'row',
        margin: 10
    },
    myFriends: {
        flex: 1,
        color: Colors.grayColor,
        fontSize: 16,
        padding: 5
    },
    inviteFriends: {
        color: Colors.mainColor,
        padding: 5
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
        marginLeft: 6,
        marginBottom: 8,
    },
    profileImage: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginLeft: 6
    },
    profileName: {
        marginLeft: 13,
        fontSize: 16,
        fontWeight: 'bold',
        width: '100%'
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'green',
    },
    addButton: {
        backgroundColor: '#25D366',
        borderColor: '#25D366',
        borderWidth: 1,
        height: 60,
        width: 60,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 20,
        elevation: 5,
        right: 20,
        shadowColor: "#000000",
        shadowOpacity: 1.0,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        }
    }

})

console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];