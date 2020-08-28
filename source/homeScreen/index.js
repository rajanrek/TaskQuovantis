import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {addFood} from '../redux/action';
import {connect} from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo';
import {ScrollView, TextInput, FlatList} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import Accordion from 'react-native-collapsible/Accordion';
import SubCatogories from './component/subcatagories';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSections: [],
      search:''
    };
  }
  componentDidMount() {
    this.getFoodsData();
  }

  getFoodsData = () => {
    fetch('https://api.jsonbin.io/b/5f2c36626f8e4e3faf2cb42e')
      .then((response) => response.json())
      .then((responseJson) => {
        this.props.dispatch(addFood(responseJson.categories));
        console.log('getting data from fetch', responseJson);
      })
      .catch((error) => console.log(error));
  };

  render() {
    console.log('redux props', this.props.food);

    return (
      <View style={styles.mainContainer}>
        <ScrollView>
          <SafeAreaView />

          <View style={styles.headerContainer}>
            <View style={styles.leftbtn}>
              <TouchableOpacity
                style={styles.backBtnContainer}
                onPress={() => this.props.navigation.navigate('launch')}>
                <Entypo
                style={styles.crossbtn}
                name="cross"
                size={hp('4%')}
              />
              </TouchableOpacity>
            </View>
            <View style={styles.titleContainer}></View>
            <View style={styles.rightbtn}>
              <TouchableOpacity style={styles.updatebtn}>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.listWrap}>
            <View style={styles.search}>
              <TextInput 
              onChangeText={(text=>{
                  
              })}
              placeholder="Try searching fat, souces name....." />
            </View>
            <View style={styles.foodListContainer}>
              <FlatList
                data={this.props.food}
                keyExtractor={(item) => item}
                renderItem={(item) => {
                  return <SubCatogories foodData={item} />;
                }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    food: state.food.foods,
  };
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#c7ced6',
    paddingHorizontal: 10,
  },
  headerContainer: {
    height: hp('7.4%'),
    backgroundColor: '#c7ced6',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  leftbtn: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
  },
  rightbtn: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: hp('2.5%'),
  },
  crossbtn: {
    fontWeight: '900',
    color: 'black',
  },
  titleContainer: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  foodListContainer: {
    flex: 1,
  },
  search: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: '100%',
    borderRadius: 6,
    borderWidth: 0.5,
  },
  listWrap: {
    flex: 1,
  },
});

export default connect(mapStateToProps)(HomeScreen);
