import React from "react";
import { VerticalBarButton,NavBar } from "./components/ui/Ui";
import {BottomSheet} from './components/ui/BottomSheet';
import { StyleSheet, ScrollView, Text, View } from "react-native";
import { SceneComp1, action } from "./components/SceneComp1";
import { LoremIpsum } from './commons/common';
// import SceneComp2 from './components/SceneComp2';
import SceneComp3 from './components/SceneComp3';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SceneComp1 name="Tattools project" />
         {/* <SceneComp2 name='PBR Material/Import textures' /> */}
         {/* <SceneComp3 name='Import 3d Object' /> */}
         {/* <NavBar tyle={styles.navBar}></NavBar> */}
        <VerticalBarButton
          style={styles.buttonsBar}
          position="right"
          actions={buttonsRightActions}
        />
        <VerticalBarButton
          style={styles.buttonsBar}
          position="left"
          actions={buttonsLeftActions}
        />
        <BottomSheet>
          <LoremIpsum/>
          <LoremIpsum/>
          <LoremIpsum/>
          <LoremIpsum/>
        </BottomSheet>
        {/* <Text>Comming soon...</Text>   */}
      </View>
    );
  }
}
import {objKeysFromArray} from './commons/tools'
import fontAwesome from './node_modules/react-native-vector-icons/glyphmaps/FontAwesome.json';
const fontKeys = objKeysFromArray(fontAwesome);
/* names of buttons ref icons name */
const buttonsLeftActions = {
  [fontKeys.download]: () => alert("click test"),
  [fontKeys.image]: () => alert("click image"),
  [fontKeys.save]: () => alert("click save"),
  [fontKeys['paint-brush']]: () => alert("click paint-brush"),
};


const buttonsRightActions = {
  [fontKeys.trash]: () => {
    alert("click test");
    action()
  },
  [fontKeys.cube]: () => alert("click test2"),
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3C3C3C",
    flex: 1,
    padding: 0,
  },
  navBar: {
    zIndex: 10,
  },
  buttonsBar: {
    zIndex: 5,
  },
});
