import { Tabs } from 'expo-router';
import React from 'react';
import TabBar from '@/components/TabBar';

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerStyle: { elevation: 0, shadowOpacity: 0, backgroundColor: '#fefffe' },
        headerTitleStyle: { fontSize: 24, fontWeight: 'bold' },
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="favorites" options={{ title: 'Favorites' }} />
      <Tabs.Screen name="songs" options={{ title: 'Songs' }} />
      <Tabs.Screen name="playlist" options={{ title: 'Playlists' }} />
    </Tabs>
  );
}
