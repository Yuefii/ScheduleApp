import { icon } from '@/constants/icons'
import { Pressable, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'

export default function TabBarButton({
    onPress,
    onLongPress,
    isFocused,
    routeName,
    label
}: {
    onPress: () => void,
    onLongPress: () => void,
    isFocused: boolean,
    routeName: string,
    color: string,
    label: string
}) {
    const scale = useSharedValue(0)
    useEffect(() => {
        scale.value = withSpring(typeof isFocused === "boolean" ? (isFocused ? 1 : 0) : isFocused, { duration: 350 })
    }, [scale, isFocused])
    const animatedText = useAnimatedStyle(() => {
        const opacity = interpolate(scale.value, [0, 1], [1, 0])
        return {
            opacity
        }
    })
    const animationIcon = useAnimatedStyle(() => {
        const scaleValue = interpolate(scale.value, [0, 1], [1, 1.2])
        const top = interpolate(scale.value, [0, 1], [0, 9])
        return {
            transform: [{
                scale: scaleValue
            }],
            top
        }
    })
    return (
        <Pressable
            onPress={onPress}
            onLongPress={onLongPress}
            style={style.tab_items}
        >
            <Animated.View style={animationIcon}>
                {icon[routeName]({
                    color: isFocused ? "#fff" : "#222",
                })}
            </Animated.View>
            <Animated.Text style={[{ color: isFocused ? '#673ab7' : '#222', fontSize: 12 }, animatedText]}>
                {label}
            </Animated.Text>
        </Pressable>
    )
}

const style = StyleSheet.create({
    tab_items: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
    }
})