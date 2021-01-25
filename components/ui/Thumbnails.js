import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { cst } from "../../exports/const";
export class Thumbnails extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity
        key={this.props.index}
        style={{
          borderWidth: this.props.border,
          borderColor: this.props.borderColor,
          margin: cst.ui.sizes.THUMBNAILS_MARGIN,
          width: this.props.size,
          height: this.props.size,
          backgroundColor: this.props.backgroundColor,
        }}
        onPress={() => {
          this.props.action();
        }}>
        <Image
          source={this.props.imageSource}
          style={{
            width: this.props.size - this.props.border * 2,
            height: this.props.size - this.props.border * 2,
          }}></Image>
      </TouchableOpacity>
    );
  }
}
Thumbnails.defaultProps = {
  index: -1,
  imageSource: "",
  size: cst.ui.sizes.THUMBNAILS_SIZE,
  border: cst.ui.sizes.BIG_BORDER,
  borderColor: cst.ui.colors.COLOR_HIGHLIGHT,
  backgroundColor: cst.ui.colors.COLOR_SECONDARY,
  action: (_) => {
    alert(`default action`);
  },
};
