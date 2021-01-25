import React from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback ,
  TextInput,
  Dimensions,
  StyleSheet,
  StatusBar,
  Keyboard
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { TattoolsTextInput } from "../customs/TattoolsTextInput";
const windowHeight = Dimensions.get("window").height;

import { getRandomColor } from "../../exports/tools";
import { cst } from "../../exports/const";
export class FileType extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    //   <TouchableWithoutFeedback style={{flex:1}}onPress={()=>Keyboard.dismiss()} accessible={false}>
        <View style={[this.props.style,styles.container]}>
            
            <View style={{flex:1,}}>
            <Text style={{height:(StatusBar.currentHeight || 20)}}>File Infos</Text>
        <ScrollView style={[styles.section, {backgroundColor:getRandomColor()}]}
        keyboardShouldPersistTaps={"never"}
        onMomentumScrollBegin={()=>{Keyboard.dismiss();}}
        >   
            
            {[...Array(30)].map((x, i) =>
                <TattoolsTextInput key={i} placeHolder={"Project name"} />
              )}
            
            {/* <TattoolsTextInput placeHolder={"Project name"} />
            <TattoolsTextInput placeHolder={"Project name"} />
            <TattoolsTextInput placeHolder={"Project name"} />
            <TattoolsTextInput placeHolder={"Project name"} />
            <TattoolsTextInput placeHolder={"Project name"} /> */}
        </ScrollView>
        </View>
        <View style={{flex:1,}}>
            <Text style={{height:(StatusBar.currentHeight || 20)}}>Models Infos</Text>
        <ScrollView style={[styles.section, {backgroundColor:getRandomColor()}]}>
            {/* <TattoolsTextInput placeHolder={"Project name"} /> */}
        </ScrollView>
        </View>
        </View>
        
    //   </TouchableWithoutFeedback>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        alignSelf: "stretch",
        backgroundColor:getRandomColor(),
    //   flex: 1,
      padding: 0,
      flexDirection:"row",
      alignContent:"stretch",
      height: windowHeight - ((StatusBar.currentHeight || 20) + 90)

    },
    section:{
        // backgroundColor: "#D91F1F",
        flex:1,
        alignSelf: "stretch"
    }   
  });