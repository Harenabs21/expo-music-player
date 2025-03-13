import { MyColors } from "@/constants/Colors";
import { TabButtonIcons } from "@/constants/route-icon";
import { TabBarStyle } from "@/styles/tab-bar.style";
import { PlatformPressable, Text } from "@react-navigation/elements";

interface ButtonProps {
    onPress: () => void,
    onLongPress: () => void,
    routeName: string,
    isFocused: boolean,
    label: any,
}

export default function TabBarButton({onPress, onLongPress, routeName, isFocused, label}: ButtonProps){
    return (
    <PlatformPressable
        onPress={onPress}
        onLongPress={onLongPress}
        style={TabBarStyle.tabBarItem}
    >
    
        {
        TabButtonIcons[routeName as keyof typeof TabButtonIcons]({
            color: isFocused ? MyColors.primary : MyColors.textMuted,
            })
        }
        {isFocused && (
        <Text style={{ color: isFocused ? MyColors.primary : MyColors.textMuted }}>
            {typeof label === 'function' ? label({ focused: isFocused, color: isFocused ? MyColors.primary : MyColors.textMuted, position:'below-icon', children: '' }) : label}
        </Text>
        )}
    </PlatformPressable>
    )
}