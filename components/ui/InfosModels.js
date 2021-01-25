import React from "react";
import {
  StyleSheet,
  Text,
  Switch,
  View,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { cst } from "../../exports/const";
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export class InfosModels extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[this.props.style, styles.infos]}>
        <Text>blalla</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  infos: {
    borderRadius: 10,
    // height: windowHeight - StatusBar.currentHeight * 2,
    width: windowWidth / 2 - StatusBar.currentHeight * 2,
    position: "absolute",
    top: StatusBar.currentHeight,
    bottom: StatusBar.currentHeight,
    right: 0,
    marginRight: 80,
    justifyContent: "flex-start",
    backgroundColor: cst.ui.colors.COLOR_MENU_BACKGROUND,
  },

  text: {
    color: "#262626",
  },
});
