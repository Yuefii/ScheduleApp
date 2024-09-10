import { View, StyleSheet, LayoutChangeEvent } from 'react-native';
import { BottomTabBarProps } from "@react-navigation/bottom-tabs"
import TabBarButton from './TabBarButton';
import { useState } from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
    const [dimensions, setDimensions] = useState({ height: 20, width: 100 })
    const buttonWidth = dimensions.width / state.routes.length
    const onTabLayout = (e: LayoutChangeEvent) => {
        setDimensions({
            height: e.nativeEvent.layout.height,
            width: e.nativeEvent.layout.width
        })
    }
    const tabPositionX = useSharedValue(0)
    const animated = useAnimatedStyle(() => {
        return {
            transform: [{
                translateX: tabPositionX.value
            }]
        }
    })
    return (
        <View onLayout={onTabLayout} style={style.tab_bar}>
            <Animated.View style={[animated, {
                position: "absolute",
                backgroundColor: "#000",
                borderRadius: 30,
                marginHorizontal: 12,
                height: dimensions.height - 15,
                width: buttonWidth - 25
            }]} />
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label = typeof options.tabBarLabel === 'string'
                    ? options.tabBarLabel
                    : typeof options.title === 'string'
                        ? options.title
                        : route.name;
                const isFocused = state.index === index;

                const onPress = () => {
                    tabPositionX.value = withSpring(buttonWidth * index, { duration: 1500 })
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TabBarButton
                        key={route.name}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        isFocused={isFocused}
                        routeName={route.name}
                        label={label} 
                        color={isFocused ? "#fff" : "#222"}           />
                );
            })}
        </View>
    );
}

const style = StyleSheet.create({
    tab_bar: {
        position: "absolute",
        bottom: 30,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        marginHorizontal: 80,
        paddingVertical: 15,
        borderRadius: 35,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
    }
})