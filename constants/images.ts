import { Image } from 'react-native';

export const emptyPlayListImageUri = Image.resolveAssetSource(
  require('@/assets/images/illustrations/undraw_playlist.png')
).uri;
export const emptyFavoriteListImageUri = Image.resolveAssetSource(
  require('@/assets/images/illustrations/undraw_happy-music.png')
).uri;

export const unknownTrackImageUri = Image.resolveAssetSource(
  require('@/assets/images/illustrations/unknown_track.png')
);
