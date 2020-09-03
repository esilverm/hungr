import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = () => {
  return(
    <View style={styles.Card}>
      <Text h1> 
        Chipotle 
      </Text>
      <Text style={styles.Text}>
        134 E 8th Street
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Card: {
    width: 300,
    height: 100,
    backgroundColor: "lightblue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  Text: {
  }
})

export default Card;
