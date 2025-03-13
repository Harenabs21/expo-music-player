import { StyleSheet, View, Text } from 'react-native';

export default function FavoriteScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Favorites screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
