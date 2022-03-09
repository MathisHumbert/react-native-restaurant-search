import { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import useRestaurants from '../hooks/useRestaurants';
import RestaurantItem from './RestaurantItem';

export default function Restaurants({ term }) {
  const [{ data, loading, error }, searchRestaurants] = useRestaurants();

  useEffect(() => {
    searchRestaurants(term);
  }, [term]);

  if (loading) return <ActivityIndicator size='large' marginVertical={30} />;

  if (error)
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{error}</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Top Restaurants</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <RestaurantItem {...item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 15,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 10,
  },
});
