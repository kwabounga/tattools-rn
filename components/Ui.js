import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// export function Nav () {
//     return (
//         <View>
//             <Text>Hello</Text>
//         </View>
//     )
// }
export class VerticalBarButton extends React.Component {
  constructor(props) {
    super(props);

    this.allBtNames = ["bt1", "bt2"];
  }

  render() {
    return (
      <View style={styles.container}>
        {this.allBtNames.map((name, id) => {
          console.log(name);
          return (
            <TouchableOpacity
              style={styles.button}
              key={id}
              onPress={() => alert(`click on ${name}!`)}>
              <Text style={styles.textButton}>{name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    position: "absolute",
    right: 0,
    top: 0,
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: "#B8860B",
    padding: 3,
  },
  textButton: {
    color: "#FFF",
  },
});
