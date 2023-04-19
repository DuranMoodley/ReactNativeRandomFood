export default () => {
	return {
		containerStyle: {
			flex: 1,
			backgroundColor: "white"
		},
		topImageStyle: {
			width: '100%',
			height: '45%'
		},
		bottomContainerStyle: {
			flex: 1,
			backgroundColor: 'white',
			marginTop: -20,
			borderTopLeftRadius: 30,
			borderTopRightRadius: 30
		},
		bottomTopContainerStyle: {
			flexDirection: 'row',
			height: 50,
			marginHorizontal: 20,
			marginTop: 30,
			justifyContent: 'space-between'
		},
		titleTextStyle: {
			fontWeight: '600',
			fontSize: 24,
			color: "#333333"
		},
		heartContainerStyle: {
			height: 30,
			width: 30,
			borderRadius: 8,
			marginTop: 4,
			opacity: 0.7,
			backgroundColor: "#0000008F",
			justifyContent: 'center',
			alignItems: 'center'
		},
		heartImageStyle: {
			width: 16,
			height: 14
		},
		buttonContainerStyle: {
			flexDirection: 'row',
			marginTop: 40,
			justifyContent: 'space-evenly'
		},
		dividerStyle: {
			height: 1,
			width: '100%',
			backgroundColor: "#BDBDBD"
		},
		descriptionTextStyle: {
			marginTop: 18,
			marginHorizontal: 28,
			color: "#828282",
			fontWeight: '400',
			fontSize: 13,
			lineHeight: 14
		},
		buttonViewContainerStyle: {
			elevation: 20,
			shadowRadius: 2,
			shadowOffset: {
				width: 0,
				height: -3,
			},
			height: 92,
			position: 'absolute',
			bottom: 0,
			width: '100%',
			backgroundColor: '#FFFFFF',
			borderTopRightRadius: 40,
			borderTopLeftRadius: 40,
		},
		buttonDividerStyle: {
			height: 4,
			width: 81,
			backgroundColor: "#0EB177",
			alignSelf: 'center',
			marginTop: 8,
			borderTopLeftRadius: 3,
			borderTopRightRadius: 3
		},
		emptyViewStyle: {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
			alignSelf: 'center'
		}
	}
}