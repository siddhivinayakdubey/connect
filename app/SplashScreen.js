// SplashScreen.js
import React, { useEffect } from 'react';
import { Image, View } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Simulate loading tasks
    setTimeout(() => {
      // Navigate to HomeScreen after 2 seconds
      navigation.replace('Home');
    }, 2000); // 2000 milliseconds = 2 seconds
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={require('./../assets/connect.png')} // Path to your splash screen image
        style={{ width: 'auto', height: 'auto' }}
        resizeMode="contain"
      />
    </View>
  );
};

export default SplashScreen;