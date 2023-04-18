/**
 * Custom Button that can be reused in other screen
 * There are two main button types i.e. primary or secondary
 * 
 */
// Internal Imports.
import React from 'react';
import { View, Text, TouchableOpacity, TextStyle } from 'react-native';

// Styles.
import CustomButtonStyles from './CustomButton.styles';

type Props = {
	buttonText: string;
	onButtonPress: () => void;
	buttonType: "primary" | "secondary";
};

const CustomButton: React.FC<Props> = ({
	buttonText,
	onButtonPress,
	buttonType
}) => {
	const {
		buttonContainerStyle = {},
		buttonTextStyle,
	} = CustomButtonStyles(buttonType);

	return (
		<View>
			<TouchableOpacity style={buttonContainerStyle} onPress={onButtonPress}>
				<Text style={buttonTextStyle as TextStyle}>{buttonText}</Text>
			</TouchableOpacity>
		</View>
	)
}

export default CustomButton;
