import React, { Fragment, useState, useEffect, useRef, createRef } from "react";

import {
	useDisclosure,
	useColorMode,
	Heading,
	Flex,
	IconButton,
	Icon,
	Tooltip,
} from "@chakra-ui/react";

import {
	HamburgerIcon,
	MoonIcon,
	SunIcon,
	SettingsIcon,
} from "@chakra-ui/icons";

import { FaGlobeAfrica } from "react-icons/fa";

import { BsFillInfoCircleFill } from "react-icons/bs";

import { connect } from "react-redux";

import SettingsView from "../settings";
import AboutApp from "../aboutapp";

import Actions from "../../redux/action";
import Constants from "../../utils/Constants";
import AppManager from "../../utils/AppManager";

const { MasterDrawerMenuType, MasterDrawerMenuConfig } = Constants;

const NavBarView = (props) => {
	const { userConfig } = props;

	const [state, setState] = useState({
		selectedMenuType:
			userConfig?.selectedMenuType ?? MasterDrawerMenuType.Search,
	});

	const updateState = (data) =>
		setState((preState) => ({ ...preState, ...data }));

	const { isOpen, onClose } = useDisclosure();
	const { colorMode, toggleColorMode } = useColorMode();

	const btnRef = useRef();
	const settingsRef = createRef();
	const aboutAppRef = createRef();

	/*  Life-cycles Methods */

	useEffect(() => {
		return () => {};
	}, []);

	useEffect(() => {
		updateState({
			selectedMenuType:
				userConfig?.selectedMenuType ?? MasterDrawerMenuType.Search,
		});
	}, [userConfig]);

	/*  Public Interface Methods */

	/*  UI Events Methods   */

	const onPressAboutApp = () => {
		aboutAppRef.current && aboutAppRef.current.openModal();
	};

	const onPressSettings = () => {
		settingsRef.current && settingsRef.current.openModal();
	};

	/*  Server Request Methods  */

	/*  Server Response Methods  */

	/*  Server Response Handler Methods  */

	/*  Custom-Component sub-render Methods */

	const renderMasterContainer = () => {
		return (
			<>
			
			</>	
		);
	};

	return renderMasterContainer();
};

const mapStateToProps = (state) => {
	return {
		userConfig: state.userConfig,
		userPref: state.userPref,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setUserConfig: (userConfig) =>
			dispatch(Actions.setUserConfig(userConfig)),
		setUserPref: (userPref) => dispatch(Actions.setUserPref(userPref)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBarView);
