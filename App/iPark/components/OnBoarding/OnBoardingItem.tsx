import { View, Text, useWindowDimensions } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";

const OnBoardingItem = ({ item }: any) => {
	const { width } = useWindowDimensions();

	return (
		<View className="items-center justify-center flex-1" style={{ width }}>
			<Icon name={item.icon} size={300} className="text-text-main" />
			<Text className="text-5xl text-center mt-10 text-text-main">
				{item.title}
			</Text>
			<Text className="text-sm text-center mt-2 text-text-sub">
				{item.text}
			</Text>
		</View>
	);
};

export default OnBoardingItem;
