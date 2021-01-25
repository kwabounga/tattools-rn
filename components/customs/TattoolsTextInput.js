import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
  StyleSheet,
} from "react-native";
import { cst } from "../../exports/const";
export const TattoolsTextInput = ({ placeHolder, action }) => {
  const [value, onChangeText] = React.useState(placeHolder);

  return (
    <TextInput
      style={styles.textInput}
      onChangeText={(text) => onChangeText(text)}
      value={value}
      returnKeyType={"done"}
      returnKeyLabel={"done"}
      enablesReturnKeyAutomatically={true}
      onEndEditing={(_) => {
        if (action) action();
        alert("callBack on End editing");
      }}
    />
  );
};
const styles = StyleSheet.create({
  textInput: {
    height: cst.ui.sizes.INPUT_TEXT_HEIGHT,
    borderColor: cst.ui.colors.COLOR_HIGHLIGHT,
    borderWidth: cst.ui.sizes.SMALL_BORDER,
    borderRadius: 5,
    margin:cst.ui.sizes.INPUT_TEXT_MARGIN,
    backgroundColor:cst.ui.colors.COLOR_INPUT
  },
});
