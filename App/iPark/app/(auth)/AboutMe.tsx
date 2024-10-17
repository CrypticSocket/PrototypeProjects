import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TextField from "@/components/Common/TextField";
import GenericButton from "@/components/Common/GenericButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { router } from "expo-router";

const AboutMe = () => {
	const [form, setForm] = useState({
		firstName: "",
		lastName: "",
		phoneNumber: "",
	});

	return (
		<SafeAreaView className="bg-white h-full">
			<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
				<View className="bg-gray-300 h-[200px]"></View>
				<View className="p-8 gap-y-8 flex-grow justify-center">
					<Text className="text-3xl font-semibold">About Me</Text>
					<View>
						<TextField
							placeholder="First Name"
							value={form.firstName}
							textChangeHandler={(e: string) =>
								setForm({ ...form, firstName: e })
							}
							inputType="text"
						/>
						<TextField
							placeholder="Last Name"
							value={form.lastName}
							textChangeHandler={(e: string) =>
								setForm({ ...form, lastName: e })
							}
							inputType="text"
						/>
						<TextField
							placeholder="Phone Number"
							value={form.phoneNumber}
							textChangeHandler={(e: string) =>
								setForm({ ...form, phoneNumber: e })
							}
							inputType="numeric"
						/>
					</View>
					<GenericButton
						text="Continue"
						styles="mt-8 h-14"
						onPress={() => router.replace("../(tabs)/Park")}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default AboutMe;
