import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

export class Badge extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.badge}>
        <View style={[styles.leftPart, { backgroundColor: this.props.color }]}>
          <Text style={styles.text}>{this.props.value}</Text>
        </View>
        <View style={[styles.rightPart, { backgroundColor: this.props.color }]}>
          <Text style={styles.text}>x</Text>
        </View>
      </View>
    );
  }
}
Badge.defaultProps = {
  value: "placeHolder",
  color: "#750707",
};

const styles = StyleSheet.create({
  badge: {
    height: 20,
    margin: 5,
    flexDirection: "row",
    // alignSelf: 'flex-start',
  },
  leftPart: {
    paddingRight: 5,
    paddingLeft: 10,
    height: 20,
    alignSelf: "flex-start",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    alignItems: "center",
  },
  rightPart: {
    height: 20,
    paddingRight: 10,
    paddingLeft: 3,
    alignSelf: "flex-start",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: "center",
  },

  text: {
    color: "#262626",
  },
});
