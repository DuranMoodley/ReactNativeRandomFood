export default (labelTopSpacing: boolean | undefined) => {
	return {
		textInputLabelStyle: {
			color: '#333333',
			fontSize: 14,
			fontWeight: "500",
			marginLeft: 21,
			marginBottom: 6,
			marginTop: labelTopSpacing ? 11 : 0
		},
		textInputPasswordStyle: {
			paddingLeft: 9,
			fontSize: 12,
			fontWeight: "400"
		},
		passwordContainerStyle: {
			borderRadius: 10,
			marginLeft: 20,
			flexDirection: 'row',
			backgroundColor: '#F2F2F2',
			width: 335,
			height: 46,
			alignItems: 'center'
		},
		passwordImageStyle: {
			width: 24,
			height: 20,
			marginLeft: 180
		},
		textInputStyle: {
			backgroundColor: '#F2F2F2',
			borderRadius: 10,
			width: 335,
			height: 46,
			marginLeft: 20,
			marginRight: 20,
			paddingLeft: 9,
			fontSize: 12,
			fontWeight: "400"
		},
	}
}