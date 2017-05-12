import React, { Component } from 'react';
import PegRow from './components/PegRow';
import { ScrollView, StyleSheet } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const rows = new Array(12).fill().map((_, i) => <PegRow key={ `row-${i}` } />);
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
