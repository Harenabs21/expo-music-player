import { PlayerControls } from '@/components/PlayerControls';
import { PlayerProgressBar } from '@/components/PlayerProgressbar';
import { PlayerRepeatToggle } from '@/components/PlayerRepeatToggle';
import { StyleSheet, View } from 'react-native';
import { utilsStyles } from '@/styles/default-style.style';

export const PlayerActions = () => {
  return (
    <View style={styles.container}>
      <PlayerProgressBar style={styles.progressBar} />
      <PlayerControls style={styles.controls} />
      <View style={utilsStyles.centeredRow}>
        <PlayerRepeatToggle size={30} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  progressBar: {
    marginTop: 32,
  },
  controls: {
    marginTop: 40,
  },
});
