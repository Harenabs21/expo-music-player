import { StyleSheet } from 'react-native';

export const TabBarStyle = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#a5a1a1',
    shadowOpacity: 0.5,
    shadowRadius: 26,
    shadowOffset: { width: 20, height: 20 },
    padding: 12,
    backgroundColor: 'transparent',
  },
  tabBarItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
});
