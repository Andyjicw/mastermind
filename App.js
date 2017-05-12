import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import PegRow from './components/PegRow';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { solution: [1, 2, 3, 4] };
  }

  render() {
    const rows = new Array(12).fill().map((_, i) => {
      return <PegRow key={ `row-${i}` } solution={ this.state.solution } />;
    });

    return <ScrollView style={ styles.container }>{ rows }</ScrollView>;
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 20
  }
});
