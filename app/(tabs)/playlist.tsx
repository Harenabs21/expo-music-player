import ButtonWithIcon from '@/components/buttons/ButtonWithIcon';
import EmptyPlaylist from '@/components/playlist/EmptyPlaylist';
import { buttonWithIconStyle } from '@/styles/button-icon.style';
import { Alert, StyleSheet, View } from 'react-native';

export default function PlaylistScreen() {
  const handleAddButton = () => {
    Alert.alert('you cliked the add button');
  };
  return (
    <View style={styles.container}>
      <EmptyPlaylist />
      <ButtonWithIcon onPress={handleAddButton} iconName="plus" color="#fefffe" style={buttonWithIconStyle.button} />
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
