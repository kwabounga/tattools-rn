import React from "react";
import { View, Text, TouchableOpacity, StyleSheet,Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
export class SquareButton extends React.Component {
  constructor (props){
    super(props);
  }
  
  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        key={this.props.btKey}
        onPress={() => this.props.btAction()}>
        <Icon name={this.props.iconName} size={this.props.iconSize} color={this.props.iconColor} />
      </TouchableOpacity>
    )
  }
}
SquareButton.defaultProps = {
  btKey:'icon',
  btAction: _=> {alert('default action')},
  iconName: 'rocket',
  iconSize: 40,
  iconColor: 'white'
}
export class SquareButtonSwitch extends React.Component {
  constructor (props){
    super(props);
  }
  switch () {
    this.props.onValueChange(!this.props.value);
  }
  render() {
    return (
      <View style={this.props.style}>
        <SquareButton
          btKey={'switch'}
          btAction={() => this.switch()}
          iconName={this.props.value?'eye':'eye-slash'}
          iconSize={40}
          iconColor={rawStyles.iconButton.color}/>
      </View>
    )
  }
}
SquareButtonSwitch.defaultProps = {
  value:false,
  onValueChange: _=>{}
}
export class VerticalBarButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={[
          styles.container,
          this.props.position == "left" ? styles.isLeft : styles.isRight,
        ]}>
        {Object.keys(this.props.actions).map((name, id) => {
          console.log(name);
          return (
            <SquareButton
              key={name + id}
              btKey={name + id}
              btAction={() => this.props.actions[name]()}
              iconName={name}
              iconSize={40}
              iconColor={rawStyles.iconButton.color}/>
          );
        })}
      </View>
    );
  }
}

var width = Dimensions.get('window').width; // full mobile width
var height = Dimensions.get('window').height // full mobile width
const rawStyles = {
  container: {
    marginTop: 40,
    position: "absolute",
    top: 0,
  },
  isLeft: {
    marginLeft: 10,
    left: 0,
  },
  isRight: {
    marginRight: 10,
    right: 0,
  },
  button: {
    width: 60,
    height: 60,
    backgroundColor: "#2E2E2E",
    borderRadius: 10,
    padding: 10,
    marginBottom: 3,
    alignItems:'center'
  },
  textButton: {
    color: "#FFF",
  },
  iconButton: {
    color: "#E3E3E3",
  },
  navBar: {
    width:width,
    flexDirection : 'row',
    position: "absolute",
    top: 0,
    justifyContent: 'space-between'
  },
  navElements:{
    padding:3,
    backgroundColor: '#696969',
    borderRadius:0
  },
  navFlex1: {
    flex: 1,
    alignItems: 'center'
  },
  navFlex2: {
    flex: 2,
    alignItems: 'center'
  },
};
const styles = StyleSheet.create(rawStyles);
