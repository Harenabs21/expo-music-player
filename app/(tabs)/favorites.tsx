import EmptyFavoriteList from '@/components/favorites/EmptyFavoriteList';
import { StyleSheet, View } from 'react-native';

export default function FavoriteScreen() {
  return (
    <View style={styles.container}>
      <EmptyFavoriteList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fefffe',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
