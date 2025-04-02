import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

//imports data
import cd from '../data/data.json';

const JsonTest = () => {

    const [data, setData] = useState([]);

    useEffect(() =>{
        const fetchData = async () => {
            const response = await fetch('');
            const result = await response.json();
            console.log(result)
            setData(result);
        };

        try{
            fetchData();
        } catch (error) {
            console.error(error);
        }
        
    }, [])

  return (
    <View>
      <FlatList data={cd} keyExtractor={(item) => {item.date}} renderItem={({item}) => 
        <View>
          <Text>{item.measure[1]}</Text>
        </View>}/>
    </View>
  )
}

export default JsonTest