import { MovingText } from '@/components/MovingText';
import { useTrackPlayerFavorite } from '@/hooks/useTrackPlayerFavorite';
import { MyColors } from '@/constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

interface TrackDetailsProps {
  track: {
    title: string;
    artist?: string;
  };
}

export const TrackDetails = ({ track }: TrackDetailsProps) => {
  const { isFavorite, toggleFavorite } = useTrackPlayerFavorite();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <MovingText text={track.title} animationThreshold={30} style={styles.title} />
        <FontAwesome
          name={isFavorite ? 'heart' : 'heart-o'}
          size={20}
          color={isFavorite ? MyColors.primary : MyColors.icon}
          onPress={toggleFavorite}
          style={styles.favoriteIcon}
        />
      </View>
      {track.artist && <Text style={styles.artist}>{track.artist}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    flex: 1,
  },
  favoriteIcon: {
    marginHorizontal: 14,
  },
  artist: {
    fontSize: 16,
    opacity: 0.8,
    marginTop: 6,
  },
});
