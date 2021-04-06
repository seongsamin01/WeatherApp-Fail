import React from 'react';
import { Alert } from 'react-native';
import Loading from "./Loading";
import * as Location from 'expo-location';

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const { coords: { latitude, longitude }} = await Location.getCurrentPositionAsync();
      // Send to API and get weather!
      this.setState({ isLoading: false });
    } catch (error) {
      Alert.alert("사용자의 위치를 찾을 수 없습니다", "유감입니다 😥");
    }
  };
  componentDidMount(){
    this.getLocation();
  }
  
  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> :  null;
  }
}

