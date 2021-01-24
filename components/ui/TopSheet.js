import React, { Component } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
} from "react-native";
import {
  PanGestureHandler,
  NativeViewGestureHandler,
  State,
  TapGestureHandler,
} from "react-native-gesture-handler";

import { USE_NATIVE_DRIVER } from "../../exports/config";
let FOOTER_HEIGHT;
let SNAP_POINTS_FROM_TOP;
const windowHeight = Dimensions.get("window").height;
export class TopSheet extends Component {
  masterdrawer = React.createRef();
  drawer = React.createRef();
  drawerheader = React.createRef();
  scroll = React.createRef();
  constructor(props) {
    super(props);

    FOOTER_HEIGHT = this.props.height;
    SNAP_POINTS_FROM_TOP = [
      -(windowHeight - StatusBar.currentHeight * 2),
      -windowHeight * 0.4,
      0,
    ];
    const START = SNAP_POINTS_FROM_TOP[0];
    const END = SNAP_POINTS_FROM_TOP[SNAP_POINTS_FROM_TOP.length - 1];

    this.state = {
      lastSnap: START,
    };

    this._lastScrollYValue = 0;
    this._lastScrollY = new Animated.Value(0);
    this._onRegisterLastScroll = Animated.event(
      [{ nativeEvent: { contentOffset: { y: this._lastScrollY } } }],
      { useNativeDriver: USE_NATIVE_DRIVER }
    );
    this._lastScrollY.addListener(({ value }) => {
      this._lastScrollYValue = value;
    });

    this._dragY = new Animated.Value(0);
    this._onGestureEvent = Animated.event(
      [{ nativeEvent: { translationY: this._dragY } }],
      { useNativeDriver: USE_NATIVE_DRIVER }
    );

    this._reverseLastScrollY = Animated.multiply(
      new Animated.Value(-1),
      this._lastScrollY
    );

    this._translateYOffset = new Animated.Value(START);
    this._translateY = Animated.add(
      this._translateYOffset,
      Animated.add(this._dragY, this._reverseLastScrollY)
    ).interpolate({
      inputRange: [START, END],
      outputRange: [START, END],
      extrapolate: "clamp",
    });
  }
  _onHeaderHandlerStateChange = ({ nativeEvent }) => {
    if (nativeEvent.oldState === State.BEGAN) {
      this._lastScrollY.setValue(0);
    }
    this._onHandlerStateChange({ nativeEvent });
  };
  _onHandlerStateChange = ({ nativeEvent }) => {
    if (nativeEvent.oldState === State.ACTIVE) {
      let { velocityY, translationY } = nativeEvent;
      translationY -= this._lastScrollYValue;
      const dragToss = 0.05;
      const endOffsetY =
        this.state.lastSnap + translationY + dragToss * velocityY;

      let destSnapPoint = SNAP_POINTS_FROM_TOP[0];
      for (let i = 0; i < SNAP_POINTS_FROM_TOP.length; i++) {
        const snapPoint = SNAP_POINTS_FROM_TOP[i];
        const distFromSnap = Math.abs(snapPoint - endOffsetY);
        if (distFromSnap < Math.abs(destSnapPoint - endOffsetY)) {
          destSnapPoint = snapPoint;
        }
      }
      this.setState({ lastSnap: destSnapPoint });
      this._translateYOffset.extractOffset();
      this._translateYOffset.setValue(translationY);
      this._translateYOffset.flattenOffset();
      this._dragY.setValue(0);
      Animated.spring(this._translateYOffset, {
        velocity: velocityY,
        tension: 68,
        friction: 12,
        toValue: destSnapPoint,
        useNativeDriver: USE_NATIVE_DRIVER,
      }).start();
    }
  };
  render() {
    return (
      <TapGestureHandler
        maxDurationMs={100000}
        ref={this.masterdrawer}
        maxDeltaY={this.state.lastSnap - SNAP_POINTS_FROM_TOP[0]}>
        {/* <View style={StyleSheet.absoluteFillObject} pointerEvents="box-none"> */}
          <Animated.View
            style={[
              StyleSheet.absoluteFillObject,
              {
                transform: [{ translateY: this._translateY }],
                backgroundColor: "#323232",
                flex: 1,
              },
            ]}>
            <PanGestureHandler
              ref={this.drawer}
              simultaneousHandlers={[this.scroll, this.masterdrawer]}
              shouldCancelWhenOutside={false}
              onGestureEvent={this._onGestureEvent}
              onHandlerStateChange={this._onHandlerStateChange}>
              <Animated.View style={styles.container}>
                <NativeViewGestureHandler
                  ref={this.scroll}
                  waitFor={this.masterdrawer}
                  simultaneousHandlers={this.drawer}>
                  {/* <Animated.ScrollView
                    style={[
                      styles.scrollView,
                      { marginBottom: windowHeight, flex: 1 },
                    ]}
                    bounces={false}
                    onScrollBeginDrag={this._onRegisterLastScroll}
                    scrollEventThrottle={1}> */}
                    {this.props.children}
                  {/* </Animated.ScrollView> */}
                </NativeViewGestureHandler>
              </Animated.View>
            </PanGestureHandler>
            <PanGestureHandler
              ref={this.drawerheader}
              simultaneousHandlers={[this.scroll, this.masterdrawer]}
              shouldCancelWhenOutside={false}
              onGestureEvent={this._onGestureEvent}
              onHandlerStateChange={this._onHeaderHandlerStateChange}>
              <Animated.View
                style={{
                  height: this.props.height,
                  backgroundColor: this.props.backgroundColor,
                }}
              />
            </PanGestureHandler>
          </Animated.View>
        {/* </View> */}
      </TapGestureHandler>
    );
  }
}
TopSheet.defaultProps = {
  height: 30,
  backgroundColor: "red",
};
// export default class Example extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <TopSheet />
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1
  },
});

// {...StyleSheet.absoluteFillObject, flex: 1,}
// StyleSheet.absoluteFillObject