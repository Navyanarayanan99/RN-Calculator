import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Icons from 'react-native-vector-icons/AntDesign';

const App = () => {
  const [value, setValue] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleClear = () => {
    setValue('');
  };

  return (
    <View
      style={{
        backgroundColor: '#333333',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View
          style={{
            height: 320,
            width: 300,
            backgroundColor: 'grey',
            opacity: 0.7,
            borderRadius: 40,
            alignItems: 'center',
            justifyContent: 'center',
            shadowOffset: {
              height: 2,
              width: 1,
            },
            shadowColor: '#000',
            shadowOpacity: 0.25,
            shadowRadius: 4,
            marginLeft: 45,
            marginTop: 150,
          }}>
          <TouchableOpacity
            style={{position: 'absolute', top: 10, right: 10}}
            onPress={() => setModalVisible(false)}>
            <Icons name="closecircleo" size={30} color="#000" />
          </TouchableOpacity>
          <Text style={{fontSize: 40, color: '#fff'}}>Hello World</Text>
        </View>
      </Modal>
      <View>
        <Text style={{color: '#737373', fontSize: 30, marginTop: 250}}>
          {value}
        </Text>
      </View>

      <View style={{flexDirection: 'row'}}>
        <View style={{flexDirection: 'column', marginLeft: 30}}>
          <TouchableHighlight style={styles.touchable}>
            <Text
              style={{color: '#737373', fontSize: 30}}
              onPress={() => handleClear()}>
              C
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.touchable}>
            <Text style={{color: '#737373', fontSize: 30}}>7</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.touchable}>
            <Text style={{color: '#737373', fontSize: 30}}>4</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.touchable}>
            <Text
              style={{color: '#737373', fontSize: 30}}
              onPress={() => {
                setValue(value => value + '1');
              }}>
              1
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.touchable}>
            <Text style={{color: '#737373', fontSize: 30}}>.</Text>
          </TouchableHighlight>
        </View>

        <View style={{flexDirection: 'column', marginLeft: 30}}>
          <TouchableHighlight style={styles.touchable}>
            <Text style={styles.textstyle}>+/-</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.touchable}>
            <Text style={styles.textstyle}>8</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.touchable}>
            <Text style={styles.textstyle}>5</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.touchable}>
            <Text style={styles.textstyle}>2</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.touchable}>
            <Text style={styles.textstyle}>0</Text>
          </TouchableHighlight>
        </View>

        <View style={{flexDirection: 'column', marginLeft: 30}}>
          <TouchableHighlight style={styles.touchable}>
            <Text style={styles.textstyle}>%</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.touchable}>
            <Text
              style={styles.textstyle}
              onPress={() => {
                setValue(value => value + '9');
              }}>
              9
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.touchable}>
            <Text style={styles.textstyle}>6</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.touchable}>
            <Text
              style={styles.textstyle}
              onPress={() => {
                setValue(value => value + '3');
              }}>
              3
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.touchable}>
            <Text style={styles.textstyle}>00</Text>
          </TouchableHighlight>
        </View>

        <View
          style={{
            flexDirection: 'column',
            marginLeft: 30,
            backgroundColor: '#1a1a1a',
            borderRadius: 30,
          }}>
          <TouchableHighlight style={styles.touchable}>
            <Text style={styles.textstyle}>/</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.touchable}>
            <Text style={styles.textstyle}>X</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.touchable}>
            <Text style={styles.textstyle}>-</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.touchable}>
            <Text
              style={styles.textstyle}
              onPress={() => {
                setValue(value => value + '+');
              }}>
              +
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.touchable}>
            <View style={styles.button}>
              <Text
                style={styles.textstyle}
                onPress={() => {
                  setValue(value => value + '=');
                  if (value == '1+3+9') {
                    setModalVisible(true);
                  }
                }}>
                =
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textstyle: {
    color: '#737373',
    fontSize: 30,
  },
  touchable: {
    height: 75,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: 'lightyellow',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
});
export default App;
