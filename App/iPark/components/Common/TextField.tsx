import { View, Text, TextInput } from "react-native";
import React from "react";

const TextField = ({
	placeholder,
	value,
	textChangeHandler,
	inputType,
}: any) => {
	return (
		<View className="border-gray-200 border-2 w-full rounded-lg px-4 h-12 justify-center my-4">
			{value.length > 0 ? (
				<Text className="text-xs text-gray-400">{placeholder}</Text>
			) : (
				<></>
			)}

			<TextInput
				placeholder={placeholder}
				placeholderTextColor="#888"
				value={value}
				onChangeText={textChangeHandler}
				className="text-lg"
				inputMode={inputType}
			/>
		</View>
	);
};

export default TextField;
