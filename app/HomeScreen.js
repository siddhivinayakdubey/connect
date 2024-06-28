import React from 'react';
import { ScrollView, Text, Button, Image, LogBox, View, TextInput, SafeAreaView } from 'react-native';
import styles from '../styles/HomePageStyles';
import Header from '../components/Header';
import { SearchBar } from 'react-native-screens';
import Searchbox from '../components/Searchbox';
import Post from '../components/Post';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
        <Header />
        <Searchbox />
        <Post />
    </SafeAreaView>
      
      
  );
};

export default HomeScreen;
