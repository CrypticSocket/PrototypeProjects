import { Text, TouchableOpacity } from "react-native";

const GenericButton = ({ onPress, text, styles }: any) => {
	return (
		<TouchableOpacity
			className={`justify-center w-full py-3 px-4 items-center bg-blue-600 rounded-full ${styles}`}
			onPress={onPress}
		>
			<Text className="font-semibold flex-1 text-white text-lg">
				{text}
			</Text>
		</TouchableOpacity>
	);
};

export default GenericButton;
