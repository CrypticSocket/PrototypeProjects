import {
	Image,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SignUpButton from "@/components/Common/SignUpButton";
import { router } from "expo-router";

const SignIn = () => {
	const clearState = async () => {
		await AsyncStorage.clear();
	};

	const signIn = () => {
		router.replace("./AboutMe");
	};

	return (
		<SafeAreaView className="flex-1 bg-white items-center px-8">
			<View className="flex-1 justify-center items-center gap-y-10">
				<Image
					source={{
						uri: "https://images.stockcake.com/public/5/5/7/557bcbd8-b8c1-4250-9b6b-4cc16f67640f_large/colorful-world-map-stockcake.jpg",
					}}
					className="w-[200px] h-[200px] rounded-full"
					resizeMode="cover"
				/>
				<Text className="text-3xl">Sign into iPark</Text>

				<View>
					<SignUpButton
						onPress={signIn}
						text="Sign in with Google"
						icon="logo-google"
					/>
					<SignUpButton
						onPress={signIn}
						text="Sign in with Apple"
						icon="logo-apple"
					/>
					<SignUpButton
						onPress={clearState}
						text="Clear State"
						icon="trash-bin-outline"
					/>
				</View>
			</View>

			<Text className="my-10 text-center">
				By registering you agree to the{" "}
				<Text className="text-blue-400">terms of service</Text>. See{" "}
				<Text className="text-blue-400">how your data is managed</Text>
			</Text>
		</SafeAreaView>
	);
};

export default SignIn;

const styles = StyleSheet.create({});
