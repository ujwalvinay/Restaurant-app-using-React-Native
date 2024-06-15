import { View, Text, Image, StatusBar, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, SafeAreaView } from 'react-native';

import foodData from './components/data/Items';

import FoodCard from './components/foodCard'
export default function Home() {
  return (
    <View className="bg-white h-full w-full">
    <StatusBar style="light" />
      <View className="h-full w-full bg-black justify-start pt-10  pb-10">
        <Text className="text-white font-bold text-3xl pl-4">Hello Food Lovers</Text>
        <Text className="text-white font-bold text-xl pl-4 pt">Today's specials</Text>
        <View className='h-1/5 w-full mt-4 mb-4'>
            <Image className='h-full w-full ' source={{ uri: 'https://img.freepik.com/free-vector/flat-design-food-sale-background_23-2149167390.jpg' }} />
        </View>
        <SafeAreaView>
      <ScrollView className="pb-10" contentContainerStyle={{ paddingBottom: 200  }}>        
            {foodData.map((item, index) => (
              <FoodCard key={index} name={item.name} image={item.image} price={item.price} />
            ))}
      </ScrollView>
      </SafeAreaView>
      </View>
      
    </View>
  )
}