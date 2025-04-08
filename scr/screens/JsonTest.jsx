import { View, Text, FlatList, Button } from 'react-native';
import React, { useEffect, useState } from 'react';

//imports data
import cd from '../data/backup.json';

const JsonTest = () => {

  const [reload, setReload] = useState(1);
  const [test, setTest] = useState('');
  
  const [data, setData] = useState([]);

  const [date, setDate] = useState('');
  const [dist, setDist] = useState('');
  const [temp, setTemp] = useState('');

  useEffect(() =>{

    // setDate(cd[cd.length - 1].date)
    // setDist(cd[cd.length - 1].measure[0].toString())
    // setTemp(cd[cd.length - 1].tempreature[0].toString())

        const fetchData = async () => {
            const response = await fetch("http://127.0.0.1:5000/data");
            const result = await response.json();
            console.log(result)
            setData(result);
        };

        try{
            fetchData();
            if (data != []) {
              setDate(data[data.length - 1].date)
              setDist(data[data.length - 1].measure[0].toString())
              setTemp(data[data.length - 1].tempreature[0].toString())
            }
        } catch (error){
            console.error(error);
        } finally{
          console.log(data)
        };

    }, [reload]);

  return (
    <View style={{padding: 60}}>
      <Button title="refresh" onPress={() => setReload(reload + 1)}/>
      <Text>{reload}</Text>
      {/* <FlatList data={cd.slice(-1)} keyExtractor={(item) => {item.date}} renderItem={({item}) => <Text>{item.measure[0]}</Text>}/> */}
      <Text>{date} {test}</Text>
      <Text>distance: {dist}, tempreature: {temp}</Text>
    </View>
  )
};

export default JsonTest