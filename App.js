import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from './src/components/Header';
import Search from './src/components/Search';
import Categories from './src/components/Categories';

export default function App() {
  const [term, setTerm] = useState('Burger');

  const commonCategories = [
    {
      name: 'Burger',
      imageUrl: require('./src/assets/images/burger.png'),
    },
    {
      name: 'Pizza',
      imageUrl: require('./src/assets/images/pizza.png'),
    },
    {
      name: 'Dessert',
      imageUrl: require('./src/assets/images/cake.png'),
    },
    {
      name: 'Drinks',
      imageUrl: require('./src/assets/images/smoothies.png'),
    },
    {
      name: 'Steak',
      imageUrl: require('./src/assets/images/steak.png'),
    },
    {
      name: 'Pasta',
      imageUrl: require('./src/assets/images/pasta.png'),
    },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <Search setTerm={setTerm} />
      <Categories categories={commonCategories} setTerm={setTerm} term={term} />
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({});
