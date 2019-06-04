import React, { Component } from 'react';
import {
    View,
    Text, Image,
    StyleSheet, TouchableOpacity, ImageBackground, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, BackHandler
} from 'react-native';

import { navigation } from 'react-navigation'
import { GiftedChat, SystemMessage, Send, InputToolbar, Bubble } from 'react-native-gifted-chat';
const firebase = require("firebase");

import { Header, Icon } from 'react-native-elements'
import { Colors, Styles } from '../Shared'
import { Actions } from 'react-native-router-flux'
import TextField from '../Components/TextField';
import Button from '../Components/Button';
import Separator from '../Components/Separator';
const Dismiss = ({ children }) => {
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>{children}</TouchableWithoutFeedback>
};

export default class Chat extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Chat',
        headerTitleStyle: {
            fontWeight: 'bold',
            width: '100%'
        },



    })


    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            recent: ''
        };

        this.user = firebase.auth().currentUser
        this.friend = this.props.friend
        this.backPressed = this.backPressed.bind(this)


        this.chatRef = this.getRef().child('chat/' + this.generateChatId());
        this.chatRefData = this.chatRef.orderByChild('order')
        this.onSend = this.onSend.bind(this);
        this.renderSend = this.renderSend.bind(this);
    }

    generateChatId() {
        if (this.user.uid > this.friend.uid)
            return `${this.user.uid}-${this.friend.uid}`
        else
            return `${this.friend.uid}-${this.user.uid}`
    }



    getRef() {
        return firebase.database().ref();
    }

    listenForItems(chatRef) {
        let fuid = this.friend.uid
        var chats = [];
        //  firebase.database().ref('chat/'+ this.generateChatId()).orderByChild("order").limitToFirst(1).on('child_added', function(Snapshot) { 

        //       var updates = {}

        //         //  chats.push({text:Snapshot.val().text})
        //         //  let text =chats[chats.length-1]
        //         //  console.log(text)
        //     //      updates['/text']=chats[chats.length-1]
        //       firebase.database().ref('recentmessages/').child(firebase.auth().currentUser.uid).child(fuid).set(
        //           {
        //               Text:Snapshot.val().text
        //           }
        //       )

        //  })


        chatRef.on('value', (snap) => {

            // get children as an array
            var items = [];
            snap.forEach((child) => {
                const avatar = (child.val().uid == this.user.uid ? this.user.avatar : this.friend.avatar)
                const name = child.val().uid == this.user.uid ? this.user.name : this.friend.name
                items.push({
                    _id: child.val().createdAt,
                    text: child.val().text,
                    createdAt: new Date(child.val().createdAt),
                    user: {
                        _id: child.val().uid,
                        avatar: avatar
                    }
                });
            });

            this.setState({
                loading: false,
                messages: items
            })


        });
    }

    componentDidMount() {
        this.listenForItems(this.chatRefData);
        BackHandler.addEventListener('hardwareBackPress', this.backPressed);

    }


    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
    }

    backPressed = async () => {

        Actions.pop();

        return true;
    }

    onSend(messages = [], ty = []) {





        // this.setState({
        //     messages: GiftedChat.append(this.state.messages, messages),
        // });
        messages.forEach(message => {
            var now = new Date().getTime()

            this.chatRef.push({
                _id: now,
                text: message.text,
                createdAt: now,
                uid: this.user.uid,
                order: -1 * now
            })
            // firebase.database().ref('recentchats/').child(firebase.auth().currentUser.uid).child(this.friend.ui

        })

        let Userr = firebase.auth().currentUser
        let fuid = this.friend.uid

        var updates = {}

        firebase.database().ref('friends/').child(fuid).once("value", (snapShot) => {
            firebase.database().ref('friends/').child(Userr.uid).once("value", (snap) => {

                let fname = snap.val().name
                let favatar = snap.val().avatar
                let name = snapShot.val().name
                let avatar = snapShot.val().avatar
                firebase.database().ref('chat/' + this.generateChatId()).orderByChild("order").limitToFirst(1).on('child_added', function (Snapshot) {
                    let text = Snapshot.val().text
                    let today = new Date();
                    let date = today.getDate() + "/" + parseInt(today.getMonth() + 1) + "/" + today.getFullYear();
                    let now = new Date().getTime()
                    console.log(now)

                    firebase.database().ref('recentchats/').child(Userr.uid).child(fuid).set({
                        name: name,
                        avatar: avatar,
                        uid: fuid,
                        text: text,
                        date: date,
                        order: -1 * now


                        //   text:this.state.messages.text

                    })
                    if (fuid !== Userr.uid) {
                        firebase.database().ref('recentchats/').child(fuid).child(Userr.uid).set({
                            name: fname,
                            avatar: favatar,
                            uid: Userr.uid,
                            text: text,
                            date: date,
                            order: -1 * now

                            //   text:this.state.messages.text

                        })
                    }

                })

            });

        })
        // firebase.database().ref('friends/').child(Userr.uid).once("value", (snapShot)=> {
        //     let name=snapShot.val().name
        //     let avatar=snapShot.val().avatar
        //     firebase.database().ref('chat/'+ this.generateChatId()).orderByChild("order").limitToFirst(1).on('child_added', function(Snapshot) {
        //         let text=Snapshot.val().text

        //       firebase.database().ref('recentchats/').child(fuid).child(Userr.uid).set({
        //           name:name,
        //           avatar:avatar,
        //           uid:fuid,
        //           text:text,


        //         //   text:this.state.messages.text

        //       })

        //  });

        // })
        // // firebase.database().ref().child('recent/'+Userr.uid).set({
        //     [this.state.ty]:this.friend.uid


        // })
    }
    renderBubble(props) {

        // if current Message has not been sent, return other Bubble with backgroundColor red for example
        return (
            <Bubble
                wrapperStyle={{
                    right: {},


                }}
                {...props}
            />
        );


    }

    renderSend(props) {
        return (
            <Send
                {...props}
            >
                <View style={{ marginRight: 10, marginBottom: 5 }}>
                    {/* <Image source={require('../images/geasy.jpg')} resizeMode={'center'}/> */}
                    <Icon name="send" type='material-icons' color='#075E54' size={30} />
                </View>
            </Send>
        );
    }
    renderInputToolbar(props) {
        //Add the extra styles via containerStyle
        return <InputToolbar {...props} containerStyle={{ borderTopWidth: 0, borderTopColor: '#333', borderRadius: 30, }} />
    }
    render() {
        return (


            <View style={{ flex: 1 }}>


                <ImageBackground
                    style={[styles.container, styles.backgroundImage]}
                    source={require('../images/background.jpg')}>
                    {/* <Dismiss> */}
                    <Header
                        placement="left"
                        leftComponent={<Icon
                            name='arrow-back'
                            type='material-icons'
                            color='White'
                            onPress={() => Actions.pop()}
                            iconStyle={{ paddingRight: 3 }}
                        />
                        }

                        centerComponent={
                            <TouchableOpacity onPress={() => Actions.profileview({ friend: this.friend })}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
                                    <Image source={{ uri: this.friend.avatar }} style={{ borderRadius: 20, width: 40, height: 40, }}
                                        resizeMode="cover" />
                                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 19, paddingLeft: 5, width: '75%', }}>{this.friend.name}</Text>
                                </View>
                            </TouchableOpacity>
                        }
                        //    rightComponent={<View style={{ flexDirection: 'row', alignItems: 'center' ,justifyContent:'space-between' }}>
                        //    <TouchableOpacity>
                        //    <Icon name="video-camera" type="font-awesome" color="#fff" size={20} style={{ padding: 5, paddingRight: 15 }} />
                        //  </TouchableOpacity>

                        //    <TouchableOpacity>
                        //    <Icon name="call" color="#fff" size={23} style={{ padding: 5, paddingRight: 100 }} />
                        //  </TouchableOpacity>
                        //    <TouchableOpacity>
                        //    <Icon name="attach-file" color="#fff" size={23} style={{ padding: 15 }} />
                        //  </TouchableOpacity>



                        //  </View>} 
                        backgroundColor='#075E54'
                        containerStyle={{
                            backgroundColor: '#075E54',
                            justifyContent: 'space-around',


                        }}

                    />
                    <GiftedChat
                        renderInputToolbar={this.renderInputToolbar.bind(this)} // renderInputToolbar={this.renderInputToolbar.bind(this)} 
                        renderSend={this.renderSend.bind(this)}
                        renderBubble={this.renderBubble}
                        messages={this.state.messages}
                        onSend={this.onSend.bind(this)}
                        user={{
                            _id: this.user.uid,
                        }}
                    />
                    {/* </Dismiss>  */}
                    <KeyboardAvoidingView behavior={'padding'} keyboardVerticalOffset={0} />
                </ImageBackground>
            </View>



        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        // marginRight: 10,
        // marginLeft: 10,
        backgroundColor: 'transparent'
    },
    form: {
        flex: 1,
        justifyContent: 'space-between',
    },
})
console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];