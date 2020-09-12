import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';

const RestaurantView = () => {
  return (
    <View>
      <View style={styles.Map}>
        <Image source = {require("./assets/map.png")} style={styles.Image}/>
      </View>
      <View style={styles.Text}>
        <View style={styles.Location}>
          <Text style={styles.Name}> 
            Chipotle ★★☆☆☆
          </Text>
          <Text>
            134 E 8th Street {"\n"}
            New York, NY 10003
          </Text>
        </View>
        <Text style={styles.Price}>
          $
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Card: {
    width: 300,
    height: 300,
    backgroundColor: "lightblue",
    display: "flex",
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  Map: {
    width: 300,
    height: 300,
    backgroundColor: "lightblue",
    display: "flex",
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  Text: {
    height: 100,
    width: 300,
    display: "flex",
    flexDirection: "row",
    // alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 20
  },
  Image: {
    width: 300,
    height: "100%",
    maxHeight: 200,
    resizeMode: "contain"
  },
  Location: {
    paddingLeft: 20
  },
  Name: {
    fontSize: 18
  },
  Price: {
    paddingRight: 20,
    paddingTop: 2
  }
})

export default RestaurantView;

