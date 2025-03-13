import { MyColors } from "@/constants/Colors";
import { TabButtonIcons } from "@/constants/route-icon";
import { TabBarStyle } from "@/styles/tab-bar.style";
import { PlatformPressable } from "@react-navigation/elements";
import { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import Animated from "react-native-reanimated";

interface ButtonProps {
    onPress: () => void,
    onLongPress: () => void,
    routeName: string,
    isFocused: boolean,
    label: any,
}

export default function TabBarButton({onPress, onLongPress, routeName, isFocused, label}: ButtonProps){

    // icon animation
    const scale = useSharedValue(isFocused ? 1.2: 1)

    scale.value = withTiming(isFocused ? 1.2 : 1, { duration: 200 });

    const animatedIconStyle = useAnimatedStyle(() =>({
        transform: [{ scale: scale.value }]
    }))

    // label animation

    const labelOpacity = useSharedValue(isFocused ? 1 : 0);

    labelOpacity.value = withTiming(isFocused ? 1 : 0, { duration: 400 });

    const animatedTextStyle = useAnimatedStyle(() => ({
      opacity: labelOpacity.value,
    }));

    return (
    <PlatformPressable
        onPress={onPress}
        onLongPress={onLongPress}
        style={TabBarStyle.tabBarItem}
    >
     <Animated.View style={animatedIconStyle}>
     {
        TabButtonIcons[routeName as keyof typeof TabButtonIcons]({
            color: isFocused ? MyColors.primary : MyColors.textMuted,
            })
     }
     </Animated.View>      
        
        {isFocused && (
        <Animated.Text style={[{ color: isFocused ? MyColors.primary : MyColors.textMuted }, animatedTextStyle]}>
            {typeof label === 'function' ? label({ focused: isFocused, color: isFocused ? MyColors.primary : MyColors.textMuted, position:'below-icon', children: '' }) : label}
        </Animated.Text>
        )}
    </PlatformPressable>
    )
}