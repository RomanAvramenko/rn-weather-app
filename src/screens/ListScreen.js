import React, {useState} from 'react';
import {SearchBar} from 'react-native-elements';
import {View, Text} from 'react-native';

export const ListScreen = () => {
  const [search, setSearch] = useState('');
  return (
    <View>
      <SearchBar
        placeholder="Enter city name..."
        onChangeText={() => setSearch(search)}
        value={search}
      />
      <Text>List</Text>
    </View>
  );
};
