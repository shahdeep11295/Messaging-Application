import React, { Component } from 'react';
import {
  
  StyleSheet,
  Text,
  ListView,
  TouchableOpacity,
  Image,
  View,ImageBackground
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { fetch } from 'fetch';
import {Icon} from 'react-native-elements';

const data =[{
  "id": 1,
  "first_name": "Uday",
  "mobile": true,
  "missed":false,
  "message": "Hey there! I am using WhatsApp",
  "date": "22-Mar-2016",
  "time": "5:46 PM",
  "image": "https://randomuser.me/api/portraits/men/1.jpg"
}, {
  "id": 2,
  "first_name": "Joseph",
  "mobile": false,
  "message": "Do you smell what the rock is cooking?",
  "date": "22-Feb-2016",
  "time": "09:38 PM",
  "image": "https://randomuser.me/api/portraits/women/37.jpg",
  "missed":false,
}, {
  "id": 3,
  "first_name": "Rick",
  "mobile": true,
  "message": "Hello there it's been a while. Not much",
  "date": "01-Jul-2016",
  "time": "1:33 PM",
  "image": "https://randomuser.me/api/portraits/women/13.jpg",
  "missed":true,
}, {
  "id": 4,
  "first_name": "Maggie",
  "mobile": false,
  "message": "Oh Baby, baby baby... my baby baby",
  "date": "19-Feb-2016",
  "time": "02:59 AM",
  "image": "https://randomuser.me/api/portraits/men/5.jpg",
  "missed":true,
}, {
  "id": 5,
  "first_name": "Michael",
  "mobile": false,
  "message": "Extreme fishing with Robson green",
  "date": "12-Aug-2016",
  "time": "9:17 AM",
  "image": "https://randomuser.me/api/portraits/men/19.jpg",
  "missed":true,
}, {
  "id": 6,
  "first_name": "Jesus",
  "mobile": false,
  "message": "Why do people care about marcos' burial in LBNM",
  "date": "13-Aug-2016",
  "time": "10:37 PM",
  "image": "https://randomuser.me/api/portraits/men/18.jpg",
  "missed":false,
}, {
  "id": 7,
  "first_name": "Daryn",
  "mobile": true,
  "message": "Simply amazing, brilliant and absolutely fantastic",
  "date": "17-Nov-2016",
  "time": "07:32 AM",
  "image": "https://randomuser.me/api/portraits/men/30.jpg",
  "missed":false,
}, {
  "id": 8,
  "first_name": "Fred",
  "mobile": false,
  "message": "Saw you this morning and i wake up shitty.",
  "date": "29-Nov-2016",
  "time": "12:56 AM",
  "image": "https://randomuser.me/api/portraits/women/10.jpg",
  "missed":true,
}, {
  "id": 9,
  "first_name": "James",
  "mobile": false,
  "message": "I will never walk alone",
  "date": "27-Dec-2016",
  "time": "9:29 PM",
  "image": "https://randomuser.me/api/portraits/women/6.jpg",
  "missed":true,
}, {
  "id": 10,
  "first_name": "Matthew",
  "mobile": true,
  "message": "Got it",
  "date": "31-Dec-2016",
  "time": "7:43 PM",
  "image": "https://randomuser.me/api/portraits/men/18.jpg",
  "missed":false,
}]
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})

export default class Call extends Component {

  constructor(props) {
    super(props)
    this.state = {
      peopleDataSource: ds.cloneWithRows(data),
      loaded: true
    }
  }

  render() {
    
    if(this.state.loaded) {
      return (
        <ImageBackground
				style={[ styles.container, styles.backgroundImage ]}
				source={require('../images/white.jpg')}>
        <ListView
         
          dataSource={this.state.peopleDataSource}
          renderRow={(person) => this.renderPersonRow(person)}
          />
          </ImageBackground>
      )
    } else {
      return (<Text onPress={() => {Actions.callbox() }}>Retrieving Calls...</Text>)
    }
  }

  renderPersonRow(person) {
    return (
      <TouchableOpacity onPress={() => Actions.callbox({friend:person})}>
        <View style = {styles.listItemContainer}>
          <View style= {styles.iconContainer}>
            <Image source={{uri:person.image}} style={{ borderRadius:30, width:60, height:60 }} resizeMode='cover' />
          </View>
          <View style = {styles.callerDetailsContainer}>
            <View style={styles.callerDetailsContainerWrap}>
              <View style={styles.nameContainer}>
                <Text>{person.first_name}</Text>
                <View style={styles.dateContainer}>
                  <Icon name={person.missed ? "call-missed" : "call-received"} type='material-community-icons' size={15} color={person.missed ? "#ed788b" : "#075e54"} />
                  <Text style={{ fontWeight:'400', color:'#666', fontSize:12 }}>{person.date} {person.time}</Text>
                </View>
              </View>
              <View style={styles.callIconContainer}>
                <Icon name="phone" type='font-awesome' color='#075e54' size={23} style={{ padding:5 }} />
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  // componentDidMount() {
  //   fetch('https://gist.githubusercontent.com/yllongboy/81de024b02f1b668818066bcafbf3c4c/raw/5a508fd580cc1c3d104a300589e7e88d895fa766/whatsapp_contacts.json')
  //     .then(response => response.json())
  //     .then((data) => {
  //       this.setState({
  //         peopleDataSource: ds.cloneWithRows(data),
  //         loaded: true
  //       })
  //     });
  // }

}

const styles = StyleSheet.create({
  listItemContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth:1, borderColor:'#f7f7f7'
  },
  iconContainer: {
    flex: 1,
    alignItems: "flex-start"
  },
  callerDetailsContainer: {
    flex: 4,
    justifyContent: "center",
    borderBottomColor: "black",
    borderBottomWidth: 0
  },
  callerDetailsContainerWrap: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row"
  },
  nameContainer: {
    alignItems: "flex-start",
    flex: 1
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  callIconContainer: {
    flex: 1,
    alignItems: "flex-end"
  },
  initStyle: {
    borderRadius: 0,
    width: 60,
    height: 60
  }
})
