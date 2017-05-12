import React, { Component } from 'react';
import PegRow from './components/PegRow';
import { View, StyleSheet } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const rows = new Array(12).fill().map((_, i) => <PegRow key={ `row-${i}` } />);
    return <View style={ styles.container }>{ rows }</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20
  }
});
