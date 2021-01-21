import React from "react";
import { VerticalBarButton, NavBar } from "./components/ui/Ui";
import { BottomSheet } from "./components/ui/BottomSheet";
import { StyleSheet, Image, Text, View, StatusBar, TouchableOpacity } from "react-native";
import { SceneComp1, action } from "./components/SceneComp1";
import { LoremIpsum } from "./exports/common";
// import SceneComp2 from './components/SceneComp2';
import SceneComp3 from "./components/SceneComp3";

import allModels from "./exports/3d/models";

console.log(allModels['knife'].thumb);
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SceneComp1 name="Tattools project" />
        {/* <SceneComp2 name='PBR Material/Import textures' /> */}
        {/* <SceneComp3 name='Import 3d Object' /> */}
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
        <BottomSheet
          height={StatusBar.currentHeight||20}
          backgroundColor={"#696969"}>
            <View style={{alignContent:"center", flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
            {Object.keys(allModels).map((model,index)=>{
                console.log(allModels[model].thumb);
                return (
                  <TouchableOpacity
                    key={index}
                    style={{borderWidth:3, borderColor:"#a9a9a9", margin:5, width: 80, height: 80, backgroundColor: "aliceblue"}}
                    onPress={()=>{
                      alert(`touch ${model}!`);
                    }}>
                    <Image source={allModels[model].thumb} style={{width: 74, height: 74}}></Image>
                  </TouchableOpacity>
                )
            })}
            </View>
          <View style={{alignContent:"center", flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
            <View style={{margin:5, width: 80, height: 80, backgroundColor: "aliceblue"}}/>
            <View style={{margin:5, width: 80, height: 80, backgroundColor: "antiquewhite"}}/>
            <View style={{margin:5, width: 80, height: 80, backgroundColor: "aqua"}}/>
            <View style={{margin:5, width: 80, height: 80, backgroundColor: "aquamarine"}}/>
            <View style={{margin:5, width: 80, height: 80, backgroundColor: "azure"}}/>
            <View style={{margin:5, width: 80, height: 80, backgroundColor: "beige"}}/>
            <View style={{margin:5, width: 80, height: 80, backgroundColor: "bisque"}}/>
            <View style={{margin:5, width: 80, height: 80, backgroundColor: "black"}}/>
            <View style={{margin:5, width: 80, height: 80, backgroundColor: "blanchedalmond"}}/>
            <View style={{margin:5, width: 80, height: 80, backgroundColor: "blue"}}/>
            <View style={{margin:5, width: 80, height: 80, backgroundColor: "blueviolet"}}/>
            <View style={{margin:5, width: 80, height: 80, backgroundColor: "brown"}}/>
            <View style={{margin:5, width: 80, height: 80, backgroundColor: "burlywood"}}/>
            <View style={{margin:5, width: 80, height: 80, backgroundColor: "cadetblue"}}/>
          </View>
        </BottomSheet>
      </View>
    );
  }
}
import { objKeysFromArray } from "./exports/tools";
import fontAwesome from "./node_modules/react-native-vector-icons/glyphmaps/FontAwesome.json";
const fontKeys = objKeysFromArray(fontAwesome);
/* names of buttons ref icons name */
const buttonsLeftActions = {
  [fontKeys.download]: () => alert("click test"),
  [fontKeys.image]: () => alert("click image"),
  [fontKeys.save]: () => alert("click save"),
  [fontKeys["paint-brush"]]: () => alert("click paint-brush"),
};

const buttonsRightActions = {
  [fontKeys.trash]: () => {
    alert("click test");
    action();
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
