import React from 'react';
import { ScrollView, Text, Button, Image, LogBox, View, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/PostStyle';

const Post = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image  source={require('./../assets/HomePageIcons/User1.png')}
                style={styles.user} 
            />
        <View style={styles.textContainer} >
            <Text style={styles.headingText} >Sarthak shared a plan</Text>
            <Text style={styles.dateTimeText}>12 April 2024 at 10:47 AM</Text>
        </View>
        
      </View>
      <View>
        <Image  source={require('./../assets/ImagesUsed/PostDemo.png')}
                style={styles.banner} 
            />
      </View>
      <View style={styles.textBaseContainer} >
            <Text style={styles.headingBaseText} >Club hopping + After party at my place</Text>
            <Text style={styles.dateTimeBaseText}>12 April 2024 at 10:47 AM</Text>
        </View>
    </View>
  );
};

export default Post;
