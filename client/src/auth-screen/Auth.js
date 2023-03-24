import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState, useEffect} from 'react';
import {auth} from '../../Setup.js';

export default function Auth() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [initializing, setInitializing] = useState(true);
  const [user, setuser] = useState();

  const logout = () => {};
  const signin = () => {};
  const signUp = () => {};

  return (
    <View>
      <TextInput
        placeholder="Email address"
        value={email}
        onChangeText={setemail}
      />
      <TextInput
        placeholder="password"
        value={password}
        onChangeText={setpassword}
      />

      <Text onPress={signUp}>Sing Up</Text>
      <TextInput
        placeholder="Email address"
        value={email}
        onChangeText={setemail}
      />
      <TextInput
        placeholder="password"
        value={password}
        onChangeText={setpassword}
      />

      <Text onPress={signin}>Singin</Text>

      <Text onPress={logout}>logout</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
