/**
 * Register user into the application
 * Will make a register api call that will return user token
 */

// Internal Imports.
import React, { useState, useRef } from 'react';
import { ImageBackground, View, Text, Image, TouchableOpacity, ScrollView, Alert, ActivityIndicator, ImageStyle, ViewStyle, TextStyle, KeyboardAvoidingView, Platform, TextInput } from 'react-native';
import { BASEURL, validateEmail } from '../utils/utils';
import CustomButton from '../components/CustomButton';
import { ERROR_TITLE, ERROR_MESSAGE_FIELDS, UNEXPECTED_ERROR, EMAIL_ERROR } from '../utils/messages';

// External Imports.
import axios from 'axios';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

// Styles.
import RegisterStyles from './Register.styles';
import CustomInputText from '../components/CustomInputText';

type Props = {
	navigation: {
		goBack: () => void;
		navigate: (text: string) => void;
	};
};

const Register: React.FC<Props> = ({
	navigation
}) => {

	const {
		containerStyle,
		imageBackgroundStyle,
		backImageStyle,
		personImageStyle,
		registerHeadingTextStyle,
		havingTroubleTextStyle,
		boldTextStyle
	} = RegisterStyles();

	const [username, setUsername] = useState<string>();
	const [isLoading, setIsLoading] = useState<boolean>();
	const [email, setEmail] = useState<string>();
	const [password, setPassword] = useState<string>();
	const lastEmailRef = useRef<typeof TextInput>();
	const lastPasswordlRef = useRef<typeof TextInput>();

	const alert = (heading: string, message: string) => {
		Alert.alert(
			heading,
			message,
			[
				{ text: "OK", onPress: () => console.log("OK Pressed") }
			]
		);
	}

	const registerUser = async () => {
		if (username?.trim() && password?.trim() && email?.trim()) {
			if (!validateEmail(email)) {
				alert(ERROR_TITLE, EMAIL_ERROR);
			}
			else {
				setIsLoading(true);
				axios.post(`${BASEURL}/api/auth/local/register`, {
					username: username,
					password: password,
					email: email
				}, {
					headers: {
						'Content-Type': 'application/json'
					}
				}).then(response => {
					if (response.data.jwt !== undefined || response.data.jwt !== null) {
						navigation.navigate('Login');
					} else {
						alert(ERROR_TITLE, UNEXPECTED_ERROR);
					}
					setIsLoading(false);
				})
					.catch(err => {
						alert(ERROR_TITLE, err.response.data.error.message);
						setIsLoading(false);
					});
			}
		} else {
			alert(ERROR_TITLE, ERROR_MESSAGE_FIELDS);
		}
	}
	
	return (
		<KeyboardAwareScrollView style={{backgroundColor: 'white'}}>
			<View style={containerStyle}>
				<ImageBackground source={require('../assets/Ellipse.png')} resizeMode="cover" style={imageBackgroundStyle}>
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<Image style={backImageStyle} source={require('../assets/back.png')} />
					</TouchableOpacity>
					<Text style={registerHeadingTextStyle as TextStyle}>Register</Text>
					<Image style={personImageStyle as ImageStyle} source={require('../assets/personImage1_big.png')} />
				</ImageBackground>
				<View style={[{marginTop: 35}]}>
						<CustomInputText firstField={true} refValue={lastEmailRef} inputType='normal' placeholderText='muncher' labelText='username' value={username} onChangeText={setUsername} />
						<CustomInputText  refValue={lastEmailRef} onSubmit={() =>lastPasswordlRef?.current?.focus() } inputType='normal' placeholderText='yourmail@mail.com' labelText='email' value={email} onChangeText={setEmail} labelTopSpacing />
						
						<CustomInputText keyBoardReturn='done'  refValue={lastPasswordlRef} onChangeText={setPassword} inputType='password' placeholderText='your password' labelTopSpacing labelText='password' value={password} />
						<CustomButton buttonText='Register' buttonType='primary' onButtonPress={registerUser} />
						{isLoading && <ActivityIndicator size="small" color="#00ff00" style={{ position: 'absolute', alignSelf: 'center' }} />}
						<TouchableOpacity onPress={() => navigation.navigate('Login')}>
							<Text style={havingTroubleTextStyle as TextStyle}>Have an account? <Text style={boldTextStyle as TextStyle}>Login</Text></Text>
						</TouchableOpacity>
				</View>
			</View>
		</KeyboardAwareScrollView>
	)
}

export default Register;