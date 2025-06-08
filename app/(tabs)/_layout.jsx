import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabLayout = () => {
  return (
    <Tabs screenOptions={{headerShown:false , tabBarActiveTintColor:}}>
        <Tabs.Screen name='home' options={{title:"Home"}} />
        <Tabs.Screen name='pair' options={{title:"Pair"}} />
        <Tabs.Screen name='post' options={{title:"Post"}} />
        <Tabs.Screen name='chats' options={{title:"Chats"}} />
        <Tabs.Screen name='profile' options={{title:"Profile"}} />
        <Tabs.Screen name='notifications' options={{title:"Notifications"}} />
    </Tabs>
  )
}

export default TabLayout