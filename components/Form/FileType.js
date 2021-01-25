import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TextInput,
  Dimensions,
  StyleSheet,
  StatusBar,
  Keyboard,
} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { TattoolsTextInput } from "../customs/TattoolsTextInput";
const windowHeight = Dimensions.get("window").height;

import { getRandomColor } from "../../exports/tools";
import { cst } from "../../exports/const";
import { local } from "../../exports/texts";

import { Badge } from "../ui/Badge";
const localText = local();
// import ImagePicker from 'react-native-image-picker';
export class FileType extends React.Component {
  constructor(props) {
    super(props);
  }
  //   chooseImage = () => {
  //     let options = {
  //       title: 'Select Image',
  //       customButtons: [
  //         { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
  //       ],
  //       storageOptions: {
  //         skipBackup: true,
  //         path: 'images',
  //       },
  //     };
  //     ImagePicker.showImagePicker(options, (response) => {
  //       console.log('Response = ', response);

  //       if (response.didCancel) {
  //         console.log('User cancelled image picker');
  //       } else if (response.error) {
  //         console.log('ImagePicker Error: ', response.error);
  //       } else if (response.customButton) {
  //         console.log('User tapped custom button: ', response.customButton);
  //         alert(response.customButton);
  //       } else {
  //         const source = { uri: response.uri };

  //         // You can also display the image using data:
  //         // const source = { uri: 'data:image/jpeg;base64,' + response.data };
  //         // alert(JSON.stringify(response));s
  //         console.log('response', JSON.stringify(response));
  //         this.setState({
  //           filePath: response,
  //           fileData: response.data,
  //           fileUri: response.uri
  //         });
  //       }
  //     });
  //   }
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
            {/* <TouchableOpacity onPress={this.chooseImage}>Choose</TouchableOpacity> */}
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
