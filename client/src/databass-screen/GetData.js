import {Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore'; //TODO: for firestore
import database from '@react-native-firebase/database'; //TODO: for realtime databass

export default function GetData({navigation}) {
  const [name, setname] = useState('');
  const [age, setAge] = useState('');
  const [nameList, setNameList] = useState([]);
  const [loaging, setLoading] = useState(true);

  //TODO [Get] data in fierstore

  useEffect(() => {
    const getDatabassFirestore = async () => {
      try {
        const data = await firestore()
          .collection('user')
          .doc('S8zaw9sprQuAbmlFGq46')
          .get();
        const {age, name, nameList} = data._data;
        setAge(age);
        setname(name);
        setNameList([...nameList]);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    // getDatabassFirestore();
  }, []);

  //TODO [get] data in realtime database
  useEffect(() => {
    const getRealtimeData = async () => {
      try {
        const data = await database().ref('/users/1').once('value');
        const {name, age} = data.val();
        setname(name);
        setAge(age);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    // getRealtimeData();
  }, []);

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
