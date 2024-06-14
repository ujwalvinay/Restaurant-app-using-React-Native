import { View, Text, Image, StatusBar, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, SafeAreaView } from 'react-native';

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
      <FoodCard 
          name="Delicious Cake"
          image="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/rainbow_cake_20402_16x9.jpg"
          price="20.00"
        />
        <FoodCard
          name="croissant"
          image="https://www.shutterstock.com/image-photo/single-plain-croissant-on-white-260nw-2318302719.jpg"
          price="5.00"
        />
        <FoodCard
          name="Donut"
          image="https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2022/02/colorful-glazed-donuts.jpg"
          price="5.00"
        />
        <FoodCard
          name="Macarons"
          image="https://blog.ciachef.edu/wp-content/uploads/2016/11/Macarons.jpg"
          price="5.00"
        />
        {/* Add more ItemCard components as needed */}
      </ScrollView>
      </SafeAreaView>
      </View>
      
    </View>
  )
}