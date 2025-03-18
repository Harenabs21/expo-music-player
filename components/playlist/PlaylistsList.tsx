import { PlaylistListItem } from './PlaylisListItem';
import { playlistNameFilter } from '@/helpers/filter';
import { Playlist } from '@/helpers/types';
import { useNavigationSearch } from '@/hooks/useNavigationSearch';
import { utilsStyles } from '@/styles/default-style.style';
import { useMemo } from 'react';
import { FlatList, FlatListProps, Text, View } from 'react-native';
import EmptyPlaylist from './EmptyPlaylist';

type PlaylistsListProps = {
  playlists: Playlist[];
  onPlaylistPress: (playlist: Playlist) => void;
} & Partial<FlatListProps<Playlist>>;

const ItemDivider = () => <View style={{ ...utilsStyles.itemSeparator, marginLeft: 80, marginVertical: 12 }} />;

export const PlaylistsList = ({
  playlists,
  onPlaylistPress: handlePlaylistPress,
  ...flatListProps
}: PlaylistsListProps) => {
  const search = useNavigationSearch({
    searchBarOptions: {
      placeholder: 'Find in playlist',
    },
  });

  const filteredPlaylist = useMemo(() => {
    return playlists.filter(playlistNameFilter(search));
  }, [playlists, search]);

  return (
    <FlatList
      contentContainerStyle={{ paddingTop: 10, paddingBottom: 128 }}
      ItemSeparatorComponent={ItemDivider}
      ListFooterComponent={ItemDivider}
      ListEmptyComponent={<EmptyPlaylist />}
      data={filteredPlaylist}
      renderItem={({ item: playlist }) => (
        <PlaylistListItem playlist={playlist} onPress={() => handlePlaylistPress(playlist)} />
      )}
      {...flatListProps}
    />
  );
};
