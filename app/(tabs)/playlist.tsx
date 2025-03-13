import { StyleSheet, View, Text } from 'react-native';

export default function PlaylistScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Playlist screen</Text>
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
