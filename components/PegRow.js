import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import FeedbackPegs from "./FeedbackPegs";
import GuessButton from './GuessButton';
import Peg from './Peg';

export default class PegRow extends Component {
  constructor(props) {
    super(props);
    this.state = { solution: props.solution };
  }

  render() {
    const pegs = new Array(4).fill().map((_, i) => {
      return <Peg key={ `peg-${i}` } />;
    });

    return (
      <View style={ styles.PegRow }>
        { pegs }
        <GuessButton />
        <FeedbackPegs />
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
