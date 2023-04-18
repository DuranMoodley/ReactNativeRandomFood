//import Colors from "../themes/colors/Colors";

export default (buttonType: string) => {
	//const { input, button, container, card, shadow, bottomContainer } = Colors;

	return {
		buttonContainerStyle: {
			backgroundColor: buttonType === 'primary' ? "#4CAD73" : "white",
			borderRadius: 10,
			marginTop: 22,
			marginLeft: 20,
			width: 350,
			alignItems: 'center',
			height: 54,
			justifyContent: 'center',
			flexDirection: 'row',
		},
		buttonTextStyle: {
			color: buttonType === 'primary' ? "#FFFFFF" : "#4CAD73",
			fontSize: 18,
			fontWeight: "600"
		},
	}
}