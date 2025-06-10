import { View, Text, TextInput, TouchableOpacity, Image, Dimensions, Animated, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useRef, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'
import { Colors } from '../../assets/Colors'
import { BlurView } from 'expo-blur'
import * as Haptics from 'expo-haptics'

const { width } = Dimensions.get('window')

export default function Signup() {
  const router = useRouter()
  const fadeAnim = useRef(new Animated.Value(0)).current
  const slideAnim = useRef(new Animated.Value(50)).current

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      })
    ]).start()
  }, [])

  const handleSignUp = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
    // TODO: Implement sign up logic
    router.push('/(tabs)')
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={['#1a0611', '#4a0e2b', '#7d1538', '#b91c3c']}
        style={{ flex: 1 }}
      >
        <KeyboardAvoidingView 
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}
        >
          <View style={{ flex: 1, position: 'relative' }}>
            {/* Decorative Elements */}
            <View style={{ position: 'absolute', top: 50, right: 20, opacity: 0.1 }}>
              <Text style={{ fontSize: 100, color: '#fff' }}>✨</Text>
            </View>
            
            <View style={{ position: 'absolute', bottom: 100, left: 30, opacity: 0.1 }}>
              <Text style={{ fontSize: 80, color: '#fff' }}>💫</Text>
            </View>

            <Animated.View 
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                opacity: fadeAnim,
                transform: [{ translateY: slideAnim }],
                paddingHorizontal: 30
              }}
            >
              {/* Logo Section */}
              <View style={{ alignItems: 'center', marginBottom: 40 }}>
                <Image 
                  source={require('../../assets/images/DreamSoul.png')} 
                  style={{ width: 120, height: 120 }}
                  resizeMode="contain"
                />
                <Text style={{
                  fontSize: 32,
                  fontWeight: 'bold',
                  color: '#fff',
                  marginTop: 10,
                  letterSpacing: 2
                }}>
                  Join DreamSoul
                </Text>
              </View>

              {/* Sign Up Form */}
              <BlurView intensity={20} style={{
                width: width - 60,
                borderRadius: 20,
                overflow: 'hidden',
                borderWidth: 1,
                borderColor: 'rgba(255, 255, 255, 0.2)',
                padding: 20
              }}>
                <View style={{ marginBottom: 20 }}>
                  <Text style={{ color: '#fff', marginBottom: 8, fontSize: 16 }}>Email</Text>
                  <TextInput
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: 12,
                      padding: 15,
                      color: '#fff',
                      borderWidth: 1,
                      borderColor: 'rgba(255, 255, 255, 0.2)'
                    }}
                    placeholder="Enter your email"
                    placeholderTextColor="rgba(255, 255, 255, 0.5)"
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                </View>

                <View style={{ marginBottom: 25 }}>
                  <Text style={{ color: '#fff', marginBottom: 8, fontSize: 16 }}>Password</Text>
                  <TextInput
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: 12,
                      padding: 15,
                      color: '#fff',
                      borderWidth: 1,
                      borderColor: 'rgba(255, 255, 255, 0.2)'
                    }}
                    placeholder="Create a password"
                    placeholderTextColor="rgba(255, 255, 255, 0.5)"
                    secureTextEntry
                  />
                </View>

                <TouchableOpacity 
                  onPress={handleSignUp}
                  style={{
                    backgroundColor: Colors.PRIMARY,
                    paddingVertical: 15,
                    borderRadius: 12,
                    alignItems: 'center',
                    marginBottom: 20
                  }}
                >
                  <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>
                    Create Account
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  onPress={() => router.push('/signin')}
                  style={{ alignItems: 'center' }}
                >
                  <Text style={{ color: '#fff', fontSize: 14 }}>
                    Already have an account? <Text style={{ color: Colors.PRIMARY, fontWeight: 'bold' }}>Sign In</Text>
                  </Text>
                </TouchableOpacity>
              </BlurView>
            </Animated.View>
          </View>
        </KeyboardAvoidingView>
      </LinearGradient>
    </SafeAreaView>
  )
}