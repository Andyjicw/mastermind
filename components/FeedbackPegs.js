import React, { Component } from 'react';
import { View } from 'react-native';

export default class FeedbackPegs extends Component {
  render() {
    const feedbackPegs = new Array(4).fill().map((_, i) => {
      return <View style={ styles.feedbackPeg } key={`feedbackPeg-${i}`} />;
    });

    return <View style={ styles.feedbackPegs }>{ feedbackPegs }</View>;
  }
}

const styles = {
  feedbackPegs: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 50,
    marginTop: 10,
    width: 50
  },
  feedbackPeg: {
    borderColor: 'black',
    borderRadius: 15,
    borderWidth: 1,
    height: 15,
    margin: 2,
    width: 15
  }
};
