import { View } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { TabBarStyle } from '@/styles/tab-bar.style';
import TabBarButton from './TabBarButton';

export default function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
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
          <TabBarButton
            key={route.name}
            onPress={onPress}
            onLongPress={onLongPress}
            routeName={route.name}
            isFocused={isFocused}
            label={label}
          />
        );
      })}
    </View>
  );
}
