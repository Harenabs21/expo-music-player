import ButtonWithIcon from '@/components/buttons/ButtonWithIcon';
import CreatePlaylistModal from '@/components/playlist/CreatePlayListModal';
import EmptyPlaylist from '@/components/playlist/EmptyPlaylist';
import { buttonWithIconStyle } from '@/styles/button-icon.style';
import { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';

export default function PlaylistScreen() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCreatePlaylist = (name: string) => {
    Alert.alert('Playlist created with name:', name);
  };
  const handleAddButton = () => {
    setIsModalVisible(true);
  };
  return (
    <View style={styles.container}>
      <EmptyPlaylist />
      <ButtonWithIcon onPress={handleAddButton} iconName="plus" color="#fefffe" style={buttonWithIconStyle.button} />
      <CreatePlaylistModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onSubmit={handleCreatePlaylist}
      />
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
