import React from 'react';
import renderer, { act } from 'react-test-renderer';
import CustomButton from '../CustomButton';

describe('Custom Button Test', () => {
	test('renders correctly', async () => {

		const onButtonPress = jest.fn();

		let CustomButtonRendered: any = {};

		act(() => {
			CustomButtonRendered = renderer.create(
				<CustomButton buttonText={'Get Started'}
					onButtonPress={onButtonPress}
					buttonType={'primary'} />
			);
		});

		expect(CustomButtonRendered.toJSON()).toMatchSnapshot();
	});
});