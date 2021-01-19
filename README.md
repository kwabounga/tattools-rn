# Tattools 3D
Personal app using ReactNative and BabylonJS 


## Getting Started

### If you don't have expo-cli yet, get it
- npm i -g expo-cli
### If you don't have react-native-cli yet, get it
- npm i -g react-native-cli

### Next step
- Clone this repo.
- npm install
- npm run android - for android
- npm run ios - for ios // no test yet

*if Metro Bundler didn't start automaticaly, run 

- npm run start 

after npm install

### Credits 
base is https://github.com/Bulisor/BabylonjsDemo

### Warning 
if your version of node is upper 12.9
you will have this issue 
https://github.com/expo/expo-cli/issues/1074

so downgrade to version 12.9  or directly change 

```js 
var sharedBlacklist = [
  /node_modules[/\\]react[/\\]dist[/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];
```  
to:

```js
var sharedBlacklist = [
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];
```
in `\node_modules\metro-config\src\defaults\blacklist.js`
see https://stackoverflow.com/questions/58120990/how-to-resolve-the-error-on-react-native-start
