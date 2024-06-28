import React, { useState } from 'react';
import { ScrollView, Text, Button, Image, LogBox, View, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/HomePageStyles';

const Searchbox = () => {
    const [search, setSearch] = useState('');

  const handleChange = (text) => {
    setSearch(text);
  };
  return (
      <View>
      <TextInput
        style={styles.input}
        placeholder="Search by interests"
        placeholderTextColor= 'white'
        onChangeText={handleChange}
        value={search}
      />
    </View>
      
  );
};

export default Searchbox;
