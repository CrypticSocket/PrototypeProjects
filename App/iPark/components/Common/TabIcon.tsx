import { View, Text } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

const TabIcon = ({ icon, color, name, focused }: any) => {
	return (
		<View
			className={`items-center justify-center gap-y-2 w-20  }`} //${focused ? "border-t-4 border-orange-400" : ""}
		>
			<Icon name={icon} color={color} size={30} />
			<Text
				className={`${
					focused ? "font-bold" : "font-normal"
				} text-xs text-center`}
				style={{ color: color }}
			>
				{name}
			</Text>
		</View>
	);
};

export default TabIcon;
