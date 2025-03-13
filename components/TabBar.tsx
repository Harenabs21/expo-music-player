import { View } from 'react-native';
import { useLinkBuilder } from '@react-navigation/native';
import { Text, PlatformPressable } from '@react-navigation/elements';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { TabBarStyle } from '@/styles/tab-bar.style';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { MyColors } from '@/constants/Colors';


export default function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
    
  const { buildHref } = useLinkBuilder();

  const TabIcons = {
    index: (props: any) => <FontAwesome name='home' size={24} {...props}/>,
    favorites: (props: any) => <FontAwesome name='heart' size={24} {...props}/>,
    songs: (props: any) => <MaterialIcons name='music-note' size={24} {...props}/>,
    playlist: (props: any) => <MaterialIcons name='playlist-play' size={24} {...props}/>,
  }

  return (
    <View style={TabBarStyle.tabBarContainer}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <PlatformPressable
              key={route.name}
              href={buildHref(route.name, route.params)}
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarButtonTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={TabBarStyle.tabBarItem}
            >
          
            {
              TabIcons[route.name as keyof typeof TabIcons]({
                  color: isFocused ? MyColors.primary : MyColors.textMuted,
                  })
              }
              <Text style={{ color: isFocused ? MyColors.primary : MyColors.textMuted }}>
                  {typeof label === 'function' ? label({ focused: isFocused, color: isFocused ? MyColors.primary : MyColors.textMuted, position:'below-icon', children: '' }) : label}
              </Text>
            </PlatformPressable>
          );
        })
      }
    </View>
  );
}
