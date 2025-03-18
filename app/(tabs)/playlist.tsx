import ButtonWithIcon from '@/components/buttons/ButtonWithIcon';
import CreatePlaylistModal from '@/components/playlist/CreatePlayListModal';
import { defaultStyles } from '@/styles/default-style.style';
import { PlaylistsList } from '@/components/playlist/PlaylistsList';
import { buttonWithIconStyle } from '@/styles/button-icon.style';
import { useMemo, useState } from 'react';
import { ScrollView } from 'react-native';
import { Alert, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useNavigationSearch } from '@/hooks/useNavigationSearch';
import { usePlaylists } from '@/stores/library.store';
import { Playlist } from '@/helpers/types';
import { playlistNameFilter } from '@/helpers/filter';

export default function PlaylistScreen() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const router = useRouter();

  const search = useNavigationSearch({
    searchBarOptions: {
      placeholder: 'Find in playlists',
    },
  });

  const { playlists, addToPlaylist } = usePlaylists();

  const filteredPlaylists = useMemo(() => {
    return playlists.filter(playlistNameFilter(search));
  }, [playlists, search]);

  const handlePlaylistPress = (playlist: Playlist) => {
    router.push(`/(tabs)/playlist`);
  };

  const handleCreatePlaylist = (name: string) => {
    Alert.alert('Playlist created with name:', name);
  };
  const handleAddButton = () => {
    setIsModalVisible(true);
  };
  return (
    <View style={defaultStyles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{
          paddingHorizontal: 24,
        }}
      >
        <PlaylistsList scrollEnabled={false} playlists={filteredPlaylists} onPlaylistPress={handlePlaylistPress} />
      </ScrollView>
      <ButtonWithIcon onPress={handleAddButton} iconName="plus" color="#fefffe" style={buttonWithIconStyle.button} />
      <CreatePlaylistModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onSubmit={handleCreatePlaylist}
      />
    </View>
  );
}
