import React, { Component } from 'react';
import Peg from './Peg';
import GuessButton from './GuessButton';
import { View, StyleSheet } from 'react-native';

export default class PegRow extends Component {
  constructor(props) {
    super(props)
    //TODO pass in actual solution
  }

  render() {
    const pegs = new Array(4).fill().map((_, i) => <Peg key={ `peg-${i}` } />);
    return (
      <View style={ styles.PegRow }>
        { pegs }
        <GuessButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  PegRow: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 20
  }
});
