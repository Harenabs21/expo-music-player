import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text, Button, Alert } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import MusicCard from '@/components/MusicCard';

export default function SongScreen() {
  const [songs, setSongs] = useState<MediaLibrary.Asset[]>([]);
  const [permissionGranted, setPermissionGranted] = useState(false);

  const requestPermissions = async () => {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    setPermissionGranted(status === 'granted');
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'We need access to your media files to list songs.');
    }
  };

  const loadSongs = async () => {
    try {
      const media = await MediaLibrary.getAssetsAsync({
        mediaType: MediaLibrary.MediaType.audio,
        first: 50,
      });
      const mp3Files = media.assets.filter((file) => file.filename.endsWith('.mp3'));
      setSongs(mp3Files);
    } catch (error) {
      console.error('Error loading songs:', error);
    }
  };

  useEffect(() => {
    requestPermissions();
  }, []);

  useEffect(() => {
    if (permissionGranted) {
      loadSongs();
    }
  }, [permissionGranted]);

  const renderSongItem = ({ item }: { item: MediaLibrary.Asset }) => (
    <MusicCard
      title={item.filename}
      artist="Unknown Artist" // Vous pouvez intégrer un service pour récupérer cette information
      duration={item.duration}
    />
  );

  return (
    <View style={styles.container}>
      {permissionGranted ? (
        <>
          <Button title="Refresh Songs" onPress={loadSongs} />
          <FlatList
            data={songs}
            keyExtractor={(item) => item.id}
            renderItem={renderSongItem}
            ListEmptyComponent={<Text>No MP3 files found.</Text>}
          />
        </>
      ) : (
        <Text>Requesting permissions...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fefffe',
  },
});
