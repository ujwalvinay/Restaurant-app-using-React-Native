import { View, Text, Image, StatusBar, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const storedEmail = await AsyncStorage.getItem('userEmail');
      const storedPassword = await AsyncStorage.getItem('password');

      if (email === storedEmail && password === storedPassword) {
        Alert.alert('Login Successful', 'You have successfully logged in.');
        // Navigate to the home screen or another screen
        navigation.navigate('Home');
      } else {
        Alert.alert('Login Failed', 'Invalid email or password. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      Alert.alert('Login Error', 'Something went wrong. Please try again later.');
    }
  };

  return (
    <View className="bg-white h-full w-full pt-5">
      <StatusBar style="light" />
      <Image className='h-full w-full absolute' source={{ uri: 'https://images.pexels.com/photos/1819669/pexels-photo-1819669.jpeg' }} />
      <View className="flex-row justify-center w-full absolute">
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify()}
          className='h-[250] w-[250] pt-10'
          source={{ uri: 'https://ujwalvinay.com/project/bakery-logo.png' }}
        />
      </View>

      {/* Login Form */}
      <View className="h-full w-full justify-around pt-40 pb-10">
        {/* title */}
        <View className="flex items-center">
          <Animated.Text entering={FadeInUp.delay(300).duration(1000)} className="text-white font-bold tracking-wider text-3xl">
            Welcome Back!
          </Animated.Text>
          <Animated.Text entering={FadeInUp.delay(400).duration(1000)} className="text-white tracking-wider w-4/6 text-center pt-5 text-base">
            Fill in the credentials to login to your account.
          </Animated.Text>
        </View>
        <View className="flex items-center mx-4 space-y-5">
          <Animated.View entering={FadeInUp.delay(500).duration(1000)} className="bg-white p-5 rounded-2xl w-11/12">
            <TextInput
              placeholder='Email'
              placeholderTextColor={'gray'}
              value={email}
              onChangeText={setEmail}
            />
          </Animated.View>
          <Animated.View entering={FadeInUp.delay(550).duration(1000)} className="bg-white p-5 rounded-2xl w-11/12 mb-3">
            <TextInput
              placeholder='Password'
              secureTextEntry
              placeholderTextColor={'gray'}
              value={password}
              onChangeText={setPassword}
            />
          </Animated.View>
          <Animated.View entering={FadeInUp.delay(650).duration(1000)} className="w-full">
            <TouchableOpacity className="w-11/12 m-auto bg-sky-400 p-3 rounded-2xl mb-3" onPress={handleLogin}>
              <Text className="xl font-bold text-white text-center">Login</Text>
            </TouchableOpacity>
          </Animated.View>
          <View className="flex-row gap-3 justify-center">
            <Text className='text-white'>Don't have an account?</Text>
            <TouchableOpacity>
              <Text className='text-sky-600' onPress={() => navigation.push('SignUp')}>SignUp</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
