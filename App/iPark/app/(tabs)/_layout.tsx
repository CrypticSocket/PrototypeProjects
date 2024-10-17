import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import TabIcon from "@/components/Common/TabIcon";

const TabsLayout = () => {
	return (
		<Tabs
			screenOptions={{
				tabBarShowLabel: false,
				tabBarActiveTintColor: "#FFA001",
				tabBarInactiveTintColor: "#999999",
				tabBarStyle: {
					// backgroundColor: "#161622",
					borderTopWidth: 1,
					// borderTopColor: "#232533",
					height: 84,
					paddingVertical: 10,
				},
			}}
		>
			<Tabs.Screen
				name="Park"
				options={{
					title: "Park",
					headerShown: false,
					tabBarIcon: ({ color, focused }) => (
						<TabIcon
							icon="car-outline"
							color={color}
							name="Park"
							focused={focused}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="MySpace"
				options={{
					title: "My Space",
					headerShown: false,
					tabBarIcon: ({ color, focused }) => (
						<TabIcon
							icon="ellipse-outline"
							color={color}
							name="My Space"
							focused={focused}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="Activity"
				options={{
					title: "Activity",
					headerShown: false,
					tabBarIcon: ({ color, focused }) => (
						<TabIcon
							icon="notifications-outline"
							color={color}
							name="Activity"
							focused={focused}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="Profile"
				options={{
					title: "Profile",
					headerShown: false,
					tabBarIcon: ({ color, focused }) => (
						<TabIcon
							icon="person-outline"
							color={color}
							name="Profile"
							focused={focused}
						/>
					),
				}}
			/>
		</Tabs>
	);
};

export default TabsLayout;
