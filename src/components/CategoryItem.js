import { Text, View, StyleSheet, Image } from 'react-native';
import { elevation } from '../common/styles';

export default function CategoryItem() {
  return (
    <View style={[styles.container, styles.elevation]}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/burger.png')}
        />
      </View>
      <Text style={styles.header}>Burger</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 100,
    borderRadius: 50,
    marginVertical: 15,
    marginHorizontal: 25,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  elevation,
  image: {
    width: 35,
    height: 35,
  },
  imageContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginBottom: 5,
  },
  header: {
    fontWeight: 'bold',
  },
});
