import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
} from "react-native";
import { cst } from "../../exports/const";
const windowWidth = Dimensions.get("window").width;

export class InfosModels extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[this.props.style, styles.infos]}>
        <Text>Infos sur le modèle selectionné</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  infos: {
    borderRadius: 10,
    // height: windowHeight - StatusBar.currentHeight * 2,
    width: windowWidth / 2 - StatusBar.currentHeight * 3,
    position: "absolute",
    top: StatusBar.currentHeight + cst.ui.sizes.BIG_MARGIN,
    bottom: StatusBar.currentHeight + cst.ui.sizes.BIG_MARGIN,
    right: 0,
    marginRight: 80,
    justifyContent: "flex-start",
    backgroundColor: cst.ui.colors.COLOR_MENU_BACKGROUND+"9D",
  },

  text: {
    color: "#262626",
  },
});
