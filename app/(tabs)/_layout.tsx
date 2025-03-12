import { Tabs } from 'expo-router';
import React from 'react';
import TabBar from '@/components/TabBar';
import { BlurView } from 'expo-blur';
import { StyleSheet } from 'react-native';

export default function TabLayout() {

  return (
    <Tabs tabBar={(props) => <TabBar {...props}/>} 
      screenOptions={{headerShown: false,
        tabBarBackground: () => (
          <BlurView
            intensity={80}
            style={{
              ...StyleSheet.absoluteFillObject,
              overflow: 'hidden',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
          />
        ),
      }}>
      <Tabs.Screen name="index" options={{title: 'Home'}}/>
      <Tabs.Screen name="favorites" options={{title: 'Favorites'}}/>
      <Tabs.Screen name="songs" options={{title: 'Songs'}}/>
      <Tabs.Screen name="playlist" options={{title: 'Playlists'}}/>
    </Tabs>
  );
}
