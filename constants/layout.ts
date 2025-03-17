import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { MyColors } from './Colors';

export const StackScreenWithSearchBar: NativeStackNavigationOptions = {
  headerLargeTitle: true,
  headerLargeStyle: {
    backgroundColor: MyColors.background,
  },
  headerLargeTitleStyle: {
    color: MyColors.text,
  },
  headerTintColor: MyColors.text,
  headerTransparent: true,
  headerBlurEffect: 'prominent',
  headerShadowVisible: false,
};
