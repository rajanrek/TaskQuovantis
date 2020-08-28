import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {addFood} from './source/redux/action';
import Modal from 'react-native-modal';
import AppContainer from './source/navigation';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: 'test',
      isVisibleTrue: false,
    };
  }

  render() {
    console.log('props', this.props);
    return <AppContainer />;
  }
}
