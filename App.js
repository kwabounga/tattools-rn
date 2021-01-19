import React from 'react';
import { StyleSheet,ScrollView, Text, View} from 'react-native';

import SceneComp1 from './components/SceneComp1';
import SceneComp2 from './components/SceneComp2';
import SceneComp3 from './components/SceneComp3';

export default class App extends React.Component {
  render() {
    return (
        <ScrollView>
          <SceneComp1 name='Tattools project' />
          {/* <SceneComp2 name='PBR Material/Import textures' />
          <SceneComp3 name='Import 3d Object' /> */}
          {/* <Text>Comming soon...</Text>   */}
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {  
    flex: 1,  
    padding: 0
  },
  // nav: {
  //   position: 'absolute',
  //   left: 0,
  //   top: 0,
  //   zIndex: 10,
  // }
});  