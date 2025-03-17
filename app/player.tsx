import { PlayerActions } from '@/components/player-screen/PlayerActions';
import { TrackDetails } from '@/components/player-screen/TrackDetails';
import { ArtworkDisplay } from '@/components/player-screen/ArtworkDisplay';
import { DismissPlayerSymbol } from '@/components/player-screen/DismissPlayerSymbol';
import { MyColors } from '@/constants/Colors';
import { usePlayerBackground } from '@/hooks/usePlayerBackground';
import { useActiveTrack } from 'react-native-track-player';
import { LinearGradient } from 'expo-linear-gradient';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { defaultStyles } from '@/styles/default-style.style';

const PlayerScreen = () => {
  const activeTrack = useActiveTrack();
  const { imageColors } = usePlayerBackground(activeTrack?.artwork ?? require('@/assets/images/unknown_track.png'));
  const { top, bottom } = useSafeAreaInsets();

  if (!activeTrack) {
    return (
      <View style={[defaultStyles.container, { justifyContent: 'center' }]}>
        <ActivityIndicator color={MyColors.icon} />
      </View>
    );
  }

  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={imageColors ? [imageColors?.dominant, imageColors?.average] : ['#056070', '#9bbfc6']}
    >
      <View style={styles.overlayContainer}>
        <DismissPlayerSymbol />

        <View style={{ flex: 1, marginTop: top + 70, marginBottom: bottom }}>
          <ArtworkDisplay artwork={activeTrack.artwork} />
          <TrackDetails
            track={{
              title: activeTrack.title ?? '',
              artist: activeTrack.artist,
            }}
          />
          <PlayerActions />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  overlayContainer: {
    ...defaultStyles.container,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

export default PlayerScreen;
