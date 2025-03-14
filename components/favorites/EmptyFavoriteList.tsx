import { emptyFavoriteListImageUri } from '@/constants/images';
import { Image } from 'expo-image';
import { View, Text } from 'react-native';
import { emptyListComponentStyle } from '@/styles/empty-list.style';

export default function EmptyFavoriteList() {
  return (
    <View style={emptyListComponentStyle.container}>
      <Image source={{ uri: emptyFavoriteListImageUri }} style={emptyListComponentStyle.image} contentFit="contain" />
      <Text style={emptyListComponentStyle.message}>Why not add your favorite tunes?</Text>
      <Text style={emptyListComponentStyle.subMessage}>
        Discover new favorites and curate your own music collection right here!
      </Text>
    </View>
  );
}
