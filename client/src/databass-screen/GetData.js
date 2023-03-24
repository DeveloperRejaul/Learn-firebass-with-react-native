import {Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';

export default function GetData({navigation}) {
  const [name, setname] = useState('');
  const [age, setAge] = useState('');
  const [nameList, setNameList] = useState([]);
  const [loaging, setLoaging] = useState(true);

  useEffect(() => {
    getDatabass();
  }, []);

  const getDatabass = async () => {
    try {
      // Get data
      const data = await firestore()
        .collection('user')
        .doc('S8zaw9sprQuAbmlFGq46')
        .get();
      const {age, name, nameList} = data._data;
      setAge(age);
      setname(name);
      setNameList([...nameList]);
      setLoaging(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      {loaging ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <Text>Name: {name}</Text>
          <Text>Age: {age}</Text>
        </>
      )}
      {nameList?.map((ele, i) => {
        return (
          <View key={i}>
            <Text>{ele}</Text>
          </View>
        );
      })}
    </View>
  );
}
