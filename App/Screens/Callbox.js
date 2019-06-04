import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  ImageBackground,
  ListView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  View,Hea,Image
} from 'react-native';

import {Icon,Header} from 'react-native-elements';
import {navigation,withNavigation} from 'react-navigation'
import { Actions } from 'react-native-router-flux';
 export default class Callbox extends Component {

  constructor(props) {
    super(props);
    this.friend=this.props.friend
   
  }
  // static navigationOptions =({ navigation }) => ({
  //   headerLeft: ( <TouchableOpacity onPress={() => navigation.goBack()}>
  //   <Icon name="angle-down" type="font-awesome" color="#fff" size={20} style={{  paddingLeft: 15 }}/>
  //   </TouchableOpacity>)
    
    
  // })

  render() {
    return (
      // <View style={{ flex: 1 }}>
     
      //   <View style={styles.mainContainer}>
      //     <View style={styles.headerContainer}>
      //       <View style={styles.leftHeaderContainer}>
      //         {/* <View style={styles.whatsappVCallWrapper}>
      //           <Icon name="phone" type='font-awesome' color='#80D9CF' size={15} />
      //           <Text style={styles.callingText}>WHATSAPP VOICE CALL</Text>
      //         </View> */}
      //         <Text style={styles.nameText}>{ this.friend.first_name}</Text>
      //         <Text style={styles.nameTet}>...CALLING</Text>
      //       </View>
      //       <Text style={[styles.callingText, {marginTop: 5}]}>...CALLING</Text>
      //     </View>
      //     <View style={styles.contentContainer}>
      //       <ImageBackground source={{uri:this.friend.image}} style={{flex: 1, backgroundColor: 'gray'}}>
      //         <View style={{flex: 1}}/>
      //         <TouchableOpacity onPress={() => Actions.pop()}>
      //         <View style={styles.callIconContainer}>
      //           <Icon name="call-end" type='material-icons' color='white' size={35} style={styles.icon} resizeMode='contain' />
      //         </View>
      //         </TouchableOpacity>
      //       </ImageBackground>
      //     </View>
      //     <View style={styles.footerContainer}>
      //       <TouchableOpacity>
      //         <Icon name="volume-up" type='font-awesome' color='white' size={25} />
      //       </TouchableOpacity>
      //       {/* <TouchableOpacity onPress={() => this.props.navigator.push({id:'chatbox', image:this.props.image, name:this.props.name})}>
      //         <Icon name="chat-bubble" color='white' size={25} resizeMode='contain' />
      //       </TouchableOpacity> */}
      //       <TouchableOpacity>
      //         <Icon name="mic-off" type='feather' color='white' size={25} resizeMode='contain' />
      //       </TouchableOpacity>
      //     </View>

      //   </View>
      // </View>
      <View style={{ flex: 1 }}>
      <View style={styles.topBar}>
        <View style={{ flexDirection: 'row' }}>
          <Icon name="whatshot" color="#c3c3c3" size={14} />
          <Text style={styles.subText}>WHATSAPP CALL</Text>
        </View>
        <Text style={styles.title}>{this.friend.first_name}</Text>
        <Text style={styles.subText}>CALLING</Text>
      </View>
      <ImageBackground source={{ uri: this.friend.image}} style={styles.image}>
        <TouchableOpacity onPress={() => Actions.pop()}>
          <View style={styles.icon}>
            <Icon name="call-end" color="#c3c3c3" size={30} /></View>
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.bottomBar}>
        <Icon name="volume-up" color="#c3c3c3" size={30} />
        <Icon name="chat" color="#c3c3c3" size={30} />
        <Icon name="mic-off" color="#c3c3c3" size={30} />
      </View>
    </View>


    )
  }

}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#075e54",
    alignItems:"center",
    paddingTop: 5,
    paddingRight: 5
  },
  leftHeaderContainer: {
    alignItems: "flex-start",
    flexDirection: "column",
    justifyContent:'space-between'
  },
  rightHeaderContainer: {
    alignItems: "flex-end",
    flexDirection: "row",
    
  },
  contentContainer: {
    flex: 6,
    justifyContent:"center",
 
  },
  whatsappVCallWrapper: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 20,
    paddingLeft: 15,
    paddingBottom:15
  },
  nameText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    paddingLeft: "55%",
    width:"100%",
    paddingBottom:5 
    // paddingBottom:45
  },
  callingText: {
    color: '#80D9CF',
    fontSize: 12,
    fontWeight: 'normal',
    alignSelf: 'flex-start',
    paddingLeft: "45%",
    // paddingBottom:15
  },
  footerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#075e54",
    borderColor: "black",
    alignItems:"center",
    paddingRight: 50,
    paddingLeft: 50
  },
  logoText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    alignItems: "flex-start",
    marginLeft: 10
  },
  icon: {
    backgroundColor: "rgba(0,0,0,0)",
  },
  callIconContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    marginBottom: 20,
    width: 60,
    backgroundColor: '#FF032D',
    height: 60,
    alignSelf: "center"
  },
  nameTet: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'normal',
    alignSelf: 'flex-start',
    paddingLeft: "50%",
    width:"100%"
    // paddingBottom:45
  },
  topBar: {
    backgroundColor: '#075e54',
    height: 140,
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    
    
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#e20e30',
    marginTop: 250 },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#075e54',
    flex: 1,
  },
  title: {
    color: '#f0efef',
    fontSize: 36,
  },
  subText: {
    color: '#c8c8c8',
    fontSize: 14,
  },
})
