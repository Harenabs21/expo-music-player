import EmptyPlaylist from '@/components/playlist/EmptyPlaylist';
import { StyleSheet, View } from 'react-native';

export default function PlaylistScreen() {
  return (
    <View style={styles.container}>
      <EmptyPlaylist />
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
