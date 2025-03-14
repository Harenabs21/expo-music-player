import ButtonWithIcon from '@/components/buttons/ButtonWithIcon';
import EmptyFavoriteList from '@/components/favorites/EmptyFavoriteList';
import { buttonWithIconStyle } from '@/styles/button-icon.style';
import { Alert, StyleSheet, View } from 'react-native';

export default function FavoriteScreen() {
  const handlePlayButton = () => {
    Alert.alert('you cliked the play button');
  };
  return (
    <View style={styles.container}>
      <EmptyFavoriteList />
      <ButtonWithIcon onPress={handlePlayButton} iconName="play" color="#fefffe" style={buttonWithIconStyle.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fefffe',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
