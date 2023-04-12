import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import database from '@react-native-firebase/database';
const {width} = Dimensions.get('window');

export default function CreateData() {
  const [Loading, setLoading] = useState(false);
  const [inputValue, setinputValue] = useState(null);
  const [list, setList] = useState(null);

  //================== get data in realtime database ===========================
  useEffect(() => {
    getRealtimeData();
  }, []);

  const getRealtimeData = async () => {
    try {
      // const data = await database().ref('todo').once('value');
      await database()
        .ref('todo')
        .on('value', togoleData => {
          setList(togoleData.val());
        });
    } catch (error) {
      console.log(error);
    }
  };

  // =========================== //TODO create data in realtime database //===========================
  const handleAddData = async () => {
    const id = list.length;

    try {
      setLoading(true);
      await database().ref(`todo/${id}`).set({
        name: inputValue,
      });
      setinputValue('');
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(list);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your value"
        onChangeText={setinputValue}
        value={inputValue}
      />
      <TouchableOpacity onPress={handleAddData} style={styles.btnBody}>
        {Loading ? (
          <ActivityIndicator size="small" color="#0000ff" />
        ) : (
          <Text style={styles.btn}>Create Data</Text>
        )}
      </TouchableOpacity>

      {list
        ?.filter(data => data !== null)
        .map(ele => {
          return <Text>{ele.name}</Text>;
        })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: width - 20,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
  },
  btn: {
    fontSize: 20,
    color: '#fff',
  },
  btnBody: {
    borderRadius: 10,
    backgroundColor: 'green',
    marginTop: 20,
    paddingHorizontal: 20,
    padding: 5,
    width: 200,
  },
});
