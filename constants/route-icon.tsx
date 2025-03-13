import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export const TabButtonIcons =  {
    index: (props: any) => <FontAwesome name='home' size={24} {...props}/>,
    favorites: (props: any) => <FontAwesome name='heart' size={24} {...props}/>,
    songs: (props: any) => <MaterialIcons name='music-note' size={24} {...props}/>,
    playlist: (props: any) => <MaterialIcons name='playlist-play' size={24} {...props}/>,
}