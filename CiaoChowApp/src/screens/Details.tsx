/**
 * Details view allows users to see food and pick another food item
 * Will make an api call that will return food data and images.
 */

// Internal Imports.
import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator, ViewStyle, TextStyle, StatusBar } from 'react-native';
import { BASEURL, randomNumberGeneration, getRandomItem } from '../utils/utils';
import CustomButton from '../components/CustomButton';
import { Food } from '../data/data';

// External Imports.
import axios from 'axios';

// Styles.
import DetailsStyles from './Details.styles';
import { ERROR_TITLE } from '../utils/messages';

type Props = {
	route: {
		params: {
			token: string;
		}
	},
	navigation: {
		goBack: () => void,
		navigate: (text: string) => void
	},
};

const Details: React.FC<Props> = ({
	navigation,
	route
}) => {
	const {
		topImageStyle,
		containerStyle,
		bottomContainerStyle,
		bottomTopContainerStyle,
		titleTextStyle,
		heartContainerStyle,
		heartImageStyle,
		buttonContainerStyle,
		dividerStyle,
		descriptionTextStyle,
		buttonViewContainerStyle,
		buttonDividerStyle,
		emptyViewStyle
	} = DetailsStyles();
	const { token } = route.params;

	const [food, setFood] = useState<Food[]>();
	const [error, setError] = useState<string>();
	const [currentFoodItem, setCurrentFoodItem] = useState<Food>();
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [descriptionSelected, setDescriptionSelected] = useState<boolean>(true);

	const getData = () => {
		axios.get(`${BASEURL}/api/chows?populate=*`, {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `bearer ${token}`
			}
		}).then(res => {
			setFood(res.data.data);
			setCurrentFoodItem(food?.[0]);
			setIsLoading(false);
		}).catch(err => {
			setError(ERROR_TITLE);
		});
	};


	const onPress = () => {
		const lengthOfFood = !food?.length ? 0 : food?.length;
		const randomId = randomNumberGeneration(lengthOfFood);
		const randomItem = getRandomItem(food, randomId);
		setCurrentFoodItem(randomItem);
	}

	const renderEmptyComponent = () => {
		return (
			<View style={emptyViewStyle as ViewStyle}>
				<Text>{error}</Text>
				<CustomButton buttonText='Try Again' onButtonPress={() => { setIsLoading(true); getData(); }} buttonType='primary' />
			</View>);
	}

	useEffect(() => {
		getData();
	}, [isLoading])

	return (
		<View style={containerStyle}>
			<StatusBar backgroundColor="aqua" barStyle="light-content" />
			{
				isLoading ?
					<View style={emptyViewStyle as ViewStyle}>
						<Text>Loading...</Text>
						<ActivityIndicator size="large" color="#00ff00" />
					</View>
					:
					error === 'Error'
						?
						renderEmptyComponent()
						:
						<>
							<Image style={topImageStyle} resizeMode={'cover'} source={{ uri: `${BASEURL}${currentFoodItem?.attributes?.Image?.data[0]?.attributes?.url}` }} />
							<View style={bottomContainerStyle}>
								<View style={bottomTopContainerStyle as ViewStyle}>
									<Text style={titleTextStyle as TextStyle}>{currentFoodItem?.attributes?.Title}</Text>
									<View style={heartContainerStyle as ViewStyle}>
										<Image style={heartImageStyle} source={require('../assets/heart.png')} />
									</View>
								</View>
								<View style={buttonContainerStyle as ViewStyle}>
									<TouchableOpacity onPress={() => { setDescriptionSelected(true); }}>
										<Text style={{ color: descriptionSelected ? "#4CAD73" : "#333333", fontSize: 14, fontWeight: '400' }}>Description</Text>
										{descriptionSelected && <View style={buttonDividerStyle as ViewStyle} />}
									</TouchableOpacity>
									<TouchableOpacity onPress={() => { setDescriptionSelected(false); }}>
										<Text style={{ color: !descriptionSelected ? "#4CAD73" : "#333333", fontSize: 14, fontWeight: '400' }}>Nutrition facts</Text>
										{!descriptionSelected && <View style={buttonDividerStyle as ViewStyle} />}
									</TouchableOpacity>
								</View>
								<View style={dividerStyle} />
								<Text style={descriptionTextStyle as TextStyle}>{currentFoodItem?.attributes?.Description}</Text>
								<View style={buttonViewContainerStyle as ViewStyle}>
									<CustomButton buttonText={'Nah! Find something else.'} onButtonPress={onPress} buttonType='primary' />
								</View>
							</View>
						</>
			}
		</View>
	)
}

export default Details;