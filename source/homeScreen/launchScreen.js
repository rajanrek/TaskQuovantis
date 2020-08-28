import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

class LaunchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: 'test',
    };
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('home');
          }}
          style={styles.buttonContainer}>
          <Text style={styles.btnTxt}> Open Food List </Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  buttonContainer: {
    backgroundColor: '#50397a',
    paddingHorizontal: '25%',
    paddingVertical: '6%',
  },
  btnTxt: {
    color: '#FFF',
    fontSize: 25,
    fontWeight: '800',
  },
  modalContentclose: {
    color: '#FFF',
    alignSelf: 'center',
  },
  modalContent: {
    color: '#FFF',
    fontSize: 25,
    fontWeight: '900',
  },
  modal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'gray',
  },
  closeBtn: {
    backgroundColor: 'black',
    height: '5%',
    width: '10%',
    alignItems: 'flex-end',
    paddingVertical: 10,
  },
});

export default connect()(LaunchScreen);
