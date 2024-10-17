import { View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const SignUpButton = ({ onPress, text, icon }: any) => {
	return (
		<TouchableOpacity
			className="flex-row w-full h-[50px] px-4 justify-between items-center m-2 bg-button-gray rounded-full"
			onPress={onPress}
		>
			<Icon name={icon} size={20} />
			<Text className="font-semibold text-center flex-1">{text}</Text>
		</TouchableOpacity>
	);
};

export default SignUpButton;
