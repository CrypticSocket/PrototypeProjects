import {
	View,
	Text,
	StyleSheet,
	useWindowDimensions,
	Animated,
} from "react-native";
import React from "react";
import { IOnBoarding } from "@/interface/IOnBoarding";

const Paginator = ({
	data,
	scrollX,
}: {
	data: IOnBoarding[];
	scrollX: Animated.Value;
}) => {
	const { width } = useWindowDimensions();
	return (
		<View className="flex-row h-[64px]">
			{data.map((item, index) => {
				const inputRange = [
					(index - 1) * width,
					index * width,
					(index + 1) * width,
				];

				const dotWidth = scrollX.interpolate({
					inputRange,
					outputRange: [10, 20, 10],
					extrapolate: "clamp",
				});
				const opacity = scrollX.interpolate({
					inputRange,
					outputRange: [0.4, 1, 0.4],
					extrapolate: "clamp",
				});

				return (
					<Animated.View
						key={index.toString()}
						className="h-[10] rounded-[5px] bg-primary mx-2"
						style={{ width: dotWidth, opacity }}
					/>
				);
			})}
		</View>
	);
};
// https://www.youtube.com/watch?v=Efy48Uoa4RM

export default Paginator;
