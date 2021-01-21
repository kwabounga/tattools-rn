import React from "react";
import { View, Text, TouchableOpacity, StyleSheet,Dimensions } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
// const myIcon = <Icon name="rocket" size={30} color="#900" />;


export class VerticalBarButton extends React.Component {
  constructor(props) {
    super(props);

    this.allBtNames = ["bt1", "bt2"];
  }

  render() {
    return (
      <View
        style={[
          styles.container,
          this.props.position == "left" ? styles.isLeft : styles.isRight,
        ]}>
        {Object.keys(this.props.actions).map((name, id) => {
          console.log(name);
          return (
            <TouchableOpacity
              style={styles.button}
              key={name + id}
              onPress={() => this.props.actions[name]()}>
              {/* <Text style={styles.textButton}>{name}</Text> */}
              <Icon name={name} size={40} color={rawStyles.iconButton.color} />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}
export function NavBar() {
  return (
    <View style={styles.navBar}>
      <View style={[styles.navFlex1, styles.navElements]}>
        <Text>test</Text>
      </View>
      <View style={[styles.navFlex2, styles.navElements]}>
        <Text>test</Text>
      </View>
      <View style={[styles.navFlex1, styles.navElements]}>
        <Text>test</Text>
      </View>
    </View>
  );
}
var width = Dimensions.get('window').width; // full mobile width
var height = Dimensions.get('window').height // full mobile width
const rawStyles = {
  container: {
    marginTop: 40,
    position: "absolute",
    top: 0,
  },
  isLeft: {
    marginLeft: 10,
    left: 0,
  },
  isRight: {
    marginRight: 10,
    right: 0,
  },
  button: {
    width: 60,
    height: 60,
    backgroundColor: "#2E2E2E",
    borderRadius: 10,
    padding: 10,
    marginBottom: 3,
  },
  textButton: {
    color: "#FFF",
  },
  iconButton: {
    color: "#E3E3E3",
  },
  navBar: {
    width:width,
    flexDirection : 'row',
    position: "absolute",
    top: 0,
    justifyContent: 'space-between'
  },
  navElements:{
    // margin:2,
    padding:3,
    backgroundColor: '#696969',
    borderRadius:0
  },
  navFlex1: {
    flex: 1,
    alignItems: 'center'
  },
  navFlex2: {
    flex: 2,
    alignItems: 'center'
  },
};
const styles = StyleSheet.create(rawStyles);
