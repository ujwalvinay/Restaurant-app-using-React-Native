import { View, Text, Image, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Animated,{ FadeIn,FadeInUp, FadeOut } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';


export default function SignupScreen() {
 const navigation = useNavigation();
  return (
    <View className="bg-white h-full w-full pt-5">
    <StatusBar style="light"></StatusBar>
      <Image className='h-full w-full absolute' source={{uri:'https://images.pexels.com/photos/1819669/pexels-photo-1819669.jpeg'}}
      />
       <View className="flex-row justify-center w-full absolute">
         <Animated.Image entering={FadeInUp.delay(200).duration(1000).springify()} className='h-[200] w-[200] pt-10' source={{uri:'https://ujwalvinay.com/project/bakery-logo.png'}}
         />
         
       </View>

       {/* Login Form */}
       <View className="h-full w-full justify-around pt-40 pb-10">
           {/* title */}
           <View className="flex items-center">
             <Animated.Text entering={FadeInUp.delay(300).duration(1000)} className="text-white font-bold tracking-wider text-3xl">
               Sign Up Now !
             </Animated.Text>
             <Animated.Text entering={FadeInUp.delay(400).duration(1000)} className="text-white tracking-wider w-4/6 text-center pt-5 text-base">
               Fill in the credentials to create your account.
             </Animated.Text>
           </View>
           <View className="flex items-center mx-4 space-y-3">
             <Animated.View entering={FadeInUp.delay(500).duration(1000)} className="bg-white p-5 rounded-2xl w-11/12">
               <TextInput placeholder='Email' placeholderTextColor={'gray'}/>
             </Animated.View>
             <Animated.View entering={FadeInUp.delay(550).duration(1000)} className="bg-white p-5 rounded-2xl w-11/12">
               <TextInput placeholder='Username' placeholderTextColor={'gray'}/>
             </Animated.View>
             <Animated.View entering={FadeInUp.delay(600).duration(1000)} className="bg-white p-5 rounded-2xl w-11/12 mb-3">
               <TextInput placeholder='Password' secureTextEntry placeholderTextColor={'gray'}/>
             </Animated.View>
             <Animated.View entering={FadeInUp.delay(650).duration(1000)} className="bg-white p-5 rounded-2xl w-11/12 mb-3">
               <TextInput placeholder='Confirm Password' secureTextEntry placeholderTextColor={'gray'}/>
             </Animated.View>
             <Animated.View entering={FadeInUp.delay(700).duration(1000)} className="w-full">
               <TouchableOpacity className="w-11/12 m-auto bg-sky-400 p-3 rounded-2xl mb-3">
                 <Text className="xl font-bold text-white text-center">Sign Up</Text>
               </TouchableOpacity>
             </Animated.View>
             <View className="flex-row gap-3 justify-center">
               <Text className='text-white'>Already have an account? </Text>
               <TouchableOpacity>
                 <Text className='text-sky-600' onPress={()=>navigation.push('LogIn')}>LogIn</Text>
               </TouchableOpacity>
             </View>
           </View>
       </View>
    </View>
  )
}