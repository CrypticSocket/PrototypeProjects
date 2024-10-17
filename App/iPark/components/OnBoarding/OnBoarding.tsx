import { View, FlatList, Animated } from "react-native";
import React, { useRef, useState } from "react";
import { onBoardingScreens } from "@/services/appwrite";
import OnBoardingItem from "./OnBoardingItem";
import { IOnBoarding } from "@/interface/IOnBoarding";
import Paginator from "./Paginator";
import NextButton from "./NextButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { States } from "@/constants/States";
import { Redirect, router } from "expo-router";

const OnBoarding = () => {
	const scrollX = useRef(new Animated.Value(0)).current;
	const [currentIndex, setCurrentIndex] = useState(0);
	const slidesRef = useRef<FlatList>(null);

	const viewableItemsChanged = useRef(({ viewableItems }: any) => {
		setCurrentIndex(viewableItems[0].index);
	}).current;

	const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

	const scrollNext = async () => {
		if (currentIndex < onBoardingScreens.length - 1) {
			slidesRef.current!.scrollToIndex({ index: currentIndex + 1 });
		} else {
			try {
				await AsyncStorage.setItem(States.viewedOnBoarding, "true");
				return router.replace("./SignIn");
			} catch (error) {
				console.log("Error @setItem: ", error);
			}
		}
	};

	return (
		<View className="justify-center items-center flex-1 py-5">
			<FlatList
				data={onBoardingScreens}
				keyExtractor={(item: IOnBoarding) => item.id.toString()}
				renderItem={({ item }: { item: IOnBoarding }) => (
					<OnBoardingItem item={item} />
				)}
				horizontal
				pagingEnabled
				showsHorizontalScrollIndicator={false}
				bounces={false}
				onScroll={Animated.event(
					[
						{
							nativeEvent: {
								contentOffset: {
									x: scrollX,
								},
							},
						},
					],
					{
						// listener: (event) =>
						// 	console.log("\n\n ", event.nativeEvent),
						useNativeDriver: false,
					}
				)}
				onViewableItemsChanged={viewableItemsChanged}
				viewabilityConfig={viewConfig}
				scrollEventThrottle={32}
				ref={slidesRef}
				className="grow"
			/>
			<Paginator data={onBoardingScreens} scrollX={scrollX} />
			<NextButton scroll={scrollNext} />
		</View>
	);
};

export default OnBoarding;
