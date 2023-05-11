import React, { Fragment, useState, useEffect } from "react";

import {
	Text,
	Flex,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
	Slider,
	Tooltip,
	SliderTrack,
	SliderFilledTrack,
	SliderThumb,
	SliderMark,
} from "@chakra-ui/react";

import lodash from "lodash";

const CoordinateInputView = (props) => {
	const {
		title,
		inputFormat,
		updatedValue = 0,
		onChangeValue,
		onChangeValueEnd,
	} = props;

	const [state, setState] = useState({
		value: updatedValue,
		isOnChangeStart: false,
	});

	const updateState = (data) =>
		setState((preState) => ({ ...preState, ...data }));

	const [showTooltip, setShowTooltip] = React.useState(false);

	/*  Life-cycles Methods */

	useEffect(() => {
		return () => {};
	}, []);

	useEffect(() => {
		if (!lodash.isNil(updatedValue)) {
			updateState({
				value: updatedValue,
			});
		}
	}, [updatedValue]);

	/*  Public Interface Methods */

	/*  UI Events Methods   */

	const onChangeStart = () => {
		updateState({
			isOnChangeStart: true,
		});
	};

	const onMouseEnter = () => {
		if (!(state?.isOnChangeStart ?? true)) {
			setShowTooltip(true);
		}
	};
	const onMouseLeave = () => {
		if (!state?.isOnChangeStart ?? true) {
			setShowTooltip(false);
		}
	};

	const onChangeEnd = (value) => {
		setShowTooltip(false);

		updateState({
			isOnChangeStart: false,
		});

		onChangeValueEnd && onChangeValueEnd(value);
	};

	const onChangeSliderValue = (value) => {
		updateState({
			value: value,
		});
		onChangeValue && onChangeValue(value);
	};

	/*  Server Request Methods  */

	/*  Server Response Methods  */

	/*  Server Response Handler Methods  */

	/*  Custom-Component sub-render Methods */

	const renderMasterContainer = () => {
		const sliderMarkValueArray = [
			inputFormat?.min,
			inputFormat?.min + ((inputFormat?.max - inputFormat?.min) * 1) / 4,
			(inputFormat?.min + inputFormat?.max) / 2,
			(inputFormat?.max - inputFormat?.min) / 4,
			inputFormat?.max,
		];

		return (
			<>
			</>
		);
	};

	return renderMasterContainer();
};

export default CoordinateInputView;
