import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

export default class GuessButton extends Component {
  onPress() {
    console.log('guess button pressed');
  }

  render() {
    return (
      <TouchableHighlight underlayColor="lightblue" onPress={ this.onPress.bind(this) } style={ styles.guessButton }>
        <Text style={{ fontSize: 16, lineHeight: 25 }}>Guess</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  guessButton: {
    borderColor: 'black',
    borderRadius: 15,
    borderWidth: 1,
    height: 50,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
  }
});
