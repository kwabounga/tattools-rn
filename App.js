import React from 'react';
import { VerticalBarButton } from './components/Ui';
import { StyleSheet,ScrollView, Text, View} from 'react-native';
import SceneComp1 from './components/SceneComp1';

// import SceneComp2 from './components/SceneComp2';
// import SceneComp3 from './components/SceneComp3';

export default class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <SceneComp1 name='Tattools project' />
          <VerticalBarButton style={styles.leftButtonsBar}/>

          {/* <SceneComp2 name='PBR Material/Import textures' />
          <SceneComp3 name='Import 3d Object' /> */}
          {/* <Text>Comming soon...</Text>   */}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {  
    backgroundColor: "#3C3C3C",
    flex: 1,  
    padding: 0
  },
  leftButtonsBar: {
    // position: 'absolute', 
    // right: 0,
    // top: 0,  
    zIndex: 10,
    backgroundColor: "#992626"
  }
});  