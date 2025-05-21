import { View, Text, FlatList, Button } from 'react-native';
import React, { useEffect, useState } from 'react';

const JsonTest = () => {

  const [reload, setReload] = useState(false);

  const [jsonData, setJsonData] = useState([]);
  const [latest, setLatest] = useState('');

  const [date, setDate] = useState('');
  const [distArray, setDistArray] = useState([]);
  const [tempArray, setTempArray] = useState([]);

  useEffect(() => {
    const FetchJson = async () => {
      const url = "http://192.168.14.102/database.json";
      let response = await fetch(url);
      const result = await response.json();

      console.warn(result);
      setJsonData(result.data);
      setLatest(result.last_update)
    }

    try {
      FetchJson();
      if (jsonData != []) {
        console.log('json fetch success')
      }
      else {
        console.log('server down (try to configure ip)')
      };
    } catch (error) {
      console.log(error)
    };
  }, []);

  if (jsonData.length != []) {
    if (date == '') {
      setDate(jsonData[jsonData.length - 1].date)
      console.log(date)

      setDistArray(jsonData[jsonData.length - 1].distance)
      console.log(distArray)

      setTempArray(jsonData[jsonData.length - 1].temperature)
      console.log(tempArray)
      console.log("data set")
    } else {
      console.log("data already set")
    }
  } else {
    console.log("no data found")
  };



  return (
    <View style={{ padding: 60 }}>
      <Button title="test" onPress={() => console.log(jsonData)} />
      <Text></Text>
      {/* <FlatList data={cd.slice(-1)} keyExtractor={(item) => {item.date}} renderItem={({item}) => <Text>{item.measure[0]}</Text>}/> */}
      <Text>{latest} {null}</Text>
      <Text>date: {date} distance: {distArray}, tempreature: {tempArray}</Text>
    </View>
  )
};

export default JsonTest