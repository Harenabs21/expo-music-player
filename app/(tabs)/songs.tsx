import { StyleSheet, View, Text } from 'react-native';

export default function SongScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Song screen</Text>
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
