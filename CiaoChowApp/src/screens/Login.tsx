/**
 * Login user into the application
 * Will make a login api call that will return user token
 */

// Internal Imports.
import React, { useState } from 'react';
import { ImageBackground, View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, TextInput, ScrollView, Alert, ActivityIndicator, TextInputComponent, ViewStyle, TextStyle, StyleProp, ImageStyle } from 'react-native';
import { BASEURL } from '../utils/utils';
import { ERROR_TITLE, ERROR_MESSAGE_FIELDS } from '../utils/messages';

// External Imports.
import axios from 'axios';

// Styles.
import LoginStyles from './Login.styles';
import CustomInputText from '../components/CustomInputText';
import CustomButton from '../components/CustomButton';

type Props = {
	navigation: {
		goBack: () => void,
		navigate: (text: string, { }) => void
	},
};

const Login: React.FC<Props> = ({
	navigation,
}) => {
	const {
		containerStyle,
		scrollViewStyle,
		imageBackgroundStyle,
		backButtonImageStyle,
		imageViewContainerStyle,
		headingLoginTextStyle,
		personImage,
		inputFormContainerStyle,
		havingTroubleTextStyle,
		boldTextStyle
	} = LoginStyles();
	const [email, setEmail] = useState<string>();
	const [password, setPassword] = useState<string>();
	const [isLoading, setIsLoading] = useState<boolean>();

	const alert = (heading: string, message: string) => {
		Alert.alert(
			heading,
			message,
			[
				{ text: "OK", onPress: () => console.log("OK Pressed") }
			]
		);
	}

	const loginUser = async () => {
		if (password?.trim() && email?.trim()) {
			setIsLoading(true);
			axios.post(`${BASEURL}/api/auth/local`, {
				password: password,
				identifier: email
			}, {
				headers: {
					'Content-Type': 'application/json'
				}
			}).then(response => {
				navigation.navigate('Details', {
					token: response.data.jwt
				})
				setIsLoading(false);
			})
				.catch(err => {
					alert(ERROR_TITLE, err.response.data.error.message);
					setIsLoading(false);
				});
		} else {
			Alert.alert(ERROR_TITLE, ERROR_MESSAGE_FIELDS);
		}
	}
	return (
		<View style={[containerStyle, { minHeight: 0 }]}>
			<ScrollView style={scrollViewStyle}>
				<ImageBackground source={require('../assets/Ellipse.png')} resizeMode="cover" style={imageBackgroundStyle}>
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<Image style={backButtonImageStyle} source={require('../assets/back.png')} />
					</TouchableOpacity>
					<View style={imageViewContainerStyle as ViewStyle}>
						<Text style={headingLoginTextStyle as TextStyle}>Login</Text>
						<Image style={personImage as ImageStyle} source={require('../assets/personImage2.png')} />
					</View>

					<View style={inputFormContainerStyle}>
						<CustomInputText inputType='normal' placeholderText='yourmail@mail.com' labelText='email' value={email} onChangeText={setEmail} labelTopSpacing />
						<CustomInputText onChangeText={setPassword} inputType='password' placeholderText='your password' labelTopSpacing labelText='password' value={password} />
						<CustomButton buttonText='Login' buttonType='primary' onButtonPress={loginUser} />
						{isLoading && <ActivityIndicator size="small" color="#00ff00" />}
						<TouchableOpacity onPress={() => navigation.goBack()}>
							<Text style={havingTroubleTextStyle as TextStyle}>Don't have an account? <Text style={boldTextStyle as TextStyle}>Register</Text></Text>
						</TouchableOpacity>
					</View>
				</ImageBackground>
			</ScrollView>
		</View>
	)
}

export default Login;