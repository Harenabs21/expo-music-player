import { StyleSheet, View } from 'react-native';
import { Image } from 'expo-image';

export const ArtworkDisplay = ({ artwork }: { artwork?: string }) => {
  return (
    <View style={styles.artworkContainer}>
      <Image source={{ uri: artwork ?? require('@/assets/images/unknown_track.png') }} style={styles.artwork} />
    </View>
  );
};

const styles = StyleSheet.create({
  artworkContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '45%',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.44,
    shadowRadius: 11,
  },
  artwork: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
    resizeMode: 'cover',
  },
});
