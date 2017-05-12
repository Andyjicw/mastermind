import React, { Component } from 'react';
import Peg from './Peg';
import GuessButton from './GuessButton';
import { StyleSheet, View } from 'react-native';

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
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 20
  }
});
