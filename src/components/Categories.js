import { FlatList, View } from 'react-native';
import CategoryItem from './CategoryItem';

export default function Categories({ categories, setTerm, term }) {
  return (
    <View>
      <FlatList
        data={categories}
        renderItem={({ item, index }) => {
          return (
            <CategoryItem
              {...item}
              index={index}
              active={item.name == term}
              handlePress={() => setTerm(item.name)}
            />
          );
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}
