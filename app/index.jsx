import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View, Image, Dimensions, Animated } from "react-native";
import { useEffect, useRef, useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

export default function Index() {
  const router = useRouter();
  const slideAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const heartbeatAnim = useRef(new Animated.Value(1)).current;
  const [currentPillar, setCurrentPillar] = useState(0);

  const pillars = [
    {
      title: "Voice-First Matching",
      description: "Connect hearts through authentic voices, not just faces",
      icon: "🎙️"
    },
    {
      title: "Interests & Hobbies",
      description: "Find your perfect match through shared passions and activities",
      icon: "🎨"
    },
    {
      title: "Dream & Thought Journal",
      description: "Connect through the depths of your dreams and innermost thoughts",
      icon: "✨"
    }
  ];

  useEffect(() => {
    // Initial fade in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // Heartbeat animation
    const createHeartbeat = () => {
      Animated.sequence([
        Animated.timing(heartbeatAnim, {
          toValue: 1.2,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(heartbeatAnim, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(heartbeatAnim, {
          toValue: 1.15,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(heartbeatAnim, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.delay(1000)
      ]).start(() => createHeartbeat());
    };

    createHeartbeat();

    // Auto-slide pillars
    const interval = setInterval(() => {
      setCurrentPillar((prev) => (prev + 1) % pillars.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Slide animation for pillars
    Animated.timing(slideAnim, {
      toValue: currentPillar,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [currentPillar]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={['#1a0611', '#4a0e2b', '#7d1538', '#b91c3c']}
        style={{ flex: 1 }}
      >
        <View style={{ flex: 1, position: 'relative' }}>
          {/* Romantic Background Elements */}
          <View style={{
            position: 'absolute',
            top: 50,
            right: 20,
            opacity: 0.1
          }}>
            <Text style={{ fontSize: 100, color: '#fff' }}>🌹</Text>
          </View>
          
          <View style={{
            position: 'absolute',
            bottom: 100,
            left: 30,
            opacity: 0.1
          }}>
            <Text style={{ fontSize: 80, color: '#fff' }}>💕</Text>
          </View>

          <View style={{
            position: 'absolute',
            top: 200,
            left: 50,
            opacity: 0.05
          }}>
            <Text style={{ fontSize: 60, color: '#fff' }}>✨</Text>
          </View>

          <Animated.View 
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              opacity: fadeAnim,
              paddingHorizontal: 30
            }}
          >
            {/* Logo Section */}
            <View style={{
              alignItems: 'center',
              marginBottom: 40
            }}>
              <Animated.View style={{
                width: 120,
                height: 120,
                borderRadius: 60,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 20,
                borderWidth: 2,
                borderColor: 'rgba(255, 255, 255, 0.3)',
                transform: [{ scale: heartbeatAnim }]
              }}>
                <Image 
                  source={require('../assets/images/DreamSoul.png')} 
                  style={{ width: 80, height: 80 }}
                  resizeMode="contain"
                />
              </Animated.View>
              
              <Text style={{
                fontSize: 42,
                fontWeight: 'bold',
                color: '#fff',
                textAlign: 'center',
                letterSpacing: 2,
                textShadowColor: 'rgba(0, 0, 0, 0.3)',
                textShadowOffset: { width: 0, height: 2 },
                textShadowRadius: 4
              }}>
                DreamSoul
              </Text>
              
              <Text style={{
                fontSize: 16,
                color: '#fecaca',
                textAlign: 'center',
                marginTop: 8,
                fontStyle: 'italic',
                letterSpacing: 1
              }}>
                "First, hear their soul. Then see their art. Finally, dream together."
              </Text>
            </View>

            {/* Sliding Pillars Section */}
            <View style={{
              width: width - 60,
              height: 200, // Increased height to prevent content cutoff
              overflow: 'hidden',
              marginBottom: 50
            }}>
              <Animated.View
                style={{
                  flexDirection: 'row',
                  width: width * pillars.length,
                  transform: [{
                    translateX: slideAnim.interpolate({
                      inputRange: [0, pillars.length - 1],
                      outputRange: [0, -(width - 60) * (pillars.length - 1)]
                    })
                  }]
                }}
              >
                {pillars.map((pillar, index) => (
                  <View 
                    key={index}
                    style={{
                      width: width - 60,
                      alignItems: 'center',
                      paddingHorizontal: 20
                    }}
                  >
                    <View style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: 20,
                      padding: 25,
                      alignItems: 'center',
                      borderWidth: 1,
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                      width: '100%',
                      minHeight: 180 // Ensure minimum height for content
                    }}>
                      <Text style={{ fontSize: 40, marginBottom: 15 }}>
                        {pillar.icon}
                      </Text>
                      <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: '#fff',
                        textAlign: 'center',
                        marginBottom: 10
                      }}>
                        {pillar.title}
                      </Text>
                      <Text style={{
                        fontSize: 14,
                        color: '#fecaca',
                        textAlign: 'center',
                        lineHeight: 20,
                        flexShrink: 1 // Allow text to shrink if needed
                      }}>
                        {pillar.description}
                      </Text>
                    </View>
                  </View>
                ))}
              </Animated.View>
            </View>

            {/* Pillar Indicators */}
            <View style={{
              flexDirection: 'row',
              marginBottom: 40
            }}>
              {pillars.map((_, index) => (
                <View
                  key={index}
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: currentPillar === index ? '#fff' : 'rgba(255, 255, 255, 0.3)',
                    marginHorizontal: 5
                  }}
                />
              ))}
            </View>

            {/* Find Your Love Button */}
            <TouchableOpacity 
              onPress={() => router.push("/signup")}
              style={{
                backgroundColor: '#fff',
                paddingHorizontal: 40,
                paddingVertical: 18,
                borderRadius: 30,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
                elevation: 8
              }}
            >
              <Text style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: '#b91c3c',
                letterSpacing: 1
              }}>
                Find Your Love ❤️
              </Text>
            </TouchableOpacity>

            {/* Subtitle */}
            <Text style={{
              fontSize: 12,
              color: 'rgba(255, 255, 255, 0.7)',
              textAlign: 'center',
              marginTop: 20,
              paddingHorizontal: 40
            }}>
              Where hearts connect beyond the surface
            </Text>
          </Animated.View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}