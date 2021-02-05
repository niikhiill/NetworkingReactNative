import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

const GetForm = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch('https://6018db6e971d850017a4052d.mockapi.io/data')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
      
    }, []);
  
    return (
      <View style={{ flex: 1, paddingTop: 40 }}>
      
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{item.name} {item.surname}</Text>
            )}
          />
      </View>
    );
};

export default GetForm;