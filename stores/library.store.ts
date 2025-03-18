import { Artist, Playlist, TrackWithPlaylist } from '@/helpers/types';
import * as MusicLibrary from 'expo-music-library';
import { Track } from 'react-native-track-player';
import { create } from 'zustand';

interface LibraryState {
  tracks: TrackWithPlaylist[];
  fetchTracks: () => Promise<void>;
  toggleTrackFavorite: (track: Track) => void;
  addToPlaylist: (track: Track, playlistName: string) => void;
}

export const useLibraryStore = create<LibraryState>()((set) => ({
  tracks: [],

  fetchTracks: async () => {
    try {
      const { granted } = await MusicLibrary.requestPermissionsAsync();
      if (!granted) return;

      let allTracks: TrackWithPlaylist[] = [];
      let hasNextPage = true;
      let endCursor: any;

      while (hasNextPage) {
        const {
          assets,
          endCursor: nextCursor,
          hasNextPage: nextPage,
        } = await MusicLibrary.getAssetsAsync({
          first: 20,
          after: endCursor,
        });

        const filteredAssets = assets.filter((asset) => asset.mediaType === 'audio');

        const formattedTracks: TrackWithPlaylist[] = filteredAssets.map((asset) => ({
          id: asset.id,
          url: asset.uri,
          title: asset.title ?? 'Unknown title',
          artist: asset.artist ?? 'Unknown Artist',
          album: asset.albumId ?? 'Unknown Album',
          duration: asset.duration ?? 0,
          artwork: asset.artwork,
          playlist: [],
        }));

        allTracks = [...allTracks, ...formattedTracks];
        endCursor = nextCursor;
        hasNextPage = nextPage;
      }

      // Sort by title alphabetically
      allTracks.sort((a, b) => {
        const titleA = (a.title ?? '').toUpperCase();
        const titleB = (b.title ?? '').toUpperCase();
        return titleA.localeCompare(titleB);
      });

      set((state) => {
        if (JSON.stringify(state.tracks) !== JSON.stringify(allTracks)) {
          return { tracks: allTracks };
        }
        return state;
      });
    } catch (error) {
      console.error('Error fetching tracks:', error);
    }
  },

  toggleTrackFavorite: (track) =>
    set((state) => ({
      tracks: state.tracks.map((currentTrack) => {
        if (currentTrack.url === track.url) {
          return {
            ...currentTrack,
            rating: currentTrack.rating === 1 ? 0 : 1,
          };
        }

        return currentTrack;
      }),
    })),

  addToPlaylist: (track, playlistName) =>
    set((state) => ({
      tracks: state.tracks.map((currentTrack) => {
        if (currentTrack.url === track.url) {
          return {
            ...currentTrack,
            playlist: [...(currentTrack.playlist ?? []), playlistName],
          };
        }

        return currentTrack;
      }),
    })),
}));

export const useTracks = () => useLibraryStore((state) => state.tracks);

export const useFavorites = () => {
  const favorites = useLibraryStore((state) => state.tracks.filter((track) => track.rating === 1));
  const toggleTrackFavorite = useLibraryStore((state) => state.toggleTrackFavorite);

  return {
    favorites,
    toggleTrackFavorite,
  };
};

export const useArtists = () =>
  useLibraryStore((state) => {
    return state.tracks.reduce((acc, track) => {
      const existingArtist = acc.find((artist) => artist.name === track.artist);

      if (existingArtist) {
        existingArtist.tracks.push(track);
      } else {
        acc.push({
          name: track.artist ?? 'Unknown',
          tracks: [track],
        });
      }

      return acc;
    }, [] as Artist[]);
  });

export const usePlaylists = () => {
  const unknownImageUri = '@/assets/images/unknown_track.png';
  const playlists = useLibraryStore((state) => {
    return state.tracks.reduce((acc, track) => {
      track.playlist?.forEach((playlistName) => {
        const existingPlaylist = acc.find((playlist) => playlist.name === playlistName);

        if (existingPlaylist) {
          existingPlaylist.tracks.push(track);
        } else {
          acc.push({
            name: playlistName,
            tracks: [track],
            artworkPreview: track.artwork ?? require(unknownImageUri),
          });
        }
      });

      return acc;
    }, [] as Playlist[]);
  });

  const addToPlaylist = useLibraryStore((state) => state.addToPlaylist);

  return { playlists, addToPlaylist };
};
