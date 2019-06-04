import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Expo, { Audio } from 'expo';

async function alertIfRemoteNotificationsDisabledAsync() {
  const { Permissions } = Expo;
  const { status } = await Permissions.getAsync(Permissions.AUDIO_RECORDING);
  if (status !== 'granted') {
    alert('Hey! Allow audio recording so I can eavesdrop on you.');
  }
}

 export default class Task extends React.Component {
  constructor(props){
    super(props);
    this.recording = null;
    this.state = {
      isRecording: false
    };
  }

  componentDidMount() {
    Audio.setIsEnabledAsync(true);
    Audio.setAudioModeAsync({
      allowsRecordingIOS: true,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentLockedModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
    });
    alertIfRemoteNotificationsDisabledAsync();
  }

  async recordAudio() {
    if (this.recording !== null) {
      this.recording.setCallback(null);
      this.recording = null;
    }

    const recording = new Audio.Recording();
    this.recording = recording;
    await this.recording.prepareToRecordAsync();

    this.recording.setCallback(() => console.log('Done Recording!'));
    await this.recording.startAsync();
    // You are now recording!
    this.setState({
      isRecording: true
    })
  }

  async stopRecording() {
    await this.recording.stopAndUnloadAsync();
    console.log(this.recording.getURI());
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.recordAudio.bind(this)}
          title='Listen'
          accessibilityLabel="Listen to me"
          />
        <Button
          onPress={this.stopRecording.bind(this)}
          title='Stop Listening'
          accessibilityLabel="Listen to me"
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});