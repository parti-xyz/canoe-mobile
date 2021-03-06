/**
 * # __mockes__/react-native.js
 *
 * This class stubs out the React-Native classes with React classes
 */
'use string';
/**
 * ## Imports
 *
 * ReactNative is actually React
 */
const React = require('react');
const ReactNative = React;

/**
 * ## These need additional mocking
 *
 * ReactNative is actually React
 */
ReactNative.StyleSheet = {
  create: function create(styles) {
    return styles;
  }
};
class View extends React.Component {
  render() { return false; }
}
/**
 * ## Stubs
 *
 * Simple replacements for testing
 */
ReactNative.View = View;
ReactNative.ScrollView = View;
ReactNative.Text = View;
ReactNative.TouchableOpacity = View;
ReactNative.TouchableWithoutFeedback = View;
ReactNative.ToolbarAndroid = View;
ReactNative.Image = View;
ReactNative.NativeModules= {};

ReactNative.Platform = {};
module.exports = ReactNative;
