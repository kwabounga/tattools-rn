import React from "react";
import { View, TouchableOpacity, StyleSheet,Dimensions } from "react-native";
import { cst } from '../../exports/const';
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
          iconSize={cst.ui.sizes.ICON_SIZE}
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
              iconSize={cst.ui.sizes.ICON_SIZE}
              iconColor={rawStyles.iconButton.color}/>
          );
        })}
      </View>
    );
  }
}
export class HorizontalBarButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={[
          styles.containerHorizontal,
          this.props.position === "top" ? styles.isTop : styles.isBottom
        ]}>
        {Object.keys(this.props.actions).map((name, id) => {
          console.log(name);
          return (
            <SquareButton
              key={name + id}
              btKey={name + id}
              btAction={() => this.props.actions[name]()}
              iconName={name}
              iconSize={cst.ui.sizes.ICON_SIZE}
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
    marginBottom: 40,
    position: "absolute",
    top: 0,
    bottom:0,
    justifyContent: 'flex-start'
  },
  isLeft: {
    marginLeft: 10,
    left: 0,
  },
  isRight: {
    marginRight: 10,
    right: 0,
  },
  containerHorizontal: {
    flex:0,
    flexDirection:'row',
    left: 0,
    marginLeft: 10,
    marginRight: 100,
  },
  isTop: {
    margin: 0,
  },
  isBottom: {
    margin: 0
  },
  button: {
    width: cst.ui.sizes.BUTTON_SIZE,
    height: cst.ui.sizes.BUTTON_SIZE,
    backgroundColor: cst.ui.colors.COLOR_MENU,
    borderRadius: 10,
    padding: 10,
    margin: 3,
    alignItems:'center'
  },
  textButton: {
    color: cst.ui.colors.COLOR_TEXT,
  },
  iconButton: {
    color: cst.ui.colors.COLOR_HIGHLIGHT,
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
    backgroundColor: cst.ui.colors.COLOR_SECONDARY,
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
