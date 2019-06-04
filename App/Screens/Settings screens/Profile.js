import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ListView,
    ImageBackground, Image, TouchableHighlight, Linking
} from 'react-native';
const firebase = require("firebase");
import { Switch } from 'react-native-switch';
import { Icon } from 'react-native-elements';
import ToggleSwitch from 'toggle-switch-react-native'
var navigator;
// let time= new Time().toLocaleString();
import { Actions } from 'react-native-router-flux';
import { Button } from 'react-native-elements';
import Spinner from 'react-native-loading-spinner-overlay';
import { ImagePicker } from 'expo';
import { Permissions, Notifications } from 'expo'
export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loading: true,
            avatar: null
        };
        this.friendsRef = this.getRef().child('friends');


    }

    getRef() {
        return firebase.database().ref();
    }

    listenForItems(friendsRef) {
        var user = firebase.auth().currentUser;

        friendsRef.on('value', (snap) => {

            // get children as an array
            var items = [];
            var ok = [];
            snap.forEach((child) => {
                if (child.val().email === user.email)
                    items.push({
                        name: child.val().name,

                        uid: child.val().uid,
                        email: child.val().email,
                        avatar: child.val().avatar,

                    });
            });

            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(items),
                loading: false
            });

        });
    }

    componentDidMount() {
        this.listenForItems(this.friendsRef);
        firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                Actions.login()
            }
        });
    }
    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({ avatar: result.uri });
            var updates = {}
            updates['/avatar'] = result.uri
            firebase.database().ref('friends/').child(firebase.auth().currentUser.uid).update(updates)

        }
    };


    renderRow = (rowData) => {
        return (
            <ImageBackground
                style={[styles.container, styles.backgroundImage]}
                source={require('/home/automateio/Message/App/images/white.jpg')}>
                <View style={{ alignItems: 'center', padding: 10, paddingBottom: 20, paddingTop: 20, flexDirection: 'row', borderBottomWidth: 3, borderColor: 'grey' }}>


                    <View style={{ marginLeft: '30%', marginTop: '0%' }}>
                        <Image source={{ uri: rowData.avatar }} style={{ borderRadius: 50, width: 100, height: 100, paddingTop: 15 }}
                            resizeMode="cover" />
                    </View>
                    <TouchableOpacity onPress={this._pickImage}>

                        <View style={{ marginTop: '12%', alignItems: 'baseline' }}>

                            <Icon name="camera" type="font-awesome" color="#128C7E" size={35} style={{ borderRadius: 40, width: 80, height: 80, }} />
                        </View>
                    </TouchableOpacity>


                </View>

                <View style={{ alignItems: 'center', padding: 10, flexDirection: 'row', borderBottomWidth: 1, borderColor: '#C0C0C0', height: 40 }}>

                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                            <Text style={styles.profileName}>{rowData.name}</Text>

                        </View>
                    </View>
                </View>
                <View style={{
                    alignItems: 'center', padding: 10, flexDirection: 'row', justifyContent: 'space-between', width: '100%', height: 80,
                    borderBottomWidth: 1, borderColor: '#C0C0C0', backgroundColor: '#D3D3D3'
                }}>
                    <Text style={styles.N}>This is not your username or pin. This name will be visible to your WhatsApp contacts</Text>
                </View>
                <View style={{
                    alignItems: 'center', padding: 10, flexDirection: 'row', justifyContent: 'space-between', width: '100%', height: 40,
                    borderBottomWidth: 1, borderColor: 'white'
                }}>
                    <Text style={styles.Nam}>Email and Status </Text>
                </View>
                <View style={{ alignItems: 'center', padding: 10, flexDirection: 'row', borderBottomWidth: 1, borderColor: '#C0C0C0', height: 70 }}>

                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                            <Text style={styles.profileName}>{rowData.email}</Text>

                        </View>
                    </View>

                </View>
                <View style={{ alignItems: 'center', padding: 10, flexDirection: 'row', borderBottomWidth: 1, borderColor: '#C0C0C0', height: 70 }}>

                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                            <Text style={styles.profileName}>Hey there !</Text>

                        </View>


                    </View>
                </View>
            </ImageBackground>

        )
    }
    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow} />

            </View>)
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        marginRight: 0,
        marginLeft: 0
    },
    profileName: {
        marginLeft: 13,
        fontSize: 16,
        fontWeight: 'normal',
        width: '100%',
        color: 'black'
    },
    N: {
        marginLeft: 5,
        fontSize: 14,
        fontWeight: 'normal',
        width: '100%',
        paddingLeft: 5,
        color: "#808080"

    },
    Nam: {
        marginLeft: 5,
        marginRight: 13,
        paddingTop: 8,
        paddingBottom: 0,
        color: '#128C7E',
        fontSize: 13,
        fontWeight: 'bold',
        width: '100%',
        paddingLeft: 5,
        paddingRight: 5
    },

})