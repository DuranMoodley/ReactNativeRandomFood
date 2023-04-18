/**
 * Initial route of the app to start the user on the journey
 * 
 */

// Internal Imports.
import * as React from 'react';
import { ImageBackground, View, Text, StyleSheet, Image, TextStyle, ViewStyle, ImageBackgroundProps } from 'react-native';
import CustomButton from '../components/CustomButton';

// Styles.
import OnboardingStyles from './Onboarding.styles';

type Props = {
	navigation: {
		goBack: () => void,
		navigate: (text: string) => void
	},
};

const OnBoarding: React.FC<Props> = ({
	navigation
}) => {
	const {
		containerStyle = {},
		textStyle,
		subTitleTextStyle,
		imageBackgroundStyle,
		headerStyle,
		carrotImageStyle,
		imageContainerStyle,
		personImage1Style,
		personImage2Style,
		subTitleTextBoldStyle
	} = OnboardingStyles();

	return (
		<View style={containerStyle}>
			<ImageBackground source={require('../assets/Ellipse.png')} resizeMode="cover" style={imageBackgroundStyle as ImageBackgroundProps}>
				<View style={headerStyle as ViewStyle}>
					<Text style={textStyle as TextStyle}>CiaoChow</Text>
					<Image style={carrotImageStyle} source={require('../assets/carrot.png')} />
				</View>
				<View style={imageContainerStyle as ViewStyle}>
					<Image style={personImage1Style} source={require('../assets/personImage1.png')} />
					<Image style={personImage2Style} source={require('../assets/personImage2.png')} />
				</View>
				<Text numberOfLines={2} style={subTitleTextStyle as TextStyle}>Hungry?<Text style={subTitleTextBoldStyle as TextStyle}> CiaoChow</Text> helps{'\n'} you find something to eat.</Text>
				<CustomButton buttonText='Get Started' buttonType='secondary' onButtonPress={() => navigation.navigate('Register')} />
			</ImageBackground>
		</View>
	);
}

export default OnBoarding;

