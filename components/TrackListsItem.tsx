import { unknownTrackImageUri } from '@/constants/images';
import { MyColors } from '@/constants/Colors';
import { defaultStyles } from '@/styles/default-style.style';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Image } from 'expo-image';
import LoaderKit from 'react-native-loader-kit';
import { Track, useActiveTrack, useIsPlaying } from 'react-native-track-player';
import { fontSize } from '@/constants/font-size';

export type TracksListItemProps = {
  track: Track;
  onTrackSelect: (track: Track) => void;
};

export const TracksListItem = ({ track, onTrackSelect: handleTrackSelect }: TracksListItemProps) => {
  const { playing } = useIsPlaying();

  const isActiveTrack = useActiveTrack()?.url === track.url;

  return (
    <TouchableHighlight onPress={() => handleTrackSelect(track)}>
      <View style={styles.trackItemContainer}>
        <View>
          <Image
            source={{
              uri: track.artwork ?? unknownTrackImageUri,
            }}
            style={{
              ...styles.trackArtworkImage,
              opacity: isActiveTrack ? 0.6 : 1,
            }}
          />

          {isActiveTrack &&
            (playing ? (
              <LoaderKit style={styles.trackPlayingIconIndicator} name="LineScaleParty" color={MyColors.icon} />
            ) : (
              <Ionicons style={styles.trackPausedIndicator} name="play" size={24} color={MyColors.icon} />
            ))}
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Track title + artist */}
          <View style={{ width: '100%' }}>
            <Text
              numberOfLines={1}
              style={{
                ...styles.trackTitleText,
                color: isActiveTrack ? MyColors.primary : MyColors.text,
              }}
            >
              {track.title}
            </Text>

            {track.artist && (
              <Text numberOfLines={1} style={styles.trackArtistText}>
                {track.artist}
              </Text>
            )}
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  trackItemContainer: {
    flexDirection: 'row',
    columnGap: 14,
    alignItems: 'center',
    paddingRight: 20,
  },
  trackPlayingIconIndicator: {
    position: 'absolute',
    top: 18,
    left: 16,
    width: 16,
    height: 16,
  },
  trackPausedIndicator: {
    position: 'absolute',
    top: 14,
    left: 14,
  },
  trackArtworkImage: {
    borderRadius: 8,
    width: 50,
    height: 50,
  },
  trackTitleText: {
    ...defaultStyles.text,
    fontSize: fontSize.sm,
    fontWeight: '600',
    maxWidth: '90%',
  },
  trackArtistText: {
    ...defaultStyles.text,
    color: MyColors.textMuted,
    fontSize: 14,
    marginTop: 4,
  },
});
