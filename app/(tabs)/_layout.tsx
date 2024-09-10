import React from 'react'
import { Tabs } from 'expo-router'
import { TabBar } from '@/components/TabBar'

export default function TabLayout() {
  return (
    <Tabs tabBar={props => <TabBar {...props}/>}>
        <Tabs.Screen name='index' options={{title: "Home"}} />
        <Tabs.Screen name='schedule' options={{title: "Schedule", headerShown: false}} />
    </Tabs>
  )
}