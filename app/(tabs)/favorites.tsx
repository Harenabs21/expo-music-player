import EmptyFavoriteList from '@/components/favorites/EmptyFavoriteList';
import { TracksList } from '@/components/TracksList';
import { trackTitleFilter } from '@/helpers/filter';
import { generateTracksListId } from '@/helpers/format';
import { useNavigationSearch } from '@/hooks/useNavigationSearch';
import { useFavorites } from '@/stores/library.store';
import { defaultStyles } from '@/styles/default-style.style';
import { useMemo } from 'react';
import { ScrollView, View } from 'react-native';

const FavoritesScreen = () => {
  const search = useNavigationSearch({
    searchBarOptions: {
      placeholder: 'Find in songs',
    },
  });

  const favoritesTracks = useFavorites().favorites;

  const filteredFavoritesTracks = useMemo(() => {
    if (!search) return favoritesTracks;

    return favoritesTracks.filter(trackTitleFilter(search));
  }, [search, favoritesTracks]);

  return (
    <View style={defaultStyles.container}>
      <ScrollView style={{ paddingHorizontal: 24 }} contentInsetAdjustmentBehavior="automatic">
        <TracksList
          id={generateTracksListId('favorites', search)}
          scrollEnabled={false}
          tracks={filteredFavoritesTracks}
          ListEmptyComponent={<EmptyFavoriteList />}
        />
      </ScrollView>
    </View>
  );
};

export default FavoritesScreen;
