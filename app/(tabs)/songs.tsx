import { TracksList } from '@/components/TracksList';
import { trackTitleFilter } from '@/helpers/filter';
import { generateTracksListId } from '@/helpers/format';
import { useNavigationSearch } from '@/hooks/useNavigationSearch';
import { useTracks } from '@/stores/library.store';
import { defaultStyles } from '@/styles/default-style.style';
import { useMemo } from 'react';
import { ScrollView, View } from 'react-native';

const SongsScreen = () => {
  const search = useNavigationSearch({
    searchBarOptions: {
      placeholder: 'Find in songs',
    },
  });

  const tracks = useTracks();

  const filteredTracks = useMemo(() => {
    if (!search) return tracks;

    return tracks.filter(trackTitleFilter(search));
  }, [search, tracks]);

  return (
    <View style={defaultStyles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ paddingHorizontal: 24 }}>
        <TracksList id={generateTracksListId('songs', search)} tracks={filteredTracks} scrollEnabled={false} />
      </ScrollView>
    </View>
  );
};

export default SongsScreen;
