import { View, Text, Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';

export default function FoodCard({ name, image, price }) {
    return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>${price}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    margin: 10,
  },
  image: {
    width: '100%',
    height: 150,
  },
  textContainer: {
    padding: 10,
    paddingHorizontal:30,
    display:"flex",
    flexDirection:"row",
    alignContent:"center",
    justifyContent:"space-between"
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'black'
  },
  price: {
    fontSize: 16,
    color: 'green',
    marginTop: 5,
  },
});