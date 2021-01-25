import React from "react";
import {
  VerticalBarButton,
  SquareButtonSwitch,
  HorizontalBarButton,
} from "./components/ui/Ui";
import { BottomSheet } from "./components/ui/BottomSheet";
import { TopSheet } from "./components/ui/TopSheet";
import {
  StyleSheet,
  Switch,
  View,
  StatusBar,
  Dimensions,
  Text,
} from "react-native";
/* customs */
import { LoremIpsum } from "./exports/common";
import { SceneComp1, action } from "./components/SceneComp1";
import { Thumbnails } from "./components/ui/Thumbnails";
import SwitchableView from "./components/customs/SwitchableView";

import Icon from "react-native-vector-icons/FontAwesome";

/* Tattools */
import allModels from "./exports/3d/models";
console.log(allModels["knife"].thumb);
const windowHeight = Dimensions.get("window").height;
import { cst } from './exports/const';
/* utiles */
import { objKeysFromArray,getRandomColor } from "./exports/tools";
/* recuperation des nom des icons disponibles */
import fontAwesome from "./node_modules/react-native-vector-icons/glyphmaps/FontAwesome.json";
import { FileType } from "./components/Form/FileType";
const fontKeys = objKeysFromArray(fontAwesome);



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false,
    };
    Icon.loadFont();
  }
  render() {
    return (
      <View style={styles.container}>
        <SceneComp1 name="Tattools project" />
        <SquareButtonSwitch /** or Switch */
          onValueChange={(value) => this.setState({ isHidden: value })}
          value={this.state.isHidden}
          style={{
            position: "absolute",
            zIndex: 2,
            bottom: StatusBar.currentHeight,
            right: 10,
          }}
        />
        <SwitchableView
          hide={this.state.isHidden}
          style={StyleSheet.absoluteFillObject}>
          <VerticalBarButton
            style={[
              styles.buttonsBar,
              { marginTop: StatusBar.currentHeight + Switch.currentHeight * 2 },
            ]}
            position="right"
            actions={buttonsRightActions}
          />
          <VerticalBarButton
            style={styles.buttonsBar}
            position="left"
            actions={buttonsLeftActions}
          />
          <TopSheet
            height={StatusBar.currentHeight || 20}
            backgroundColor={cst.ui.colors.COLOR_SECONDARY}
            middleSnapPoint={
              -(windowHeight - ((StatusBar.currentHeight || 20) + 90))
            }>
              
            <FileType style={{zIndex:10}} />
            <HorizontalBarButton
              position="bottom"
              actions={buttonsNavActions}
            />
          </TopSheet>
          <BottomSheet
            height={StatusBar.currentHeight || 20}
            backgroundColor={cst.ui.colors.COLOR_SECONDARY}
            middleSnapPoint={
              windowHeight - ((StatusBar.currentHeight || 20) * 2 + 90)
            }>
            <View
              style={{
                alignContent: "center",
                flex: 1,
                flexDirection: "row",
                flexWrap: "wrap",
              }}>
              {Object.keys(allModels).map((model, index) => {
                console.log(allModels[model].thumb);
                return (
                  <Thumbnails
                    key={index}
                    index={index}
                    imageSource={allModels[model].thumb}
                    size={cst.ui.sizes.THUMBNAILS_SIZE}
                    border={cst.ui.sizes.BIG_BORDER}
                    action={() => {
                      alert(`touch on ${model} (${index})`);
                    }}
                  />
                );
              })}
            </View>
            <View
              style={{
                alignContent: "center",
                flex: 1,
                flexDirection: "row",
                flexWrap: "wrap",
              }}>
              
              {[...Array(30)].map((x, i) =>
                <View key={i}
                  style={{
                    margin: 5,
                    width: 80,
                    height: 80,
                    backgroundColor: getRandomColor(),
                  }}
                />
              )}
              
            </View>
          </BottomSheet>
        </SwitchableView>
      </View>
    );
  }
}


/* names of buttons ref icons name */
// TODO: extract that
const buttonsNavActions = {
  [fontKeys.download]: () => alert("click test"),
  [fontKeys.image]: () => alert("click image"),
  [fontKeys.save]: () => alert("click save"),
};

const buttonsLeftActions = {
  [fontKeys["arrows"]]: () => alert("click move"),
  [fontKeys["arrows-alt"]]: () => alert("click scale"),
  [fontKeys["undo"]]: () => alert("click rotate"),
};

const buttonsRightActions = {
  [fontKeys.trash]: () => {
    alert("click delete model");
    action();
  },
  [fontKeys["info"]]: () => alert("click info model"),  
  [fontKeys["paint-brush"]]: () => alert("click paint-brush"),
};

/* Styles */
const styles = StyleSheet.create({
  container: {
    backgroundColor: cst.ui.colors.COLOR_APP,
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
