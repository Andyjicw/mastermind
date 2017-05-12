import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const PEG_COLORS = ['#8dd3c7','#ffffb3','#bebada','#fb8072','#80b1d3','#fdb462'];

export default class Peg extends Component {
  constructor(props) {
    super(props);
    this.state = { pegColorIndex: -1 }
  }

  onPress() {
    this.setState({ pegColorIndex: (this.state.pegColorIndex + 1) % 6 });
  }

  render() {
    return (
      <TouchableHighlight underlayColor="white" onPress={this.onPress.bind(this)}>
        <View style={ [styles.peg, { backgroundColor: PEG_COLORS[this.state.pegColorIndex] || 'white' }] }>
          <Text style={ styles.pegText }>{ this.state.pegColorIndex === -1 || this.state.pegColorIndex }</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  peg: {
    borderColor: 'black',
    borderRadius: 25,
    borderWidth: 1,
    height: 50,
    marginRight: 10
  },
  pegText: {
    backgroundColor: 'transparent',
    height: 50,
    fontSize: 14,
    lineHeight: 45,
    textAlign: 'center',
    width: 50
  }
});
