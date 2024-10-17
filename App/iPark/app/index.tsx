import OnBoarding from "@/components/OnBoarding/OnBoarding";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect } from "expo-router";

const Loading = () => (
	<View className="flex-1 justify-center items-center bg-white">
		<ActivityIndicator size={"large"} />
	</View>
);

export default function App() {
	const [loading, setLoading] = useState(true);
	const [viewedOnBoarding, setViewedOnBoarding] = useState(false);

	useEffect(() => {
		checkOnBoarding();
	}, []);

	const checkOnBoarding = async () => {
		try {
			const value = await AsyncStorage.getItem("@viewedOnBoarding");
			if (value !== null) {
				setViewedOnBoarding(true);
			}
		} catch (error) {
			console.log("Error @checkOnBoarding: ", error);
		} finally {
			setLoading(false);
		}
	};

	if (viewedOnBoarding) {
		return <Redirect href="./SignIn" />;
	}

	return (
		<SafeAreaView className="h-full bg-white">
			{loading ? <Loading /> : <OnBoarding />}
		</SafeAreaView>
	);
}
