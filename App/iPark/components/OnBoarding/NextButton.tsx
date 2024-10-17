import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const NextButton = ({ scroll }: any) => {
	const size = 128;
	const strokeWidth = 2;
	const center = size / 2;
	const radius = size / 2 - strokeWidth / 2;

	return (
		<View className="flex-row justify-around items-center w-[100%] gap-4">
			<TouchableOpacity className="flex-1 items-center py-5 rounded-xl">
				<Text className="text-primary ">Skip</Text>
			</TouchableOpacity>
			<TouchableOpacity
				className="flex-1 items-center bg-primary py-5 rounded-xl"
				onPress={scroll}
			>
				<Text className="text-white">Next</Text>
			</TouchableOpacity>
		</View>
	);
};

export default NextButton;
