import { emptyPlayListImageUri } from '@/constants/images';
import { Image } from 'expo-image';
import { View, Text } from 'react-native';
import { emptyListComponentStyle } from '@/styles/empty-list.style';

export default function EmptyPlaylist() {
  return (
    <View style={emptyListComponentStyle.container}>
      <Image source={{ uri: emptyPlayListImageUri }} style={emptyListComponentStyle.image} contentFit="contain" />
      <Text style={emptyListComponentStyle.message}>You don't have any playlists yet.</Text>
      <Text style={emptyListComponentStyle.subMessage}>
        Start by creating your first playlist to enjoy your favorite music.
      </Text>
    </View>
  );
}
