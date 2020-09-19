import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './Card';
import RestaurantView from './RestaurantView';
import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    (async() => {
      let {status}= await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
    getRestaurantData();
  }, [])


  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(location)}</Text>
      {/*<Card/>*/}
      <RestaurantView />
      <StatusBar style="auto" />
    </View>
  );
}

async function getRestaurantData(location) {
  const searchParams = new URLSearchParams();
  searchParams.append('input', 'restaurant');
  searchParams.append('inputtype', 'textquery');
  // searchParams.append('locationbias', 'circle:2000@47.6918452,-122.2226413');

  const res = await fetch('https://maps.googleapis.com/maps/api/place/findplacefromtext/json?' + searchParams.toString());


  console.log(res)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
