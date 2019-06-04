import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,Image,ImageBackground
} from 'react-native';
import {Icon} from 'react-native-elements';
import  ParallaxScrollView  from 'react-native-parallax-scroll-view';
import {Actions} from 'react-native-router-flux';

const tag=(<Image source={require('../images/white.jpg')}  />)
export default class ProfileView extends Component {
    constructor(props) {
        super(props);
        this.friend=this.props.friend
       
      }
    render()
    {
        return(
  <ParallaxScrollView
  parallaxHeaderHeight={400}
  navBarTitle={this.friend.name}
  navBarTitleColor='black'
  navBarColor='white'
    backgroundSource={{ uri: tag }}
    renderBackground={() => (
        <ImageBackground 
                        source={{uri:this.friend.avatar}}
                        style={{width: '100%', height: 400}}
                    />
                )}
                renderFixedHeader={()=>(
                  <View>
                    <TouchableOpacity style={styles.header} onPress={() => Actions.pop()}>
                      <Icon
                        name="arrow-back" color="black" size={23}
                        style={{ paddingLeft: 10 }}
                      />
                    </TouchableOpacity>
                    <Text style={styles.title}>
                  {this.friend.name}
                    </Text>
                  </View>
                )}
                renderStickyHeader={()=>(
      <View>
        <TouchableOpacity style={styles.header} onPress={() => Actions.pop()}>
          <Icon
            name="arrow-back" color="black" size={23}
            style={{ paddingLeft: 10 }}
          />
        </TouchableOpacity>
        <Text style={styles.tit}>
      {this.friend.name}
        </Text>
      </View>
    )}
    scrollableViewStyle={{ backgroundColor: '#ece5dd' }}
  >
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.text}>Mute</Text>
      </View>
      <View style={styles.row} >

        <Text style={styles.text}>Custom notifications</Text>
      </View>
      <View style={styles.row}>
        <View style={{paddingLeft:0 }} >
          <Text style={styles.text}>Encryption</Text>
          <View style={{ flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',}}>
          <Text style={styles.subText}>Messages you send to this
          chat and calls are secured with end to end Encryption. Tap to verify</Text>
          <Icon name="lock" color="#075e54" size={23} style={{ padding: 5, }} />
          </View>
          </View>
          {/* <View style={{ flexDirection: 'row',}}>
          <Icon name="lock" color="#075e54" size={15} style={{ padding: 5, }} />
          </View> */}
        
        {/* <Icon name="lock" color="#075e54" size={23} style={{ padding: 5 }} /> */}

      </View>
    </View>
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.green}>Status and Phone</Text>
        <Text style={styles.text}>Hey there! I'm using WhatsApp</Text>
        <Text style={styles.subText}>January 5</Text>
      </View>
      <View style={styles.number}>
        <View style={{ paddingHorizontal: 5 }}>
          <Text style={styles.text}>+00 9874563212</Text>
          <Text style={styles.subText}>Mobile</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent:'space-between' }}>
          <Icon name="chat" color="#075e54" size={23} style={{ padding: 5 }} />
          <Icon name="call" color="#075e54" size={23} style={{ padding: 5 }} />
          <Icon name="videocam" color="#075e54" size={23} style={{ padding: 5 }} />
        </View>
      </View>
    </View>
  </ParallaxScrollView>

  );}}



const styles = StyleSheet.create({
  header: {
    height: 65,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
    marginTop: 270,
    padding: 20,
  },
  tit: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
   
    padding: 20,
  },
  card: {
    marginTop: 10,
  },
  row: {
    height: 50,
    padding: 10,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#f5f5f5',
    backgroundColor: '#fff',
  },
  encrypt: {
    height: 50,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
   
    borderBottomWidth: 1,
    borderColor: '#f5f5f5',
    backgroundColor: '#fff',
  },
  number: {
    height: 50,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#f5f5f5',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 15,
    color: '#333',
    fontWeight: 'bold',
    width:"100%"
  },
  subText: {
    fontSize: 12,
    color: '#555',
    width:'80%'
  },
  green: {
    color: '#075e54',
    fontSize: 10,
  },
});
