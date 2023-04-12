import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';

export default function UpdateData() {
  const [inputValue, setinputValue] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {};

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={inputValue}
        onChangeText={setinputValue}
      />

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Update</Text>
      </TouchableOpacity>
    </View>
  );
}

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center', flex: 1},
  textInput: {borderWidth: 1, width: width - 20, borderRadius: 10},
  btnText: {fontSize: 20, color: '#000', textAlign: 'center'},
  btn: {
    backgroundColor: 'green',
    padding: 10,
    width: width / 2,
    borderRadius: 10,
    marginTop: 20,
  },
});
