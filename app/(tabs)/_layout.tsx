import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {

  return (
    <Tabs>
      <Tabs.Screen name="index" options={{title: 'Home'}}/>
      <Tabs.Screen name="favorites" options={{title: 'Favorites'}}/>
      <Tabs.Screen name="songs" options={{title: 'Songs'}}/>
      <Tabs.Screen name="playlist" options={{title: 'Playlists'}}/>
    </Tabs>
  );
}
