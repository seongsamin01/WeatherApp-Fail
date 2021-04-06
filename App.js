import React from 'react';
import { Alert } from 'react-native';
import Loading from "./Loading";
import * as Location from 'expo-location';
import axios from "axios";

const API_KEY = "99919bb4c713e197195d5c6ace9d21df";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    );
    console.log(data);
  }
  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const { 
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
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

