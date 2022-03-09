import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet } from 'react-native';
import Header from './src/components/Header';
import Search from './src/components/Search';
import CategoryItem from './src/components/CategoryItem';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Search />
      <StatusBar />
      <CategoryItem />
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   backgroundColor: '#fff',
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
