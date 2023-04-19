/**
 * Custom component for Input form fields that can be reused.
 * There are two main types i.e. normal or password. 
 */

// Internal Imports.
import React, {useRef} from 'react';
import { View, Text, TextStyle, TextInput, TextInputProps, Image, ViewStyle, ReturnKeyTypeOptions } from 'react-native';

// Styles.
import CustomInputTextStyles from './CustomInputText.styles';

type Props = {
	labelText: string;
	onChangeText: (text: string) => void;
	value: string | undefined;
	labelTopSpacing?: boolean | undefined;
	placeholderText: string;
	firstField?: boolean;
	inputType: "normal" | "password";
	refValue?: any;
	onSubmit?: () => void;
	keyBoardReturn?: string;
};

const CustomInputText: React.FC<Props> = ({
	labelText,
	onChangeText,
	value,
	labelTopSpacing,
	placeholderText,
	inputType,
	firstField = false,
	refValue,
	onSubmit,
	keyBoardReturn = "next"
}) => {

	const {
		textInputLabelStyle,
		textInputPasswordStyle,
		textInputStyle,
		passwordContainerStyle,
		passwordImageStyle
	} = CustomInputTextStyles(labelTopSpacing);

	return (
		<View>
			<Text style={textInputLabelStyle as TextStyle}>{labelText}</Text>
			{
				inputType === 'normal' ?
					<TextInput
						placeholderTextColor={"#BDBDBD"}
						placeholderStyle={{ marginLeft: 9 }}
						style={textInputStyle as TextStyle}
						onChangeText={onChangeText}
						value={value}
						autoCapitalize='none'
						autoCorrect={false}
						onSubmitEditing={() => { firstField ? refValue?.current?.focus() : onSubmit()}}
						blurOnSubmit={false}
						ref={refValue}
						returnKeyType={keyBoardReturn as ReturnKeyTypeOptions}
						placeholder={placeholderText}
						keyboardType="default"
					/>
					:
					<View style={passwordContainerStyle as ViewStyle}>
						<TextInput
							placeholderTextColor={"#BDBDBD"}
							placeholderStyle={{ marginLeft: 9 }}
							style={textInputPasswordStyle as TextInputProps}
							onChangeText={onChangeText}
							value={value}
							returnKeyType={keyBoardReturn as ReturnKeyTypeOptions}
							placeholder={placeholderText}
							keyboardType="default"
							ref={refValue}
							secureTextEntry
						/>
						<Image style={{position: 'absolute', right: 20}} source={require('../assets/password.png')} />
					</View>
			}

		</View>
	)
}

export default CustomInputText;