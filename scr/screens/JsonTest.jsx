import { View, Text, FlatList, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';

const url = "http://193.87.164.219/database.json";

const JsonTest = () => {

  const [date, setDate] = useState('');
  const [distArray, setDistArray] = useState([]);
  const [tempArray, setTempArray] = useState([]);

  const { jsonData, latest, isPending, error } = useFetch(url);

  if (jsonData && date === '') {
    setDate(jsonData[0].date);
    setDistArray(jsonData[0].distance);
    setTempArray(jsonData[0].temperature);
  };

  const [reload, setReload] = useState(false);

  return (
    <View style={{ padding: 60 }}>
      <Button title="test" onPress={() => console.log(jsonData)} />
      {error && <Text>{error}</Text>}
      {isPending && <Text>loading...</Text>}
      {/* <FlatList data={cd.slice(-1)} keyExtractor={(item) => {item.date}} renderItem={({item}) => <Text>{item.measure[0]}</Text>}/> */}
      {jsonData && <Text>{latest}</Text>}
      {jsonData && <Text>date: {date} distance: {distArray}, tempreature: {tempArray}</Text>}
    </View>
  )
};

export default JsonTest