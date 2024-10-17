import { View, Text, Button, TouchableOpacity } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = () => {
	const clearState = async () => {
		await AsyncStorage.clear();
	};

	return (
		<View>
			<Text>Placeholder Screen for the next part!</Text>
			<TouchableOpacity onPress={clearState}>
				<Text>Clear state</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Home;
