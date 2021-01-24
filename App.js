import React from "react";
import { VerticalBarButton, SquareButtonSwitch } from "./components/ui/Ui";
import { BottomSheet } from "./components/ui/BottomSheet";
import { TopSheet } from "./components/ui/TopSheet";
import { StyleSheet, Image, Switch, View, StatusBar, TouchableOpacity } from "react-native";
import { SceneComp1, action } from "./components/SceneComp1";
import { LoremIpsum } from "./exports/common";
// import SceneComp2 from './components/SceneComp2';
import SceneComp3 from "./components/SceneComp3";

import allModels from "./exports/3d/models";
import SwitchableView from './components/customs/SwitchableView';
console.log(allModels['knife'].thumb);
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <SceneComp1 name="Tattools project" />
        {/* <SceneComp2 name='PBR Material/Import textures' /> */}
        {/* <SceneComp3 name='Import 3d Object' /> */}
        <SquareButtonSwitch 
          onValueChange={value => this.setState({ isHidden: value })}
          value={this.state.isHidden}
          style={{position:"absolute",zIndex:2, bottom:StatusBar.currentHeight,right:10}}
        />
        {/* <Switch
          onValueChange={value => this.setState({ isHidden: value })}
          value={this.state.isHidden}
          style={{position:'absolute',bottom:StatusBar.currentHeight,right:10}}
        /> */}
        <SwitchableView hide={this.state.isHidden} style={StyleSheet.absoluteFillObject}>
        <VerticalBarButton
          style={[styles.buttonsBar,{marginTop:(StatusBar.currentHeight + (Switch.currentHeight*2))}]}
          position="right"
          actions={buttonsRightActions}
        />
        <VerticalBarButton
          style={styles.buttonsBar}
          position="left"
          actions={buttonsLeftActions}
        />
        <TopSheet
            height={StatusBar.currentHeight||20}
            backgroundColor={"#696969"}>
          <LoremIpsum words={200}/>
        </TopSheet>
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
        </SwitchableView>
      </View>
    );
  }
}
import { objKeysFromArray } from "./exports/tools";
import fontAwesome from "./node_modules/react-native-vector-icons/glyphmaps/FontAwesome.json";
const fontKeys = objKeysFromArray(fontAwesome);
/* names of buttons ref icons name */
// const buttonsLeftActions = {
//   [fontKeys.download]: () => alert("click test"),
//   [fontKeys.image]: () => alert("click image"),
//   [fontKeys.save]: () => alert("click save"),
//   [fontKeys["paint-brush"]]: () => alert("click paint-brush"),
// };
const buttonsLeftActions = {
  [fontKeys['arrows']]: () => alert("click move"),
  [fontKeys['arrows-alt']]: () => alert("click scale"),
  [fontKeys['undo']]: () => alert("click rotate"),
};

const buttonsRightActions = {
  [fontKeys.trash]: () => {
    alert("click delete model");
    action();
  },
  [fontKeys['low-vision']]: () => alert("click hide model"),
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
