import React, {Component, useState} from 'react';
import {View, Image, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import ListCatagory from './listcategory';

import {connect} from 'react-redux';
import {addcategories} from '../../redux/action';

class SubCatogories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSections: [],
      categories: [],
    };
  }
  render() {
    console.log('this.props', this.state.categories);

    return (
      <>
        <TouchableOpacity
          onPress={() => {
            this.setState({
              categories: this.props.foodData.item.category.subcategories,
            });
          }}
          style={styles.mainwrp}>
          <View style={styles.innerWrap}>
            <Image
              style={{height: 50, width: 50}}
              source={require('../../assets/harvest.png')}
            />
          </View>
          <View style={styles.innerWrap}>
            <Text
              style={[
                styles.txtList,
                {color: this.props.foodData.item.category.colorCode},
              ]}>
              {this.props.foodData.item.category.categoryName}
            </Text>
          </View>
        </TouchableOpacity>

        <View style={{flex: 1, paddingHorizontal: 10}}>
          <Text style={{color: 'green', justifyContent: 'space-between'}}>
            {this.state.categories.map((item) => {
              return item.subCategoryname;
            })}
          </Text>
        </View>

        <View style={{flex: 1, paddingHorizontal: 10}}>
          <Text style={{color: 'green', justifyContent: 'space-between'}}>
            {this.state.categories.map((item) => {
              return item.items;
            })}
          </Text>
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  mainwrp: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#FFF',
    flexDirection: 'row',
  },
  txtList: {
    fontSize: 20,
    fontWeight: '800',
  },
  innerWrap: {
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
});
const mapStateToProps = (state) => {
  return {
    catg: state.food.catg,
  };
};

export default connect(mapStateToProps)(SubCatogories);
