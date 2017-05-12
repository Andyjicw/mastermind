import React, { Component } from 'react';
import { View, TouchableHighlight, StyleSheet } from 'react-native';

const PEG_COLORS = ['red', 'blue', 'yellow', 'orange', 'green', 'purple'];

export default class Peg extends Component {
  constructor(props) {
    super(props);
    this.state = { pegColorIndex: -1, empty: true }
  }

  onPress() {
    this.setState({ pegColorIndex: (this.state.pegColorIndex + 1) % 6 });
  }

  render() {
    return (
      <TouchableHighlight underlayColor="white" onPress={this.onPress.bind(this)}>
        <View style={ [styles.peg, { backgroundColor: PEG_COLORS[this.state.pegColorIndex] || 'white' }] } />
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  peg: {
    height: 50,
    width: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 25,
    marginRight: 10
  }
});
