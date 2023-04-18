/**
 * Custom component for Input form fields that can be reused.
 * There are two main types i.e. normal or password. 
 */

// Internal Imports.
import React, {useRef} from 'react';
import { View, Text, TextStyle, TextInput, TextInputProps, Image, ViewStyle } from 'react-native';

// Styles.
import CustomInputTextStyles from './CustomInputText.styles';

type Props = {
	labelText: string;
	onChangeText: (text: string) => void;
	value: string | undefined;
	labelTopSpacing?: boolean | undefined;
	placeholderText: string;
	ref: any;
	inputType: "normal" | "password";
	onSubmitEditing: () => void;
};

const CustomInputText: React.FC<Props> = ({
	labelText,
	onChangeText,
	value,
	labelTopSpacing,
	placeholderText,
	inputType,
	ref,
	onSubmitEditing
}) => {

	const {
		textInputLabelStyle,
		textInputPasswordStyle,
		textInputStyle,
		passwordContainerStyle,
		passwordImageStyle
	} = CustomInputTextStyles(labelTopSpacing);

	let lastNameRef = useRef();

	return (
		<View>
			<Text style={textInputLabelStyle as TextStyle}>{labelText}</Text>
			{
				inputType === 'normal' ?
					<TextInput
						ref={(input) => {ref = input;}}
						placeholderTextColor={"#BDBDBD"}
						placeholderStyle={{ marginLeft: 9 }}
						style={textInputStyle as TextStyle}
						onChangeText={onChangeText}
						value={value}
						blurOnSubmit={false}
						returnKeyType="next"
						onSubmitEditing={() => {
							ref?.current?.focus();
						}}
						//onSubmitEditing={onSubmitEditing()}
						placeholder={placeholderText}
						keyboardType="default"
					/>
					:
					<View style={passwordContainerStyle as ViewStyle}>
						<TextInput
							ref={(input) => {lastNameRef = input;}}
							placeholderTextColor={"#BDBDBD"}
							placeholderStyle={{ marginLeft: 9 }}
							style={textInputPasswordStyle as TextInputProps}
							onChangeText={onChangeText}
							value={value}
							returnKeyType="next"
							onSubmitEditing={() => {
								lastNameRef?.focus();
							}}
							placeholder={placeholderText}
							keyboardType="default"
							secureTextEntry
						/>
						<Image style={passwordImageStyle} source={require('../assets/password.png')} />
					</View>
			}

		</View>
	)
}

export default CustomInputText;