import React from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  StatusBar,
  Keyboard,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { TattoolsTextInput } from "../customs/TattoolsTextInput";
const windowHeight = Dimensions.get("window").height;

import { getRandomColor } from "../../exports/tools";
import { cst } from "../../exports/const";
import { local } from "../../exports/texts";
const localText = local();

import { Badge } from "../ui/Badge";
export class FileType extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[this.props.style, styles.container]}>
        <View style={styles.sectionContainer}>
          <Text style={styles.textTitles}>{localText.topMenu.rightTitle}</Text>
          <ScrollView
            style={[
              styles.section,
              { backgroundColor: cst.ui.colors.COLOR_SECONDARY },
            ]}
            keyboardShouldPersistTaps={"never"}
            onMomentumScrollBegin={() => {
              Keyboard.dismiss();
            }}>
            
            {[...Array(30)].map((x, i) => (
              <TattoolsTextInput
                key={i}
                placeHolder={localText.placeHolders.fileTitle}
              />
            ))}
          </ScrollView>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.textTitles}>{localText.topMenu.leftTitle}</Text>
          <ScrollView
            style={[
              styles.section,
              { backgroundColor: cst.ui.colors.COLOR_SECONDARY_ALT, flexDirection:"row"  },
            ]}>
                {["cube","skull","knife","globe","teapot"].map((val, i) =>
                <Badge key={i} value={val} color={getRandomColor()}/>
              )}
                
            </ScrollView>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    backgroundColor: getRandomColor(),
    //   flex: 1,
    padding: 0,
    flexDirection: "row",
    alignContent: "stretch",
    height: windowHeight - ((StatusBar.currentHeight || 20) + 90),
  },
  sectionContainer: { flex: 1, backgroundColor: cst.ui.colors.COLOR_APP },
  textTitles: {
    height: StatusBar.currentHeight || 20,
    color: cst.ui.colors.COLOR_HIGHLIGHT,
    textAlign: "center",
  },
  section: {
    // backgroundColor: "#D91F1F",
    flex: 1,
    alignSelf: "stretch",
  },
});
