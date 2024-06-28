import React from 'react';
import { ScrollView, Text, Button, Image, LogBox, View, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/HomePageStyles';

const Header = () => {
  return (
      <View style={styles.headerContainer}>
        <Text style={styles.topText} >Hi, Ajay
          </Text>
        <TouchableOpacity>
        <View style={styles.iconContainer}> 
            <Image  source={require('./../assets/HomePageIcons/User1.png')}
                style={styles.user} 
            />
        </View>
       
        </TouchableOpacity>
        
      </View>
      
  );
};

export default Header;
