import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';
// const myIcon = <Icon name="rocket" size={30} color="#900" />;
export class VerticalBarButton extends React.Component {
  constructor(props) {
    super(props);

    this.allBtNames = ["bt1", "bt2"];
  }

  render() {
    return (
      <View style={[styles.container, (this.props.position=='left'?styles.isLeft:styles.isRight)]}>
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
const rawStyles = {
    container: {
      margin: 10,
      position: "absolute",    
      top: 0,
    },
    isLeft:{
      left: 0,
    },
    isRight:{
      right: 0,
    },
    button: {
      width: 60,
      height: 60,
      backgroundColor: "#2E2E2E",
      borderRadius: 10,
      padding: 10,
      marginBottom:3,
    },
    textButton: {
      color: "#FFF",
    },
    iconButton: {
      color: "#E3E3E3",
    },
  }
const styles = StyleSheet.create(rawStyles);
