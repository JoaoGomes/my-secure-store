import React, { useState } from 'react';
import { StyleSheet, Text, View, Button }  from 'react-native';
import * as SecureStore from 'expo-secure-store';

export default function App() {
	const [data, setData] = useState();
	async function onSaveSecure()  {
		await SecureStore.setItemAsync('token', 'my-token-value');
  }

  async function onReadSecure() {
	  const myToken = await SecureStore.getItemAsync('token');
	  console.log(myToken);
	  setData(myToken);
  }

  return (
	  <View style={styles.container}>
		  <Text>Secure Store</Text>
		  <Button onPress={onSaveSecure} title="Salvar" color="#841584" />
		  <Button onPress={onReadSecure} title="Ler" color="#45AA89" />
		  { data && <Text>{data}</Text> }
	  </View>
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
