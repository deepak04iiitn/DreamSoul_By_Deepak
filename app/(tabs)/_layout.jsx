import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Colors } from '../../assets/Colors'
import Ionicons from '@expo/vector-icons/Ionicons'

const TabLayout = () => {
  return (
    <Tabs screenOptions={{headerShown: false , tabBarActiveTintColor: Colors.PRIMARY , 
        tabBarInactiveTintColor: Colors.dark.text ,
        tabBarStyle: {
            backgroundColor: Colors.SECONDARY,
            paddingBottom: 14,
            height: 75
        },
        tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold"
        }
    }}>

        <Tabs.Screen name='home' options={{title:"Home" , tabBarIcon: ({color}) => (
            <Ionicons name='home' size={24} color={color}/>
        )}} />

        <Tabs.Screen name='pair' options={{title:"Pair" , tabBarIcon: ({color}) => (
            <Ionicons name="heart-circle-sharp" size={24} color={color} />
        )}} />

        <Tabs.Screen name='post' options={{title:"Post" , tabBarIcon: ({color}) => (
            <Ionicons name="add-circle-sharp" size={24} color={color} />
        )}} />

        <Tabs.Screen name='chats' options={{title:"Chats" , tabBarIcon: ({color}) => (
            <Ionicons name="chatbubble-ellipses-sharp" size={24} color={color} />
        )}} />

        <Tabs.Screen name='profile' options={{title:"Profile" , tabBarIcon: ({color}) => (
            <Ionicons name="person-circle-sharp" size={24} color={color} />
        )}} />

        <Tabs.Screen name='notifications' options={{title:"Notifications" , tabBarIcon: ({color}) => (
            <Ionicons name="notifications" size={24} color={color} />
        )}} />

    </Tabs>
  )
}

export default TabLayout